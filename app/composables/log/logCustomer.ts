export function logCustomer(...messages: any[]) {
  const time = formatTime()
  const stack = new Error().stack

  let file = 'unknown'

  if (stack) {
    const line = stack.split('\n')[2]
    const match = line?.match(/\((.*):\d+:\d+\)/)
    file = cleanFile(match?.[1] ?? 'unknown')
  }

  console.log(`🐞-> [${time}] [${file}]`, ...messages)
}

function cleanFile(file: string): string {
  return file
    .replace(/^https?:\/\/[^/]+\/_nuxt\//, '')
    .split('?')[0] || 'unknown'
}

function formatTime(date = new Date()): string {
  const h = String(date.getHours()).padStart(2, '0')
  const m = String(date.getMinutes()).padStart(2, '0')
  const s = String(date.getSeconds()).padStart(2, '0')
  const ms = String(date.getMilliseconds()).padStart(3, '0')

  return `${h}:${m}:${s}.${ms}`
}
