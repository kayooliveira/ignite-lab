import React from 'react'

import { Logo } from '../Logo'

export function NoData() {
  return (
    <div className=" flex max-w-full flex-1 flex-col items-center justify-center bg-ignite-gray-1">
      <div className="flex animate-bounce leading-relaxed">
        <Logo />
      </div>

      <span className="mt-2 block text-lg font-bold text-ignite-primary">
        Clique em uma aula para começar!
      </span>
    </div>
  )
}
