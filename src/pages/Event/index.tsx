import * as React from 'react'

import { Header } from '../../components/Header'
import { Player } from '../../components/Player'
import { Sidebar } from '../../components/Sidebar'

export function Event() {
  return (
    <div className="flex max-h-screen min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="flex max-h-full flex-1 overflow-y-scroll scrollbar-none">
        <Player />
        <Sidebar />
      </main>
    </div>
  )
}
