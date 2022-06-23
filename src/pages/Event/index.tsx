import * as React from 'react'

import { Header } from '../../components/Header'
import { Player } from '../../components/Player'
import { Sidebar } from '../../components/Sidebar'

export function Event() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1">
        <Player />
        <Sidebar />
      </main>
    </div>
  )
}
