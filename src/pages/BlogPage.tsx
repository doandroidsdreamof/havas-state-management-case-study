import React, { useEffect } from 'react';

import BlogContent from '../components/BlogContent';
import NavigationBar from '../components/NavigationBar';
import {blogEndpoint} from '../service';
//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPosts } from '../store/postsThunk';
import { BlogPostsProps } from '../types/interface';

const BlogPage = () => {
  const dispatch = useAppDispatch();
  const { blogPosts, loading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts(blogEndpoint));
  }, []);


  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
      <NavigationBar text='true' />
      <div>
        {blogPosts.length > 0
          ? blogPosts.slice(0,4).map((el, key) => (
              <>
                <BlogContent key={key} id={el.id} userId={el.userId} title={el.title} body={el.body} />
              </>
            ))
          : null}
      </div>
    </main>
  );
};

export default BlogPage;
