import React, { useContext, useRef } from 'react'
import {PostList} from '../Store/post-list-store';


const CreatePost = () => {
  const {addPost}=useContext(PostList);

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postImageElement=useRef();
  const postBodyElement=useRef();
  const reactionElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postImage=postImageElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionElement.current.value;
    const tags = tagsElement.current.value.split(/\s+/).filter(tag => tag.length);

    addPost(userId, postTitle, postImage, postBody, reactions, tags);

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postImageElement.current.value="";
    postBodyElement.current.value="";
    reactionElement.current.value="";
    tagsElement.current.value="";

  }
  return (
    <div>
      <form className='create-post' onSubmit={handleSubmit}>
        
      <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder='Your User Id...'
          />
        </div>
        

        {/*post title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={postTitleElement}
            id="title"
            placeholder='How are you feeling today...'
          />
        </div>
        
        {/*post Body */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Content
          </label>
          <textarea
            type="text" 
            rows="3"
            className="form-control"
            ref={postBodyElement}
            id="body"
            placeholder='Tell us more about it...'
          />
        </div>

        {/*post image */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post image link
          </label>
          <input
            type="text" 
            rows="3"
            className="form-control"
            ref={postImageElement}
            id="body"
            placeholder='Tell us more about it...'
          />
        </div>

        {/*Post Reaction*/}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Number of Post Reaction
          </label>
          <input
            type="text"
            className="form-control"
            ref={reactionElement}
            id="reactions"
            placeholder='How many People Reacted...'
          />
        </div>

        {/*Post Tags */}
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Tags her...
          </label>
          <input
            type="text"
            className="form-control"
            ref={tagsElement}
            id="tags"
            placeholder='Please Enter Your Tags here...'
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost