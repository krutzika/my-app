'use client'

import React from 'react'
import Header from '@/components/Header'
import TailBar from '@/components/Tail'

const BadgesPage = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow p-6 bg-white">
          <h1 className="text-3xl font-bold text-center text-black mb-4">Your Badges</h1>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#E6FFE9] p-4 rounded-lg shadow text-black">
              🏅 Super Talkative
            </div>
            <div className="bg-[#E6FFE9] p-4 rounded-lg shadow text-black">
              🏆 Extreme Overthinker
            </div>
          </div>
        </main>
  
        <TailBar />
      </div>
    )
  }
  
export default BadgesPage
