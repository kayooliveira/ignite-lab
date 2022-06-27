import { DefaultUi, Player as VimePlayer, Youtube } from '@vime/react'
import { isPast } from 'date-fns'
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetLessonBySlugQuery } from '../../graphql/graphqlCodegen'
import { Card } from '../Card'
import { Footer } from '../Footer'
import { NoData } from '../NoData'
import { PlayerSkelleton } from '../PlayerSkelleton'

import '@vime/core/themes/default.css'

export function Player() {
  const { slug } = useParams<{ slug: string }>()
  const { data } = useGetLessonBySlugQuery({
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
    <div className="mt-[1px] max-h-full flex-1 overflow-y-scroll scrollbar-none lg:scrollbar-thin lg:scrollbar-thumb-ignite-primary-dark  lg:scrollbar-track-ignite-gray-2">
      <div className="flex justify-center bg-black">
        <div className="aspect-video h-full w-full max-w-[1100px] rounded bg-ignite-gray-3">
          <VimePlayer>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </VimePlayer>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[3.75rem] px-8 pt-8 lg:flex-row">
        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-bold leading-snug">
            {data.lesson?.title}
          </h1>
          <p className="leading-relaxed">{data.lesson?.description}</p>

          {data.lesson.teacher && (
            <div className="flex items-center gap-4 py-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-ignite-secondary"
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
          )}
        </div>
        <div className="flex w-full flex-col gap-4 lg:w-auto">
          <button className="flex items-center justify-center rounded bg-ignite-primary px-6 py-4 font-bold leading-relaxed transition-colors hover:bg-ignite-primary-dark">
            <DiscordLogo width="24" height="24" />
            COMUNIDADE NO DISCORD
          </button>
          <button className="flex items-center justify-center rounded  border border-ignite-secondary bg-transparent px-6 py-4 font-bold leading-relaxed text-ignite-secondary transition-colors hover:bg-ignite-secondary hover:text-ignite-gray-1">
            <Lightning width="24" height="24" />
            ACESSE O DESAFIO
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-stretch justify-center gap-8 px-8 py-20 lg:flex-shrink-0">
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
