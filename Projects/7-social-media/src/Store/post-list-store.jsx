import { createContext, useReducer } from "react";


export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const postListReducer=(currPostList, action)=>{

    if( action.type==="ADD_POST"){
        
        return [action.payload, ...currPostList];

    }else if(action.type==="DELETE_POST"){
        return currPostList.filter((post)=> post.id !==action.payload.postId);
    }
    return currPostList;
}
const PostListProvider=({children})=>{
    
    const [postList, dispatchPostList]=useReducer(postListReducer, DEFAULT_POST_LIST );

    const addPost=(userId, postTitle, postImage, postBody, reactions, tags)=>{
        console.log(`${userId}, ${postTitle},${postImage}, ${postBody}, ${reactions}, ${tags}`)
        dispatchPostList({
            type:"ADD_POST",
            payload:{
            id:Date.now().toString(),
            title:postTitle,
            image:postImage,    
            body:postBody,
            reactions,
            userId,
            tags:Array.isArray(tags)?tags:[tags]
            }
        })
        

    }

    const deletePost=(postId)=>{
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId
            }
        })
    }

    return ( 
        <PostList.Provider value={{postList, addPost,deletePost}}>
        {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST=[{
    id:'1',
    title:'Going to mumbai',
    image:"https://media.licdn.com/dms/image/v2/D4D35AQERgk2wOpWMAQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1737911560830?e=1740546000&v=beta&t=aXdKvYCVrJp8TPluXS1TKakiqZBgfwd_urnPMJnGPJY",    
    body:"hi freinds i am going to  mumbai for my vacations",
    reactions:2,
    userId:'',
    tags:['vacation', "mumbai", "enjoying"],
},{
    id:'2',
    title:'pass ho gai',
    image:"https://media.licdn.com/dms/image/v2/D4D35AQHN1h-8pwEojw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1722095895726?e=1740546000&v=beta&t=NoJAqghMiQYGKXrue1Q1iVb-TkTHdCVC03NrP6ZQApw",
    body:'4 sal ke baad bhi ho gaye pass',
    reactions:15,
    userId:'',
    tags:['graduating', "unbelievable"],
}
]
 export default PostListProvider;