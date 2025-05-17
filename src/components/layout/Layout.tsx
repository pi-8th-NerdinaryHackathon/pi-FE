import type { ReactNode } from 'react'
interface LayoutProps {
  children: ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <div className="layout flex h-4 w-4">{children}</div>
}
