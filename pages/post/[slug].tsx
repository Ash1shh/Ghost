import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import { GetStaticProps } from 'next';
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useState } from "react";
import Header from "../../components/Header";

interface Props {
    post: Post
}

interface IFormInput {
    _id: string
    name: string
    email: string
    comment: string
}

function post({ post }: Props) {
    //console.log(post);
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(true)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log(data)
                setSubmitted(true)
            })
            .catch((err) => {
                console.log(err)
                setSubmitted(false)
            })
    }

    return (
        <main className="mx-auto max-w-7xl my-5 ">
            <img
                className="h-40 w-full object-cover"
                src={urlFor(post.mainImage).url()!}
                alt=""
            />
            <article className="mx-auto max-w-3xl p-5">
                <h1 className="mt-10 mb-3 text-3xl ">{post.title}</h1>
                <h2 className="mb-2 text-xl font-light text-gray-500">
                    {post.description}
                </h2>
                <div className="flex items-center space-x-2">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={urlFor(post.author.image).url()!}
                        alt=""
                    />

                    <p className="text-sm font-extralight">
                        Blog post by{' '}
                        <span className="text-green-600">{post.author.name}</span> -
                        published at {new Date(post._createdAt).toLocaleString()}
                    </p>
                </div>
                <div className="mt-10">
                    <PortableText
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={post.body}
                        serializers={{
                            h1: (props: any) => (
                                <h1 className="my-5 text-2xl font-bold" {...props} />
                            ),
                            h2: (props: any) => (
                                <h2 className="my-5 text-xl font-bold" {...props} />
                            ),
                            li: ({ children }: any) => (
                                <li className="ml-4 list-disc">{children}</li>
                            ),
                            link: ({ href, children }: any) => (
                                <a href={href} className="text-blue-500 hover:underline">
                                    {children}
                                </a>
                            ),
                        }}
                    />
                </div>
            </article>
            <hr className="my-5 mx-auto max-w-lg border border-ghost" />
            {submitted ? (
                <div className="my-10 mx-auto flex max-w-2xl flex-col bg-ghost p-10 text-white">
                    <h3 className="text-3xl font-bold">
                        Thank you for submitting your comment!
                    </h3>
                    <p>Once it has been approved, it will appear below!</p>
                </div>
            ) : (
                <form
                    className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
                    <h4 className="text-3xl font-bold">Leave a comment below!</h4>
                    <hr className="mt-2 py-3" />
                    <input
                        type="hidden"
                        {...register('_id')}
                        name="_id"
                        value={post._id}
                    />
                    <label className="mb-5 block">
                        <span className="text-gray-700">Name</span>
                        <input
                            {...register('name', { required: true })}
                            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-yellow-500"
                            placeholder="John Appleseed"
                            type="text"
                        />
                    </label>
                    <label className="mb-5 block">
                        <span className="text-gray-780">Email</span>
                        <input
                            {...register('email', { required: true })}
                            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-ghost"
                            placeholder="John Appleseed"
                            type="text"
                        />
                    </label>

                    <label className="mb-5 block">
                        <span className="text-gray-700">Comment</span>
                        <textarea
                            {...register('comment', { required: true })}
                            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow ring-ghost"
                            placeholder="John Appleseed"
                            rows={8}
                        />
                    </label>

                    {/*Errors*/}
                    <div className="flex flex-col p-5">
                        {errors.name && <p className="text-red-500">Name is required</p>}
                        {errors.email && (
                            <p className="text-red-500">Email is required</p>
                        )}
                        {errors.comment && (
                            <p className="text-red-500">Comment is required</p>
                        )}
                    </div>
                    <input
                        type="submit"
                        className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
                    />
                </form>
            )}

            {/* Comment */}
            <div className="my-5 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-ghost">
                <h3>Comments</h3>
                <hr />
                {post.comments.map((comment) => (
                    <div key={comment._id}>
                        <p>
                            <span className="text-ghost"> {comment.name}:</span>{' '}
                            {comment.comment}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default post;

export const getStaticPaths = async () => {
    const query = `*[_type=='post']{
            _id,
            slug{
            current
        }
    }    
    `
    const posts = await sanityClient.fetch(query)

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current,
        },
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type=='post' && slug.current==$slug][0]{
            _id,
            _createdAt,
            title,
            author->{
                name,
                image
            },
            'comments':*[_type=='comment' && 
            post._ref==^._id &&
            approved ==true]
            ,
            description,
            mainImage,
            slug,
            body,
        }    
    `
    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
        },
        revalidate: 60, //after 60 seconds, it will update the old cached version
    }
}