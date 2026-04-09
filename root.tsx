import type { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import './app.css'

export function RootLayout({ children }: PropsWithChildren) {
  return <>{children}</>
}

export default function Root() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}
