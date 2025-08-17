import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
          <a href="/pages/led-control/index.html" target="_blank" rel="noopener noreferrer">
            LED Control
          </a>

            </li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  )
}