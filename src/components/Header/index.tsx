import * as React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../Logo'

export function Header() {
  return (
    <header className="z-10 flex w-full items-center justify-center border-b border-ignite-gray-7 bg-ignite-gray-2 py-5">
      <Link to="/">
        <Logo />
      </Link>
    </header>
  )
}
