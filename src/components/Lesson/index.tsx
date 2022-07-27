import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { CheckCircle, Lock } from 'phosphor-react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: slugParam } = useParams<{ slug: string }>()
  const isLessonSelected = slug === slugParam
  const isLessonAvailable = isPast(availableAt)
  const availableAtFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'HH'h'mm",
    {
      locale: ptBR
    }
  )
  return (
    <Link
      to={isLessonAvailable ? `/evento/aula/${slug}` : ``}
      className={(!isLessonAvailable ? 'cursor-not-allowed' : '') + ' group'}
    >
      <span className="mb-2 block capitalize text-ignite-gray-6">
        {availableAtFormatted}
      </span>
      <div
        className={
          (isLessonSelected
            ? 'bg-ignite-primary before:bg-ignite-primary'
            : '') +
          ' relative flex flex-col gap-4 rounded border border-ignite-gray-7 p-4 transition-[border] before:absolute before:-left-[6px] before:top-1/2 before:z-10 before:my-auto before:-mt-2 before:h-4 before:w-4 before:rotate-45 before:rounded before:content-[""] group-hover:border-ignite-primary-dark'
        }
      >
        <header className="flex justify-between">
          {isLessonAvailable ? (
            <span
              className={`flex items-center text-sm font-medium ${
                isLessonSelected ? 'text-ignite-white' : 'text-ignite-secondary'
              }`}
            >
              <CheckCircle width="20" height="20" className="mr-2" />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={`flex items-center text-sm font-medium text-ignite-warning ${
                isLessonSelected ? 'text-ignite-white' : 'text-ignite-secondary'
              }`}
            >
              <Lock width="20" height="20" className="mr-2" />
              Em breve
            </span>
          )}
          <span
            className={`rounded border ${
              isLessonSelected
                ? 'border-ignite-white'
                : 'border-ignite-primary-light'
            } py-[0.125rem] px-2 text-xs`}
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-base">{title}</strong>
      </div>
    </Link>
  )
}
