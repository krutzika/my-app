'use client'

import Header from '@/components/Header'
import TailBar from '@/components/Tail'

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-green-600"
            />
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">Kruthika</h2>
            <p className="text-gray-500">The best!</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Details</h3>
            <ul className="text-gray-600 space-y-1">
              <li><strong>Email:</strong> kruthika@me.com</li>
              <li><strong>Joined:</strong> Jan 2024</li>
              <li><strong>Badges Earned:</strong> 12</li>
            </ul>
          </div>
        </div>
      </main>

      <TailBar />
    </div>
  )
}
