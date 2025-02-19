import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListasData } from '../Store/post-list-store'

const PostList = () => {
  const {postList}=useContext(PostListasData);
  
  return (
    <>
    {postList.map((post)=> (
      <Post key={post.id} post={post}/>
    ))}
    </>
  )
}

export default PostList