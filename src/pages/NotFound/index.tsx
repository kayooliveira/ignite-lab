import React from 'react'

export function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-ignite-gray-1">
      <div className="flex flex-col text-center leading-relaxed text-ignite-primary-light">
        <h1 className="text-[4rem] font-bold">404</h1>
        <span className="">Página não encontrada!</span>
      </div>
    </div>
  )
}
