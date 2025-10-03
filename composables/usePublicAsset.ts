import { joinURL } from 'ufo'

/**
 * Resolve a file in /public by prepending the deployed base URL.
 * Accepts paths with or without a leading slash.
 */
export const usePublicAsset = (path: string): string => {
  const runtimeConfig = useRuntimeConfig()
  const normalized = path.replace(/^\/+/, '')
  return joinURL(runtimeConfig.app.baseURL ?? '/', normalized)
}