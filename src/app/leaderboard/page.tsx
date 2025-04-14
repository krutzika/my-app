'use client'

import React from 'react'
import Header from '@/components/Header'
import TailBar from '@/components/Tail'

const LeaderboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Leaderboard</h1>
        
        <div className="bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto">
          <ol className="list-decimal pl-6 space-y-2 text-black">
            <li>Kruthika — 1500 points</li>
            <li>Visruth — 1200 points</li>
          </ol>
        </div>
      </main>

      <TailBar />
    </div>
  )
}

export default LeaderboardPage
