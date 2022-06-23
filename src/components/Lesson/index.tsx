import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { CheckCircle, Lock } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt)
  const availableAtFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'hh'h'mm",
    {
      locale: ptBR
    }
  )
  return (
    <Link to={`/evento/aula/${slug}`} className="group">
      <span className="mb-2 block capitalize text-ignite-gray-6">
        {availableAtFormatted}
      </span>
      <div
        className={
          // (isLessonAvailable ? 'bg-ignite-green' : '') +
          ' flex flex-col gap-4 rounded border border-ignite-gray-7 border-transparent p-4 transition-all group-hover:border-ignite-green-dark'
        }
      >
        <header className="flex justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center text-sm font-medium text-ignite-blue">
              <CheckCircle width="20" height="20" className="mr-2" />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center text-sm font-medium text-ignite-warning">
              <Lock width="20" height="20" className="mr-2" />
              Em breve
            </span>
          )}
          <span className="rounded border border-ignite-green-light py-[0.125rem] px-2 text-xs">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-base">{title}</strong>
      </div>
    </Link>
  )
}
