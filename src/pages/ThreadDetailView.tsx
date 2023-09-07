// PostDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { posts } from './data';



const ThreadDetailView = () => {
  const {id}=useParams()
  const [post, setPost] = useState <PostData> () 
  useEffect (()=>{

  const storeData = localStorage.getItem(`posts`);
  if (!!storeData){
    const dataArray: PostData []  = JSON.parse(storeData) || []
    const _post = dataArray.find (post=> post.id === Number(id))
    setPost(_post)
  }

  },[id]) 
  

  if (!post) return <div>Posten hittades inte</div>;

  return (
    <div> key={post.id}
                <p>Title: {post.title}</p>
                <p>Description: {post.description}</p>
                <p>Category: {post.category}</p>
                <p>Creation Date: {post.creationDate}</p>
                <p>Creator name: {post.creator.name}</p>
                <p>Username: {post.creator.userName}</p>   
    </div>
  );
};

export default ThreadDetailView;
