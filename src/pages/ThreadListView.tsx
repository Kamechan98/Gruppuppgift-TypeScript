import React from 'react'
import PostList from '../components/PostList'
import Post from '../components/Post'
//Lista alla trådar
const ThreadListView = () => {
  return (
    <div>
      <PostList/>
      
      {/* <div className="post-list">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} content={post.content} />
        ))} */}
      {/* </div> */}
    </div>
  )
}

export default ThreadListView