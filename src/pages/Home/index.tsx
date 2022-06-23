import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center text-center">
      <div>
        <h1 className="text-2xl font-bold leading-relaxed">
          Bem vindo ao Ignite Labs
        </h1>
        Clique{' '}
        <Link className="text-ignite-green underline" to="/evento">
          aqui
        </Link>{' '}
        para acessar a página do evento.
      </div>
    </div>
  )
}
