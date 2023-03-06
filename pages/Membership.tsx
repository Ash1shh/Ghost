import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'

function Membership() {
    return (
        <div className='bg-[#4579FF] h-screen'>
            <div className=''>
                <Header bgColour='#4579FF' />
            </div>

            <div className='mt-24 flex-row py-24  px-72 border-y border-white'>
                <h1 className='text-9xl text-center text-white'>
                    FUEL GREAT THINKING.
                </h1>
                <p className='text-white text-xl text-center mt-4'>Become a Ghost to enjoy unlimited access and <br />
                    directly support the writers you read most by just starring the repo.
                </p>
                <div className='flex justify-center mt-10'>
                    <Link href="https://github.com/Ash1shh/Ghost">
                        <button className='text-2xl bg-white rounded-full px-8 py-2 hover:bg-[#4579FF] hover:text-white hover:border-white hover:border'>
                            Get unlimited access
                        </button>
                    </Link>

                </div>
            </div>

            <div className='flex border-b border-white'>
                <div className='w-1/2 border-x border-white'>
                    <h1 className='ml-16 mt-14 text-white text-6xl'>
                        Get unlimited access to every <br /> story.
                    </h1>
                    <pre className='text-white text-sm mt-6 ml-16'>
                        GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG <br />
                        GGGGGGGGGGGGGGGGGGGGGGGGGGGGG <br />
                        GGGGGGGGGGGGGGGGGGGGGGGGGG <br />
                        GGGGGGGGGGGGGGGGGGGGGGG <br />
                        GGGGGGGGGGGGGGGGGGGG <br />
                        GGGGGGGGGGGGGGGGG <br />
                    </pre>
                    <p className='ml-16 mt-3 text-white text-2xl'>Read any article in our entire library across all your devices.</p>
                </div>

                <div className='w-1/2 border-x border-white'>
                    <h1 className='ml-16 mt-14 text-white text-6xl'>
                        Support the voices you want <br /> to hear more from.
                    </h1>
                    <pre className='text-white text-sm mt-6 ml-16'>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;G <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;GGG<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GGGGGGG <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;GGGGGGGGGGGGG <br />
                        &emsp;&emsp;&emsp;&emsp;GGGGGGGGGGGGGGGGGGGG <br />
                        GGGGGGGGGGGGGGGGGGGGGGGGGGGGG <br />
                    </pre>
                    <p className='ml-16 mt-3 mb-6 text-white text-2xl'>A portion of your membership will directly support the writers and thinkers you read the most.</p>
                </div>
            </div>

            <div className='flex items-center justify-center h-20'>
                <h1 className='text-5xl text-white'>GHOST</h1>
            </div>

        </div>
    )
}

export default Membership