import * as React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../Logo'

export function Header() {
  return (
    <header className="r z-10 flex w-full items-center justify-start border-b border-ignite-gray-7 bg-ignite-gray-2 py-5 md:justify-center">
      <Link to="/" className="ml-8 md:ml-0">
        <Logo />
      </Link>
    </header>
  )
}
