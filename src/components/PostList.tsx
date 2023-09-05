
import React, { useState, useEffect } from 'react';
import Post from './Post';

interface User {
	id: number;
	name: string;
	userName: string;
}

type PostCategory = "THREAD" | "QNA"

interface PostData {
  id: number;
	title: string;
	category: PostCategory;
	creationDate: string;
	description: string;
	creator: User
}

interface QNAPost extends PostData {
	category: "QNA";
	isAnswered: boolean;
	commentAnswerId?: number
}

interface Comment {
	id: number; //(tillagt)
	thread: number;
	content: string;
	creator: User
}


const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [newPost, setNewPost] = useState<PostData>({
  id: 0,
	title: '',
	category: 'QNA' || 'THREAD',
	creationDate: '',
	description: '',
	creator: {
  id: 0,
	name: '',
	userName: '',
  }
  });

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(savedPosts);
  }, []);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (newPost.title && newPost.description) {
      const newPostData = { ...newPost, id: Date.now() };
      const updatedPosts = [...posts, newPostData];

      // Save the updated posts to localStorage
      localStorage.setItem('posts', JSON.stringify(updatedPosts));

      setPosts(updatedPosts);
      setNewPost({ id: 0, title: '', description: '', category: "QNA" || "THREAD", creationDate: '', creator: {id: 0, name: '', userName: ''} });
    }
  };
  

  // useEffect(() => {
  //   const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  //   setPosts(savedPosts);
  // }, []);
  
  
  const handleCreatePost = () => {
    if (newPost.title && newPost.description && newPost.category && newPost.creationDate && newPost.creator) {
      const newPostData = { ...newPost, id: Date.now() };
      const updatedPosts = [...posts, newPostData];
  
      // Save the updated posts to localStorage
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
  
      setPosts(updatedPosts);
      setNewPost({ id: 0, title: '', description: '', category: "QNA" || "THREAD", creationDate: '', creator: {id: 0, name: '', userName: ''} });
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">Name:</label>
          <div>
          <input title='enter your name'
            type="text"
            id="name"
            name="name"
            value={newPost.creator.name}
            onChange={handleInputChange}
          />
          </div>
        </div>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={newPost.creator.userName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <textarea
            id="category"
            name="category"
            value={newPost.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="creationDate">Created at:</label>
          <textarea
            id="creationDate"
            name="creationDate"
            value={newPost.creationDate}
            onChange={handleInputChange}
          />
          </div>
          <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newPost.description}
            onChange={handleInputChange}
          />
          </div>
        <button type="button" onClick={handleCreatePost}>
          Create Post
        </button>
      </form>
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} category={post.category} description={post.description} creationDate={post.creationDate} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
