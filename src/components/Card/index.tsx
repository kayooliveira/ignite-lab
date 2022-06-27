import { CaretRight } from 'phosphor-react'
import React from 'react'

interface CardProps {
  title: string
  content: string
  icon: JSX.Element
  url: string
}

export function Card({ title, content, icon, url }: CardProps) {
  return (
    <a
      href={url}
      className="flex w-[33rem] items-stretch overflow-hidden rounded bg-ignite-gray-3 transition-colors hover:bg-ignite-gray-7 lg:gap-8"
    >
      <div className="flex items-center bg-ignite-primary-dark p-6">{icon}</div>
      <div className="flex flex-1 flex-col items-start justify-center p-6">
        <span className="block text-2xl font-bold leading-snug">{title}</span>
        <span className="block text-sm leading-relaxed">{content}</span>
      </div>
      <div className="flex items-center p-6 text-ignite-secondary">
        <CaretRight width="24" height="24" />
      </div>
    </a>
  )
}
