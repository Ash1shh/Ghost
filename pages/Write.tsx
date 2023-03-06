import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Header from '../components/Header'

function Write() {
    return (
        <div className='bg-[#F34D2E] h-screen '>
            <div className=''>
                <Header bgColour='#F34D2E' />
            </div>

            <div className='flex'>
                <div className='w-2/3 mt-24 pt-16 pb-8 border border-black'>
                    <div className=''>
                        <h3 className='text-xl text-white ml-10 font-mono'>START A BLOG</h3>
                        <h1 className='text-9xl mt-2 font-medium ml-8'>
                            Publish, grow, and <br />
                            earn, all in one <br />
                            place.
                        </h1>
                    </div>

                    <div className='mt-10'>
                        <p className='text-lg ml-10 mt-20 font-medium'>
                            If you have a story to tell, knowledge to share, or a perspective to offer — <br />
                            welcome home.Start now so your writing can thrive in a network <br />
                            supported by millions of readers —
                        </p>
                        <button className='ml-10 mt-14 text-2xl bg-white rounded-full px-7 py-1 hover:bg-[#F34D2E] hover:text-white hover:border-white hover:border'>Start writing</button>
                    </div>
                </div>

                <div className='w-1/3 border-b border-black'>
                    <img
                        className='mt-20'
                        draggable="false"
                        src="https://user-images.githubusercontent.com/87669361/223086413-6baa4567-a06c-4b88-80fd-ef0a2e70cc24.jpg" alt="" />
                </div>
            </div>

            <div className='mt-4 bg-[#F34D2E]'>
                <h1 className='text-5xl text-center font-semibold'>WRITE</h1>

                <form
                    className="mx-auto mb-10 flex max-w-2xl flex-col p-5">
                    <input
                        type="hidden"
                    />
                    <label className="mb-5 block">
                        <span className="text-gray-700">Title</span>
                        <input
                            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-yellow-500"
                            placeholder="Title"
                            type="text"
                        />
                    </label>
                    <label className="mb-5 block">
                        <span className="text-gray-780">Description</span>
                        <input

                            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-ghost"
                            placeholder="Description"
                            type="text"
                        />
                    </label>
                    <label className="mb-5 block">
                        <span className="text-gray-780">Author</span>
                        <input

                            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-ghost"
                            placeholder="Author"
                            type="text"
                        />
                    </label>
                    <label className="mb-5 block">
                        <span className="text-gray-780">Main image</span>
                        <input

                            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-ghost"
                            placeholder="Main image"
                            type="text"
                        />
                    </label>
                    <label className="mb-5 block">
                        <span className="text-gray-780">User image</span>
                        <input

                            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-ghost"
                            placeholder="User image"
                            type="text"
                        />
                    </label>
                    <label className="mb-5 block">
                        <span className="text-gray-700">Body</span>
                        <textarea

                            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-ghost"
                            placeholder="Body"
                            rows={8}
                        />
                    </label>
                    <input
                        type="submit"
                        className="focus:shadow-outline cursor-pointer rounded bg-white py-2 px-4 font-bold shadow hover:bg-[#F34D2E] hover:text-white hover:border-white hover:border focus:outline-none"
                    />
                </form>
            </div>
        </div >
    )
}

export default Write