import React from 'react'

import { RocketseatLogo } from '../RocketseatLogo'

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-ignite-gray-7 px-8 pt-6 pb-4">
      <div className="flex items-center">
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
