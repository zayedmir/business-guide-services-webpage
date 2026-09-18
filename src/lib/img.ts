export function cdn(
  path: string,
  _options?: { w?: number; h?: number; q?: number; fit?: 'cover' | 'contain' },
) {
  // If running on Netlify with the images proxy available, use it;
  // otherwise, fall back to serving directly from /public
  if (typeof window !== 'undefined' && window.location.hostname.endsWith('netlify.app')) {
    const params = new URLSearchParams({ url: path })
    if (_options?.w) params.set('w', String(_options.w))
    if (_options?.h) {
      params.set('h', String(_options.h))
      params.set('fit', _options.fit ?? 'cover')
    } else if (_options?.fit) {
      params.set('fit', _options.fit)
    }
    params.set('fm', 'webp')
    params.set('q', String(_options?.q ?? 72))
    return `/.netlify/images?${params.toString()}`
  }

  // Local / standard hosting fallback
  return path.startsWith('/') ? path : `/${path}`
}