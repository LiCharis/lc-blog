export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://blog.liproject.top'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
