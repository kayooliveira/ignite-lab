import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

import { Logo } from '../../components/Logo'

export function Home() {
  const navigate = useNavigate()
  function redirectToEventPage() {
    navigate('/evento')
  }

  useEffect(() => {
    toast('Aguarde! Você será redirecionado para o evento em 3 segundos')
    setTimeout(() => {
      redirectToEventPage()
    }, 3000)
  }, [])

  return (
    <div className="flex h-screen w-screen items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center">
        <Link to="/evento" className="text-2xl font-bold leading-relaxed">
          <Logo />
        </Link>
      </div>
    </div>
  )
}
