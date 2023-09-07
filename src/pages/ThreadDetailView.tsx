// PostDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
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
    <div>
      
    <div className='post' id='post'> key={post.id} 
                <h3>Title: {post.title}</h3>
                <p>Description: {post.description}</p>
                <p>Category: {post.category}</p>
                <p>Creation Date: {post.creationDate}</p>
                <p>Creator name: {post.creator.name}</p>
                <p>Username: {post.creator.userName}</p>
    </div>

    <CommentList/>
    </div>

  );
};

export default ThreadDetailView;
