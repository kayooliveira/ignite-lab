import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Event } from './pages/Event'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/evento" element={<Event />} />
      <Route path="/evento/aula/:slug" element={<Event />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
