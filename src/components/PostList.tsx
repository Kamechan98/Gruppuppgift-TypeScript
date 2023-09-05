
import React, { useState, useEffect } from 'react';
import Post from './Post';
import '../index.css';


type PostData = {
  id: number;
  title: string;
  content: string;
};

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [newPost, setNewPost] = useState<PostData>({
    id: 0,
    title: '',
    content: '',
  });

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(savedPosts);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('posts', JSON.stringify(posts));
  // }, [posts]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  // const handleCreatePost = () => {
  //   if (newPost.title && newPost.content) {
  //     setPosts([...posts, { ...newPost, id: Date.now() }]);
  //     setNewPost({ id: 0, title: '', content: '' });
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (newPost.title && newPost.content) {
      const newPostData = { ...newPost, id: Date.now() };
      const updatedPosts = [...posts, newPostData];

      // Save the updated posts to localStorage
      localStorage.setItem('posts', JSON.stringify(updatedPosts));

      setPosts(updatedPosts);
      setNewPost({ id: 0, title: '', content: '' });
    }
  };
  

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(savedPosts);
  }, []);
  
  
  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      const newPostData = { ...newPost, id: Date.now() };
      const updatedPosts = [...posts, newPostData];
  
      // Save the updated posts to localStorage
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
  
      setPosts(updatedPosts);
      setNewPost({ id: 0, title: '', content: '' });
    }
  };

  return (
    <div>
      <h1>Post List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label id= "titleText" htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label id="contentText" htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleCreatePost}>
          Create Post
        </button>
      </form>
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
