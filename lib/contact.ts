export function buildContactMailto(recipient: string, name: string, email: string, message: string) {
  const subject = `Contact portfolio — ${name.trim()}`
  const body = `Bonjour Phanuel,\n\n${message.trim()}\n\n${name.trim()}\n${email.trim()}`
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
