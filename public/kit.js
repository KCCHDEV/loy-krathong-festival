/*!
 * kit.js — JavaScript ฝั่ง browser ของ Kitsune (เขียนเอง ไม่พึ่ง htmx)
 * ใช้ attribute ชุดเดียวกับ htmx (hx-*) เลยเปลี่ยนมาใช้ได้โดยไม่ต้องแก้หน้าเว็บ
 *
 *  request   hx-get | hx-post | hx-put | hx-patch | hx-delete = URL
 *  trigger   hx-trigger="click | submit | change | load | revealed | intersect once | every 2s |
 *                        input changed delay:300ms, search | keyup from:body throttle:1s"
 *  target    hx-target="this | #id | closest .x | find .x | next | previous | body"
 *  swap      hx-swap="innerHTML | outerHTML | beforebegin | afterbegin | beforeend | afterend | delete | none"
 *            hx-select="css" · hx-swap-oob="true | outerHTML | beforeend:#id | innerHTML:#id" ในคำตอบ
 *  ข้อมูล     hx-include="css" · hx-vals='{"a":1}' · hx-encoding="multipart/form-data"
 *  UI        hx-indicator="css" · class htmx-request / htmx-indicator · hx-disabled-elt="this | find button | css"
 *            hx-confirm="ข้อความ" · hx-push-url="true" · hx-on--after-request="js" · hx-on:click="js"
 *  boost     hx-boost="true" บน <body> = ลิงก์/ฟอร์มทั้งหน้าเปลี่ยนหน้าแบบไม่โหลดใหม่ (hx-boost="false" ยกเว้น)
 *  preload   hx-ext="preload" + attribute preload บน container = เริ่มโหลดหน้าตอนกดเมาส์ลง (preload="mouseover" = ตอน hover)
 *  SSE       sse-connect="/url" + sse-swap="ชื่อ event" บนลูก
 *  WebSocket ws-connect="/url" + <form ws-send> ส่งค่าในฟอร์มเป็น JSON · คำตอบเป็น HTML ที่มี hx-swap-oob
 *  header ตอบกลับ  HX-Redirect · HX-Refresh · HX-Retarget · HX-Reswap · HX-Trigger · HX-Push-Url
 *  status    2xx ถูกนำไปแปะ (ยกเว้น 204) · 422 แปะด้วย (validation) · อื่นๆ ไม่แปะ แต่ยิง event htmx:responseError
 */
;(function () {
  'use strict'
  if (window.kit) return

  var doc = document
  var VERBS = ['get', 'post', 'put', 'patch', 'delete']
  var bound = new WeakSet()
  var inflight = new WeakMap()
  var preloaded = new Map()
  var PRELOAD_TTL = 5000

  // ───────────── ตัวช่วยเล็กๆ ─────────────

  function emit(el, name, detail) {
    var ev = new CustomEvent(name, { bubbles: true, cancelable: true, detail: detail || {} })
    el.dispatchEvent(ev)
    return ev
  }

  function parseTime(s) {
    var m = /^([\d.]+)(ms|s)?$/.exec(String(s || '').trim())
    return m ? parseFloat(m[1]) * (m[2] === 's' ? 1000 : 1) : 0
  }

  /** ค่า attribute ของ element หรือ ancestor ที่ใกล้ที่สุด (เหมือน inherit ของ htmx) */
  function inherited(el, name) {
    var n = el.closest('[' + name + ']')
    return n ? n.getAttribute(name) : null
  }

  function findTarget(el, spec) {
    if (!spec || spec === 'this') return el
    if (spec === 'body') return doc.body
    var m = /^(closest|find|next|previous)(?:\s+(.+))?$/.exec(spec)
    if (m) {
      var sel = m[2]
      if (m[1] === 'closest') return el.closest(sel)
      if (m[1] === 'find') return el.querySelector(sel)
      var step = m[1] === 'next' ? 'nextElementSibling' : 'previousElementSibling'
      for (var n = el[step]; n; n = n[step]) if (!sel || n.matches(sel)) return n
      return null
    }
    return doc.querySelector(spec)
  }

  function parseTriggers(str, el) {
    var out = []
    if (!str) {
      var tag = el.tagName
      out.push({ event: tag === 'FORM' ? 'submit' : tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' ? 'change' : 'click' })
      return out
    }
    str.split(',').forEach(function (part) {
      var toks = part.trim().split(/\s+/)
      if (!toks[0]) return
      if (toks[0] === 'every') return out.push({ every: parseTime(toks[1]) })
      var spec = { event: toks[0] }
      toks.slice(1).forEach(function (tok) {
        if (tok === 'once') spec.once = true
        else if (tok === 'changed') spec.changed = true
        else if (tok.indexOf('delay:') === 0) spec.delay = parseTime(tok.slice(6))
        else if (tok.indexOf('throttle:') === 0) spec.throttle = parseTime(tok.slice(9))
        else if (tok.indexOf('from:') === 0) spec.from = tok.slice(5)
      })
      out.push(spec)
    })
    return out
  }

  // ───────────── swap ─────────────

  function revive(root) {
    var scripts = root.tagName === 'SCRIPT' ? [root] : Array.prototype.slice.call(root.querySelectorAll('script'))
    scripts.forEach(function (old) {
      var s = doc.createElement('script')
      for (var i = 0; i < old.attributes.length; i++) s.setAttribute(old.attributes[i].name, old.attributes[i].value)
      s.text = old.text
      old.replaceWith(s)
    })
  }

  function insert(target, frag, style) {
    var nodes = Array.prototype.slice.call(frag.childNodes)
    switch (style) {
      case 'outerHTML': target.replaceWith(frag); break
      case 'beforebegin': target.before(frag); break
      case 'afterbegin': target.prepend(frag); break
      case 'beforeend': target.append(frag); break
      case 'afterend': target.after(frag); break
      case 'delete': target.remove(); return
      case 'none': return
      default: target.replaceChildren(frag)
    }
    nodes.forEach(function (n) {
      if (n.nodeType === 1) {
        revive(n)
        process(n)
      }
    })
    return nodes
  }

  /** hx-swap-oob: ชิ้นที่ระบุปลายทางเอง (ระดับบนสุดของคำตอบ) */
  function applyOob(content) {
    Array.prototype.slice.call(content.children).forEach(function (el) {
      var v = el.getAttribute('hx-swap-oob')
      if (v === null) return
      el.removeAttribute('hx-swap-oob')
      el.remove()
      var style = 'outerHTML'
      var sel = el.id ? '#' + CSS.escape(el.id) : null
      if (v && v !== 'true') {
        var i = v.indexOf(':')
        style = (i < 0 ? v : v.slice(0, i)).trim() || 'outerHTML'
        if (i >= 0) sel = v.slice(i + 1).trim()
      }
      if (!sel) return
      doc.querySelectorAll(sel).forEach(function (t) {
        // outerHTML ใช้ตัว element เอง, แบบอื่นใช้เนื้อหาข้างใน (เหมือน htmx)
        var frag = doc.createDocumentFragment()
        var src = el.cloneNode(true)
        if (style === 'outerHTML') frag.append(src)
        else frag.append.apply(frag, Array.prototype.slice.call(src.childNodes))
        insert(t, frag, style)
      })
    })
  }

  function parse(html) {
    var tpl = doc.createElement('template')
    var title = null
    if (/^\s*<!doctype|<html[\s>]/i.test(html.slice(0, 600))) {
      var d = new DOMParser().parseFromString(html, 'text/html')
      title = d.title
      tpl.content.append.apply(tpl.content, Array.prototype.slice.call(d.body.childNodes))
    } else {
      tpl.innerHTML = html
    }
    return { content: tpl.content, title: title }
  }

  function swap(target, html, style, select) {
    var parsed = parse(html)
    applyOob(parsed.content)
    var content = parsed.content
    if (select) {
      content = doc.createDocumentFragment()
      parsed.content.querySelectorAll(select).forEach(function (n) { content.append(n) })
    }
    insert(target, content, (style || 'innerHTML').split(/\s+/)[0])
    if (parsed.title) doc.title = parsed.title
  }

  // ───────────── request ─────────────

  function collect(el, verb) {
    var fd = new FormData()
    var add = function (src) {
      if (!src) return
      for (var pair of src.entries()) fd.append(pair[0], pair[1])
    }
    if (el.tagName === 'FORM') add(new FormData(el))
    else {
      // ฟอร์มที่ครอบอยู่ก่อน แล้วค่าของ element เองทับ (set) — ไม่ซ้ำคีย์ ไม่งั้นฝั่งเซิร์ฟเวอร์ได้ array แทน string
      if (verb !== 'get') {
        var form = el.closest('form')
        if (form) add(new FormData(form))
      }
      if (el.name && !el.disabled) fd.set(el.name, el.value)
    }
    var inc = el.getAttribute('hx-include')
    if (inc) doc.querySelectorAll(inc).forEach(function (n) { n.tagName === 'FORM' ? add(new FormData(n)) : n.name && fd.append(n.name, n.value) })
    var vals = el.getAttribute('hx-vals')
    if (vals) {
      try { var o = JSON.parse(vals); for (var k in o) fd.set(k, o[k]) } catch (e) {}
    }
    return fd
  }

  function busy(el, on) {
    var targets = [el]
    var ind = inherited(el, 'hx-indicator')
    if (ind) doc.querySelectorAll(ind).forEach(function (n) { targets.push(n) })
    targets.forEach(function (n) { n.classList.toggle('htmx-request', on) })
  }

  function disabledElts(el) {
    var spec = inherited(el, 'hx-disabled-elt')
    if (!spec) return []
    return spec.split(',').map(function (s) { return findTarget(el, s.trim()) }).filter(Boolean)
  }

  /** ส่งคำขอของ element หนึ่งตัว แล้วแปะผล */
  function request(el, verb, url, opt) {
    opt = opt || {}
    var msg = el.getAttribute('hx-confirm')
    if (msg && !window.confirm(msg)) return Promise.resolve()

    var prev = inflight.get(el)
    if (prev) prev.abort()
    var ac = new AbortController()
    inflight.set(el, ac)

    var target = findTarget(el, inherited(el, 'hx-target'))
    if (!target) return Promise.resolve()
    if (emit(el, 'htmx:beforeRequest', { elt: el, target: target }).defaultPrevented) return Promise.resolve()

    var u = new URL(url, location.href)
    var params = collect(el, verb)
    var init = { method: verb.toUpperCase(), signal: ac.signal, credentials: 'same-origin', headers: { 'HX-Request': 'true', 'HX-Current-URL': location.href } }
    if (opt.boosted) init.headers['HX-Boosted'] = 'true'
    if (target.id) init.headers['HX-Target'] = target.id
    if (el.id) init.headers['HX-Trigger'] = el.id

    if (verb === 'get') {
      for (var p of params.entries()) if (typeof p[1] === 'string') u.searchParams.set(p[0], p[1])
    } else if ((el.getAttribute('hx-encoding') || inherited(el, 'hx-encoding')) === 'multipart/form-data') {
      init.body = params
    } else {
      var usp = new URLSearchParams()
      for (var q of params.entries()) usp.append(q[0], typeof q[1] === 'string' ? q[1] : q[1].name)
      init.body = usp
    }

    busy(el, true)
    var disabled = disabledElts(el).filter(function (n) { return !n.disabled })
    disabled.forEach(function (n) { n.disabled = true })
    var done = function () {
      busy(el, false)
      disabled.forEach(function (n) { n.disabled = false })
      if (inflight.get(el) === ac) inflight.delete(el)
    }

    return fetch(u, init).then(function (res) {
      return res.text().then(function (text) {
        done()
        var xhr = { status: res.status, getResponseHeader: function (n) { return res.headers.get(n) } }
        emit(el, 'htmx:afterRequest', { elt: el, successful: res.ok, xhr: xhr })

        var hx = function (n) { return res.headers.get(n) }
        if (hx('HX-Redirect')) return opt.boosted || boosted(doc.body) ? navigate(hx('HX-Redirect'), true) : location.assign(hx('HX-Redirect'))
        if (hx('HX-Refresh') === 'true') return location.reload()
        var trig = hx('HX-Trigger')
        if (trig) {
          try { var obj = JSON.parse(trig); for (var k in obj) emit(el, k, { value: obj[k] }) }
          catch (e) { trig.split(',').forEach(function (n) { emit(el, n.trim(), {}) }) }
        }

        var ok = (res.status >= 200 && res.status < 300 && res.status !== 204) || res.status === 422
        if (!ok) {
          if (res.status !== 204) emit(el, 'htmx:responseError', { elt: el, xhr: xhr })
          return
        }
        if (hx('HX-Retarget')) target = doc.querySelector(hx('HX-Retarget')) || target
        var style = hx('HX-Reswap') || inherited(el, 'hx-swap') || 'innerHTML'
        swap(target, text, style, inherited(el, 'hx-select'))
        var push = hx('HX-Push-Url') || el.getAttribute('hx-push-url')
        if (push && push !== 'false') history.pushState({ kit: 1 }, '', push === 'true' ? res.url : push)
        emit(doc.body, 'htmx:afterSwap', { elt: el, target: target })
      })
    }).catch(function (err) {
      done()
      if (err && err.name === 'AbortError') return
      emit(el, 'htmx:sendError', { elt: el, error: err })
    })
  }

  // ───────────── ผูก trigger ให้ element ─────────────

  function bindVerb(el) {
    var verb = VERBS.filter(function (v) { return el.hasAttribute('hx-' + v) })[0]
    if (!verb) return
    parseTriggers(el.getAttribute('hx-trigger'), el).forEach(function (spec) {
      var fire = function (e) {
        var url = el.getAttribute('hx-' + verb)
        if (url) request(el, verb, url, { event: e })
      }

      if (spec.every) {
        var timer = setInterval(function () {
          if (!el.isConnected) return clearInterval(timer)
          fire()
        }, spec.every)
      } else if (spec.event === 'load') {
        setTimeout(fire, 0)
      } else if (spec.event === 'revealed' || spec.event === 'intersect') {
        var io = new IntersectionObserver(function (entries) {
          if (!entries.some(function (x) { return x.isIntersecting })) return
          if (spec.once || spec.event === 'revealed') io.disconnect()
          fire()
        })
        io.observe(el)
      } else {
        var source = spec.from ? (spec.from === 'document' ? doc : spec.from === 'window' ? window : doc.querySelector(spec.from)) : el
        if (!source) return
        var last = el.value
        var timer2, lastRun = 0
        var handler = function (e) {
          if (spec.event === 'submit' || (el.tagName === 'A' && spec.event === 'click')) e.preventDefault()
          if (spec.changed) {
            if (el.value === last) return
            last = el.value
          }
          if (spec.once) source.removeEventListener(spec.event, handler)
          if (spec.throttle) {
            var now = Date.now()
            if (now - lastRun < spec.throttle) return
            lastRun = now
          }
          if (spec.delay) {
            clearTimeout(timer2)
            timer2 = setTimeout(function () { fire(e) }, spec.delay)
          } else fire(e)
        }
        source.addEventListener(spec.event, handler)
      }
    })
  }

  /** hx-on--after-request / hx-on::after-request → event htmx:afterRequest · hx-on:click → click */
  function bindOn(el, attr) {
    var m = /^hx-on(--|::|:)(.+)$/.exec(attr.name)
    if (!m) return
    var name = m[2]
    if (m[1] !== ':') name = 'htmx:' + name.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase() })
    var fn
    try { fn = new Function('event', attr.value) } catch (e) { return console.error('hx-on ผิดรูปแบบ:', attr.value, e) }
    el.addEventListener(name, function (event) { fn.call(el, event) })
  }

  // ───────────── SSE ─────────────

  function bindSse(el) {
    var es = new EventSource(el.getAttribute('sse-connect'))
    el._kitSse = es
    es.onerror = function () { if (!el.isConnected) es.close() }
  }

  function attachSse(node) {
    var host = node.closest('[sse-connect]')
    if (!host || !host._kitSse) return
    var es = host._kitSse
    node.getAttribute('sse-swap').split(',').forEach(function (name) {
      es.addEventListener(name.trim(), function (ev) {
        if (!node.isConnected) return es.close()
        swap(node, ev.data, node.getAttribute('hx-swap') || 'innerHTML')
      })
    })
  }

  // ───────────── WebSocket ─────────────

  function bindWs(el) {
    var url = new URL(el.getAttribute('ws-connect'), location.href)
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:'
    var st = { sock: null, queue: [], tries: 0 }
    el._kitWs = st
    ;(function open() {
      var s = (st.sock = new WebSocket(url))
      s.onopen = function () {
        st.tries = 0
        st.queue.splice(0).forEach(function (m) { s.send(m) })
      }
      s.onmessage = function (e) {
        if (!el.isConnected) return s.close()
        var parsed = parse(String(e.data))
        // ชิ้นที่ไม่ระบุ oob = แทนที่ element ที่ id ตรงกัน
        Array.prototype.slice.call(parsed.content.children).forEach(function (n) {
          if (!n.hasAttribute('hx-swap-oob') && n.id) n.setAttribute('hx-swap-oob', 'true')
        })
        applyOob(parsed.content)
      }
      s.onclose = function () {
        if (el.isConnected) setTimeout(open, Math.min(1000 * Math.pow(2, st.tries++), 15000))
      }
    })()
  }

  function bindWsSend(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      var host = form.closest('[ws-connect]')
      if (!host || !host._kitWs) return
      var data = Object.fromEntries(new FormData(form))
      data.HEADERS = { 'HX-Request': 'true', 'HX-Current-URL': location.href }
      var msg = JSON.stringify(data)
      var st = host._kitWs
      if (st.sock && st.sock.readyState === 1) st.sock.send(msg)
      else st.queue.push(msg)
      emit(form, 'htmx:wsAfterSend', { message: msg })
    })
  }

  // ───────────── สแกน DOM ─────────────

  function process(root) {
    var list = [root].concat(Array.prototype.slice.call(root.querySelectorAll('*')))
    list.forEach(function (el) {
      if (!el.hasAttributes() || bound.has(el)) return
      var seen = false
      for (var i = 0; i < el.attributes.length; i++) {
        var a = el.attributes[i]
        if (a.name.indexOf('hx-') === 0 || a.name.indexOf('sse-') === 0 || a.name.indexOf('ws-') === 0) { seen = true; break }
      }
      if (!seen) return
      bound.add(el)
      if (el.hasAttribute('sse-connect')) bindSse(el)
      if (el.hasAttribute('ws-connect')) bindWs(el)
      if (el.hasAttribute('ws-send')) bindWsSend(el)
      if (el.hasAttribute('sse-swap')) attachSse(el)
      for (var j = 0; j < el.attributes.length; j++) if (el.attributes[j].name.indexOf('hx-on') === 0) bindOn(el, el.attributes[j])
      bindVerb(el)
    })
  }

  // ───────────── boost: เปลี่ยนหน้าโดยไม่โหลดใหม่ ─────────────

  var here = location.pathname + location.search

  function boosted(el) {
    return inherited(el, 'hx-boost') === 'true'
  }

  function sameOrigin(url) {
    return url.origin === location.origin
  }

  function fetchPage(u, extra) {
    var key = u.href
    var hit = !extra && preloaded.get(key)
    if (hit && Date.now() - hit.at < PRELOAD_TTL) return hit.promise
    var init = Object.assign({ credentials: 'same-origin', headers: { 'HX-Request': 'true', 'HX-Boosted': 'true', 'HX-Target': 'body', 'HX-Current-URL': location.href } }, extra)
    return fetch(u, init).then(function (res) {
      return res.text().then(function (text) {
        return { status: res.status, url: res.url, text: text, headers: res.headers }
      })
    })
  }

  /** แสดงหน้า (ที่ได้จาก fetch) แทนเนื้อหาใน <body> */
  function show(page, push) {
    if (page.headers.get('HX-Redirect')) return navigate(page.headers.get('HX-Redirect'), true)
    swap(doc.body, page.text, 'innerHTML')
    var finalUrl = new URL(page.url)
    if (push) history.pushState({ kit: 1 }, '', finalUrl.href)
    here = location.pathname + location.search
    if (finalUrl.hash) {
      var t = doc.getElementById(decodeURIComponent(finalUrl.hash.slice(1)))
      if (t) return t.scrollIntoView()
    }
    window.scrollTo(0, 0)
    emit(doc.body, 'htmx:load', {})
  }

  function navigate(href, push) {
    var u = new URL(href, location.href)
    return fetchPage(u).then(
      function (page) { show(page, push) },
      function () { location.assign(u.href) },
    )
  }

  function submitBoosted(form, submitter) {
    var method = (submitter && submitter.getAttribute('formmethod')) || form.getAttribute('method') || 'get'
    var action = (submitter && submitter.getAttribute('formaction')) || form.getAttribute('action') || location.href
    var u = new URL(action, location.href)
    var fd = new FormData(form)
    var extra = { method: method.toUpperCase() }
    if (extra.method === 'GET') {
      for (var p of fd.entries()) if (typeof p[1] === 'string') u.searchParams.set(p[0], p[1])
      return navigate(u.href, true)
    }
    var multipart = /multipart/i.test(form.getAttribute('enctype') || '')
    extra.body = multipart ? fd : new URLSearchParams(Array.from(fd.entries()).map(function (p) { return [p[0], typeof p[1] === 'string' ? p[1] : p[1].name] }))
    extra.headers = { 'HX-Request': 'true', 'HX-Boosted': 'true', 'HX-Target': 'body', 'HX-Current-URL': location.href }
    var btn = form.querySelector('[type=submit]')
    if (btn) btn.disabled = true
    return fetchPage(u, extra).then(
      function (page) { if (btn) btn.disabled = false; show(page, true) },
      function () { if (btn) btn.disabled = false; form.submit() },
    )
  }

  doc.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    var a = e.target.closest && e.target.closest('a[href]')
    if (!a || a.hasAttribute('download') || (a.target && a.target !== '_self') || VERBS.some(function (v) { return a.hasAttribute('hx-' + v) })) return
    if (!boosted(a)) return
    var u = new URL(a.href, location.href)
    if (!sameOrigin(u) || (u.pathname + u.search === here && u.hash)) return
    e.preventDefault()
    navigate(u.href, true)
  })

  doc.addEventListener('submit', function (e) {
    var form = e.target
    if (e.defaultPrevented || !(form instanceof HTMLFormElement)) return
    if (form.hasAttribute('ws-send') || VERBS.some(function (v) { return form.hasAttribute('hx-' + v) })) return
    if (!boosted(form) || (form.target && form.target !== '_self')) return
    var u = new URL(form.getAttribute('action') || location.href, location.href)
    if (!sameOrigin(u)) return
    e.preventDefault()
    submitBoosted(form, e.submitter)
  })

  window.addEventListener('popstate', function () {
    if (location.pathname + location.search === here) return
    navigate(location.href, false)
  })

  // ───────────── preload: เริ่มโหลดหน้าก่อนปล่อยนิ้ว ─────────────

  function preload(a) {
    var u = new URL(a.href, location.href)
    if (!sameOrigin(u) || u.href === location.href || !boosted(a)) return
    var hit = preloaded.get(u.href)
    if (hit && Date.now() - hit.at < PRELOAD_TTL) return
    var promise = fetchPage(u, {})
    promise.catch(function () { preloaded.delete(u.href) })
    preloaded.set(u.href, { at: Date.now(), promise: promise })
  }

  function linkIn(e) {
    var a = e.target.closest && e.target.closest('a[href]')
    var host = a && a.closest('[preload]')
    return a && host ? { a: a, mode: host.getAttribute('preload') || 'mousedown' } : null
  }

  doc.addEventListener('mousedown', function (e) {
    var l = linkIn(e)
    if (l && e.button === 0) preload(l.a)
  })
  doc.addEventListener('touchstart', function (e) {
    var l = linkIn(e)
    if (l) preload(l.a)
  }, { passive: true })
  doc.addEventListener('mouseover', function (e) {
    var l = linkIn(e)
    if (l && l.mode === 'mouseover') preload(l.a)
  })

  // ───────────── เริ่มทำงาน ─────────────

  window.kit = { process: process, swap: swap, navigate: function (u) { return navigate(u, true) } }
  history.replaceState({ kit: 1 }, '')

  function start() {
    process(doc.body)
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', start)
  else start()
})()
