export const WHATSAPP_CONTACTS = [
  { number: '573005544573', display: '+57 300 554 4573' },
  { number: '573043891991', display: '+57 304 389 1991' },
  { number: '573245478625', display: '+57 324 547 8625' },
] as const

export function buildContactWaUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
