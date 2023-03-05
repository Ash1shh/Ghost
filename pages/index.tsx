import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { Post } from '../typings'
import { sanityClient, urlFor } from "../sanity";
import Link from 'next/link'
interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  //console.log(posts);
  return (
    <>
      <div className='bg-ghost h-[450px] border-y border-black'>
        <div className="max-w-7xl mx-auto ">
          <Head>
            <title>Ghost</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />

          <div className='flex mx-0 mt-16 py-10 px-0 lg:py-0'>
            <div className='py-10 px-2 space-x-5'>
              <h1 className='text-7xl max-w-xl font-medium my-10 mx-5'>
                PEEK-A-BOO!
              </h1>
              <h2 className='pb-5 text-2xl max-w-xl font-sans'>
                Now I know what a ghost is. Unfinished business, that's what.
              </h2>
              <div className='flex'>
                <Link href="#posts">
                  <button className="text-white mx-0 px-7 py-2 my-3 rounded-full bg-black/90 font-sans w-1/
            4 hover:bg-black">Start Haunting</button>
                </Link>

              </div>
            </div>
          </div>

          {/* posts */}
          <div className="grid grid-cols-1 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 my-2" id='posts'>
            {posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="group cursor-pointer overflow-hidden rounded-lg border">
                  <img
                    className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div className="flex justify-between bg-white p-5">
                    <div>
                      <p className="text-lg font-bold">{post.title}</p>
                      <p className="text-xs">
                        {post.description} by {post.author.name}
                      </p>
                    </div>
                    <img
                      className="h-12 w-12 rounded-full"
                      src={urlFor(post.author.image).url()!}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `
  *[_type=="post"]{
    _id,
    title,
    
    author -> {
    name,
    image
  },
  
  description,
  mainImage,
  slug
  }`;
  const posts = await sanityClient.fetch(query);
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
  };
}
