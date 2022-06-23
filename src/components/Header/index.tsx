import * as React from 'react'

import { Logo } from '../Logo'

export function Header() {
  return (
    <header className="flex w-full items-center justify-center border-b border-ignite-gray-7 bg-ignite-gray-2 py-5">
      <Logo />
    </header>
  )
}
