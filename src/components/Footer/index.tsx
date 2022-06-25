import React from 'react'

import { RocketseatLogo } from '../RocketseatLogo'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between border-t border-ignite-gray-7 bg-ignite-gray-1 px-8 py-4 text-xs md:flex-row">
      <div className="flex flex-col items-center lg:flex-row">
        <RocketseatLogo />
        <span className="ml-6 leading-relaxed text-ignite-gray-6">
          Rockeseat - Todos os direitos reservados
        </span>
      </div>
      <a href="#" className="leading-relaxed  text-ignite-gray-6">
        Políticas de privacidade
      </a>
    </footer>
  )
}
