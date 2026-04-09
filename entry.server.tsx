import type { ReactElement } from 'react'

export default function handleRequest(): ReactElement | null {
  // SSR is intentionally disabled in react-router.config.ts
  return null
}
