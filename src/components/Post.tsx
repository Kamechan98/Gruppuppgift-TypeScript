import React, { useState, useEffect } from 'react'

type PostData = {
  id: number;
  title: string;
  content: string;
};

const Post: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [newPost, setNewPost] = useState<PostData>({
    id: 0,
    title: '',
    content: '',
  });
  
  /* Samma koden som ovan fast utan React.FC
  const PostList = ({id, title, content}:PostData) => {
    const[posts, setPosts] = useState<PostData[]>([]);
    const [newPost, setNewPost] = useState<PostData>({
        id: 0,
        title: "",
        content: ""
    });
    */

    useEffect(() => {
      const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
      setPosts(savedPosts);
    }, []);

    //trigger onChange event
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // console.log(e.target.value);
      const { name, value } = e.target;
      setNewPost({ ...newPost, [name]: value });
    };

    /* annan sätt att skriva koden som ovan
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setNewPost({...newPost, [e.target.name]: e.target.value})
    };
    */
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault(); // Prevent the default form submission behavior
      
      if (newPost.title && newPost.content) {
        const newPostData = { ...newPost, id: Date.now() };
        const updatedPosts = [...posts, newPostData];
  
        // Save the updated posts to localStorage
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
  
        setPosts(updatedPosts);
        console.log(updatedPosts);
        setNewPost({ id: 0, title: '', content: '' });
        
      }
    };

    return (
      <div>
        <h1>Create your post here:</h1>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
            />
          </div>
          <input type="submit" value="Create Post"></input>
        </form>
      </div>
    );
  };

  export default Post;
