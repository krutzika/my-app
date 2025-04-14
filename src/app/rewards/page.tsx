'use client'

import React from 'react'
import Header from '@/components/Header'
import TailBar from '@/components/Tail'

const RewardsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Rewards</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-xl p-6 text-black">
            <h2 className="text-xl font-semibold mb-2">Amazon Gift Card</h2>
            <p>Redeem with 1000 points</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-black">
            <h2 className="text-xl font-semibold mb-2">Free Pizza</h2>
            <p>Redeem with 800 points</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-black">
            <h2 className="text-xl font-semibold mb-2">Game Voucher</h2>
            <p>Redeem with 1500 points</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-black">
            <h2 className="text-xl font-semibold mb-2">Spotify Premium</h2>
            <p>Redeem with 1200 points</p>
          </div>
        </div>
      </main>

      <TailBar />
    </div>
  )
}

export default RewardsPage
