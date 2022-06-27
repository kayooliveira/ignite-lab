import { List, X } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetLessonsQuery } from '../../graphql/graphqlCodegen'
import { Lesson } from '../Lesson'
export function Sidebar() {
  const { slug } = useParams<{ slug: string }>()
  const { data } = useGetLessonsQuery()
  const [isOpen, setIsOpen] = useState(true)
  function toggleSidebar() {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [slug])

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="absolute top-6 right-8 z-[49] flex items-start gap-2 text-ignite-primary md:hidden md:items-start"
      >
        <strong className="text-ignite-white">Aulas</strong>
        <List weight="bold" width="24" height="24" />
      </button>
      <aside
        className={`${
          isOpen
            ? 'fixed right-0 top-0 md:static md:flex'
            : 'fixed -right-full top-0 md:static md:flex'
        } z-50 mt-[1px]  max-h-full  w-screen min-w-[21.75rem] animate-slideFromRight flex-col overflow-y-scroll
      border-l
      border-ignite-gray-7 bg-ignite-gray-2 p-6
     transition-all scrollbar-thin
    scrollbar-thumb-ignite-primary-dark scrollbar-track-ignite-gray-1 md:w-[21.75rem] lg:w-[21.75rem]
     `}
      >
        <div className="mb-6 flex items-center justify-between border-b border-ignite-gray-7 pb-6 lg:justify-start ">
          <span className=" block text-2xl font-bold">Cronograma de aulas</span>
          <button
            className="text-ignite-primary lg:hidden"
            onClick={toggleSidebar}
          >
            <X weight="bold" width="24" height="24" />
          </button>
        </div>
        <div className="flex max-h-full flex-col gap-8 ">
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
