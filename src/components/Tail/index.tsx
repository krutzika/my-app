'use client'
//import { title } from 'process';
import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

interface ButtonType {
    title: string;
    path : string;
}


const TailBar = () => {
    return (
        <div className="fixed bottom-0 w-full h-[60px] bg-[#03672D] flex justify-around items-center shadow-[0_-2px_5px_rgba(0,0,0,0.2)] text-white z-50">
            <Mybutton title='View Badges' path='/badges'/>
            <Mybutton title='View Leaderboard' path='/leaderboard'/>
            <Mybutton title='View Rewards' path='/rewards'/>
        </div>
    );
}

const Mybutton = ({title, path} : ButtonType) => {
  const router = useRouter()
  const pathname = usePathname()

  function handleClick() {
    router.push(path)
  }

  const isActive = pathname == path;

  return(
    <button onClick={handleClick} 
    className={`bg-transparent border-none text-white text-base cursor-pointer ${isActive ? 'underline' : 'hover:underline'}`}>{title}</button>
  );
}

export default TailBar;
  