import React from 'react'

import { Footer } from '../Footer'

export function PlayerSkelleton() {
  return (
    <div className="mt-[1px] max-h-full flex-1 overflow-y-scroll scrollbar-none lg:scrollbar-thin lg:scrollbar-thumb-ignite-primary-dark  lg:scrollbar-track-ignite-gray-2">
      <div className="flex justify-center bg-black">
        <div className="aspect-video h-full w-full max-w-[1100px] animate-shimmer rounded bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></div>
      </div>
      <div className="flex items-start gap-[3.75rem] px-8 pt-8 pb-6">
        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-bold leading-snug">
            <span className="block h-8 w-full animate-shimmer rounded-lg bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
          </h1>
          <p className="leading-relaxed">
            <span className="block h-3 w-full animate-shimmer rounded-lg bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
            <span className="mt-3 block h-3 w-full animate-shimmer rounded-lg bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
            <span className="mt-3 block h-3 w-4/5 animate-shimmer rounded-lg bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="mt-3 block h-14 w-64 animate-shimmer bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
          <span className="mt-3 block h-14 w-64 animate-shimmer bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
        </div>
      </div>
      <div className="flex items-center gap-4 px-8">
        <div className="h-16 w-16 animate-shimmer rounded-full bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20" />
        <div className="leading-relaxed">
          <span className="block h-6 w-64 animate-shimmer rounded bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
          <span className="mt-3 block h-3 w-72 animate-shimmer rounded bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
        </div>
      </div>
      <div className="flex items-stretch justify-center gap-8 px-8 py-20">
        <span className="mt-3 block h-44 w-96 animate-shimmer rounded bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
        <span className="mt-3 block h-44 w-96 animate-shimmer rounded bg-gradient-to-r from-ignite-gray-2/20 via-ignite-gray-4/30 to-ignite-gray-2/20"></span>
      </div>
      <Footer />
    </div>
  )
}
