import { gql, useQuery } from '@apollo/client'
import React from 'react'

import { Lesson } from '../Lesson'

const GET_LESSONS_QUERY = gql`
  query GetLessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      slug
      title
      availableAt
    }
  }
`
interface Lesson {
  id: string
  title: string
  slug: string
  availableAt: string
  lessonType: 'live' | 'class'
}

interface GetLessonsQueryResponse {
  lessons: Lesson[]
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="mt-[1px] flex w-[21.75rem] flex-col border-l border-ignite-gray-7 bg-ignite-gray-2 p-6">
      <span className="mb-6 block border-b border-ignite-gray-7 pb-6 text-2xl font-bold">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
            type={lesson.lessonType}
            title={lesson.title}
          />
        ))}
      </div>
    </aside>
  )
}
