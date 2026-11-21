// GET /api/weather — เวลาพระอาทิตย์ขึ้น/ตกและสภาพอากาศของลำพูน (Open-Meteo, ไม่ต้องใช้ key)
// ส่งไปที่ Open-Meteo แค่พิกัดลำพูน ไม่มีข้อมูลผู้ใช้ · cache ในหน่วยความจำ 10 นาที

const QUERY =
  '//api.open-meteo.com/v1/forecast?latitude=18.5745&longitude=99.0087' +
  '&current=temperature_2m,weather_code,cloud_cover,wind_speed_10m&daily=sunrise,sunset' +
  '&timezone=Asia%2FBangkok&forecast_days=1'

type Weather = { temp: number; code: number; cloud: number; wind: number; sunrise: string; sunset: string }
let hit: { at: number; data: Weather } | undefined

// ลอง HTTPS ก่อน แล้วสำรองด้วย HTTP: บางเครื่อง (เช่น container บน server ที่ deploy) ต่อ HTTPS ไป open-meteo ไม่ติดแต่ HTTP ติด
// ข้อมูลเป็นสภาพอากาศสาธารณะ ใช้แต่งฉากอย่างเดียว ไม่มีข้อมูลผู้ใช้/ความลับ จึงยอมรับความเสี่ยงของ HTTP ได้
async function get(): Promise<Response> {
  try {
    return await fetch('https:' + QUERY, { signal: AbortSignal.timeout(4000) })
  } catch {
    return fetch('http:' + QUERY, { signal: AbortSignal.timeout(4000) })
  }
}

async function fetchWeather(): Promise<Weather> {
  const r = await get()
  if (!r.ok) throw new Error(`open-meteo ${r.status}`)
  const j = (await r.json()) as any
  return {
    temp: j.current.temperature_2m,
    code: j.current.weather_code,
    cloud: j.current.cloud_cover,
    wind: j.current.wind_speed_10m,
    sunrise: j.daily.sunrise[0],
    sunset: j.daily.sunset[0],
  }
}

export const GET = async () => {
  if (hit && Date.now() - hit.at < 600_000) return hit.data
  try {
    hit = { at: Date.now(), data: await fetchWeather() }
    return hit.data
  } catch {
    if (hit) return hit.data // ใช้ข้อมูลเก่าถ้าเรียกใหม่ไม่ได้
    return { error: 'weather unavailable' } // client ใช้ค่าเริ่มต้นตามเวลาอย่างเดียว
  }
}
