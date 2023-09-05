import React from 'react'
import PostList from '../components/PostList'
import Post from '../components/Post'

//Lista alla trådar
const ThreadListView = () => {
  return (
    <div>
      <h2>Thread List</h2>
      <PostList />
    </div>
  )
}

export default ThreadListView;