import React from 'react';
import Header from '../components/Header';

function OurStory() {
    return (
        <div className=' h-screen '>
            <div className=''>
                <Header />
            </div>

            <div className='mt-24 flex py-24 px-80 border-y border-black'>
                <h1 className='text-8xl text-center'>EVERY HUMAN  <br />
                    ONCE NEED TO BE A
                    <span>
                        {" "}
                    </span>
                    <span className='font-bold'>
                        GHOST.
                    </span>
                </h1>
            </div>

            <div className='flex border-b border-black'>
                <div className='w-1/2 border-x border-black'>
                    <h1 className='mx-24 mt-8 text-lg'>
                        The best ideas can change who we are. Ghost is where those ideas take shape, take off, and spark powerful conversations. We're an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.
                    </h1>
                    <h1 className='mx-24 mt-6 mb-10 text-lg'>
                        We're creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It's an environment that's open to everyone but promotes substance and authenticity. And i's where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we're building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
                    </h1>
                </div>

                <div className='flex items-center justify-center w-1/2'>
                    <img 
                    className='max-w-full'
                    src="https://user-images.githubusercontent.com/87669361/222958558-8e2d4cb9-6366-4d06-a466-729a5dbfa7d1.gif" alt="" />
                </div>
            </div>

            <div className='flex items-center justify-center h-20'>
                    <h1 className='text-5xl font-bold'>GHOST</h1>
                </div>

        </div>
    );
}

export default OurStory;
