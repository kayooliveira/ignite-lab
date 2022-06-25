import { List } from 'phosphor-react'
import React, { useState } from 'react'

import { useGetLessonsQuery } from '../../graphql/graphqlCodegen'
import { Lesson } from '../Lesson'
export function Sidebar() {
  const { data } = useGetLessonsQuery()
  const [isOpen, setIsOpen] = useState(true)
  function toggleSidebar() {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 z-50 flex items-start gap-2 text-ignite-primary md:hidden md:items-start"
      >
        <strong className="text-ignite-white">Aulas</strong>
        <List weight="bold" width="24" height="24" />
      </button>
      <aside
        className={`${
          isOpen
            ? 'fixed right-0 md:static md:flex'
            : 'fixed -right-full md:static md:flex'
        } z-50 mt-[1px] max-h-screen w-[21.75rem]
      min-w-[21.75rem]
     animate-slideFromRight flex-col overflow-y-scroll border-l border-ignite-gray-7
    bg-ignite-gray-2 p-6 transition-all scrollbar-thin
    scrollbar-thumb-ignite-primary-dark scrollbar-track-ignite-gray-2
     `}
      >
        <span className="mb-6 block border-b border-ignite-gray-7 pb-6 text-2xl font-bold">
          Cronograma de aulas
        </span>
        <div className="flex flex-col gap-8">
          {data?.lessons.map(lesson => (
            <Lesson
              key={lesson.id}
              availableAt={new Date(lesson.availableAt)}
              slug={lesson.slug || ''}
              type={lesson.lessonType}
              title={lesson.title}
            />
          ))}
        </div>
      </aside>
    </>
  )
}
