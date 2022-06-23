import * as React from 'react'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Player } from '../../components/Player'
import { Sidebar } from '../../components/Sidebar'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1">
        {slug ? <Player /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  )
}
