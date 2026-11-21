import { memo } from '@core/jsx'
import Logo from './Logo'

export default memo(function Footer() {
  return (
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <a href="/" class="brand">
            <Logo size={24} />
            <span class="brand-name">Kitsune</span>
          </a>
          <p class="muted">สร้างด้วย Kitsune — framework และ JavaScript ฝั่ง browser เขียนเองทั้งหมด</p>
        </div>
      </div>
    </footer>
  )
})
