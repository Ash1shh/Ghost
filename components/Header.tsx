import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className="fixed inset-x-0 top-0 z-10 bg-ghost border-y  border-black">
            <header className="flex justify-between p-5 max-w-7xl mx-auto">
                <div className="flex items-center space-x-5">
                    <Link href="/" className='flex'>
                        <img
                            className=" h-14 cursor-pointer object-contain flex"
                            src="https://freepngimg.com/thumb/ghost/1-2-ghost-png-pic.png" alt="ghost" />
                        <h1 className="flex items-center font-semibold text-5xl max-w-xl mx-2">
                            GHOST
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center space-x-3 ">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3>Follow</h3>
                    <h3>Sign In</h3>
                    <h3 className="text-white px-4 py-1  rounded-full bg-black">Get Started</h3>
                </div>
            </header>
        </div>
    )
}

export default Header