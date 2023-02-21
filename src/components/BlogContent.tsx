import React,{FC} from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BlogPostsProps } from '../types/interface'


const BlogContent:FC <BlogPostsProps> = ({title,body,userId,id}:BlogPostsProps) => {
  return (
      <div className='flex  justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl gap-7 flex flex-col format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <header className='mb-4 lg:mb-6 not-format'>
            <h1 className='mb-7 mt-3 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
              {title}
            </h1>
          </header>
          <p className='lead'>{body}</p>
        </article>
      </div>

  )
}

export default BlogContent