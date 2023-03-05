import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

interface Props {
    bgColour?: string;
}

function Header({ bgColour }: Props) {
    const router = useRouter();
    const OurStory = () => {
        router.push('/OurStory');
    };

    const Membership = () => {
        router.push('/Membership');
    }

    const Write = () => {
        router.push('/Write');
    }

    return (
        <div className={`fixed inset-x-0 top-0 z-10 border-y  border-black`} style={{ backgroundColor: bgColour }}>
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
                    <button onClick={OurStory}>Our Story</button>
                    <button onClick={Membership}>Membership</button>
                    <button onClick={Write}>Write</button>
                    <Link href="#posts">
                        <button className="text-white px-4 py-1  rounded-full bg-black/90 hover:bg-black">Get Started</button>
                    </Link>

                </div>
            </header>
        </div>
    )
}

export default Header