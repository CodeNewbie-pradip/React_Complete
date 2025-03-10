import React, {useContext} from 'react'
import { AiFillDelete } from "react-icons/ai";
import {PostList} from "../Store/post-list-store";

const Post = ({post}) => {
  const {deletePost}=useContext(PostList)
  return (
        <div className="card post-card" style={{width: '18rem'}}>
  <img src={post.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 
    translate-middle badge rounded-pill bg-danger"
    onClick={()=>deletePost(post.id)}>
      <AiFillDelete/>
    </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>(
      <span key={tag} className='badge text-bg-primary hashtag'>{tag}</span>))
    }

<div className="alert alert-success reactions" role="alert">
  This post has been reacted by {post.reactions}
</div>
    
  </div>
</div>
  )
}

export default Post