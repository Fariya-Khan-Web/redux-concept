import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/postsSlice';

const Posts = () => {

    const dispatch = useDispatch()

    const {posts, isLoading, isError, error} = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    if(isLoading){
        return <h1 className='text-xl text-center'>Loading...</h1>
    }

    if(isError){
        return <h1 className='text-xl text-center'>{error}</h1>
    }

    if(!isError && !isLoading && posts.length === 0){
        return <h1 className='text-2xl text-center'>-- No data to show --</h1>
    }

    return (
        <div className='mx-16'>
            {posts.map(post => <li
                key={post.id}
                className='text-xl my-2'>
                {post.title}
            </li>
            )}
        </div>
    );
};

export default Posts;