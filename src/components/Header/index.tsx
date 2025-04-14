import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='flex justify-between items-center bg-[#03672D] text-white px-4 h-[10vh] shadow-md'>
            <div className='h-full font-bold flex items-center' >
                <Link href='/'>
                <img src='/logo.png' alt="Logo" className="rounded-full h-16 w-auto object-contain p-[5%]" />
                </Link> 
            </div>
            <div className='flex items-center'>
               <Link href='/profile'>
            <img
                src="/profile.jpg"
                alt="Profile"
                className="w-10 h-16 rounded-full object-cover border-2 border-white p-[5%]"
                />
                </Link> 
            </div>  
        </header>
    );
}

export default Header;