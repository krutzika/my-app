//import IndexPage from "./page"
import { Metadata } from "next"
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Tail from '@/components/Tail'


export const metadata: Metadata = {
  title : "Badges",
  description : "A website to view Badges"
}

const geist = Geist({
  subsets: ['latin'],
})
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}