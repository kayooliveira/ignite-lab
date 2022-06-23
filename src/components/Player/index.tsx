import { gql, useQuery } from '@apollo/client'
import { DefaultUi, Player as VimePlayer, Youtube } from '@vime/react'
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import React from 'react'
import { useParams } from 'react-router-dom'

import { Card } from '../Card'
import { Footer } from '../Footer'

import '@vime/core/themes/default.css'
import { NoData } from '../NoData'
import { PlayerSkelleton } from '../PlayerSkelleton'

import { isPast } from 'date-fns'

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      id
      slug
      title
      videoId
      description
      availableAt
      teacher {
        avatarUrl
        bio
        name
      }
    }
  }
`
interface Lesson {
  title: string
  videoId: string
  description: string
  availableAt: string
  teacher: {
    name: string
    bio: string
    avatarUrl: string
  }
}

interface GetLessonBySlug {
  lesson: Lesson
}

export function Player() {
  const { slug } = useParams<{ slug: string }>()
  const { data } = useQuery<GetLessonBySlug>(GET_LESSON_BY_SLUG, {
    variables: {
      slug
    },
    fetchPolicy: 'no-cache'
  })

  // Shimmer = 563.4

  if (!data) {
    return <PlayerSkelleton />
  }

  const isLessonAvailable = isPast(new Date(data.lesson?.availableAt))

  if (!data.lesson || !isLessonAvailable) {
    return <NoData />
  }

  return (
    <div className="mt-[1px] flex-1">
      <div className="flex justify-center bg-black">
        <div className="aspect-video h-full w-full max-w-[1100px] rounded bg-ignite-gray-3">
          <VimePlayer>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </VimePlayer>
        </div>
      </div>
      <div className="flex items-start gap-[3.75rem] px-8 pt-8 pb-6">
        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-bold leading-snug">
            {data.lesson?.title}
          </h1>
          <p className="leading-relaxed">{data.lesson?.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <button className="flex items-center rounded bg-ignite-green px-6 py-4 font-bold leading-relaxed transition-colors hover:bg-ignite-green-dark">
            <DiscordLogo width="24" height="24" />
            COMUNIDADE NO DISCORD
          </button>
          <button className="flex items-center rounded border border-ignite-blue bg-transparent px-6 py-4 font-bold leading-relaxed text-ignite-blue transition-colors hover:bg-ignite-blue hover:text-ignite-gray-1">
            <Lightning width="24" height="24" />
            ACESSE O DESAFIO
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 px-8">
        <img
          className="h-16 w-16 rounded-full border-2 border-ignite-blue"
          src={data.lesson?.teacher.avatarUrl}
          alt="Avatar do professor"
        />
        <div className="leading-relaxed">
          <strong className="block text-2xl font-bold leading-snug">
            {data.lesson?.teacher.name}
          </strong>
          <span className="font block text-sm text-ignite-gray-6">
            {data.lesson?.teacher.bio}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 px-8 py-20">
        <Card
          title="Material complementar"
          content="Acesse o material complementar para acelerar o seu desenvolvimento"
          icon={<FileArrowDown width="40" height="40" />}
          url="#"
        />
        <Card
          title="Wallpapers exclusivos"
          content="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          icon={<Image width="40" height="40" />}
          url="#"
        />
      </div>
      <Footer />
    </div>
  )
}
