
import React, { useState, useEffect } from 'react';

const Post: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [newPost, setNewPost] = useState<PostData>({
    id: 0,
    title: '',
    category: 'THREAD',
    creationDate: '',
    description: '',
    creator: {
      id: 0,
      name: '',
      userName: '',
    },
  });

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(savedPosts);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
      creator: {
        ...newPost.creator,
        [name]: value,
      },
    });
  };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setNewPost({
  //     ...newPost, 
  //     creator: {
  //       ...newPost.creator,
  //       [name]: value,
  //     },
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (newPost.title && newPost.description) {
  //     const newPostData = { ...newPost, id: Date.now() };
  //     const updatedPosts = [...posts, newPostData];

  //     localStorage.setItem('posts', JSON.stringify(updatedPosts));

  //     setPosts(updatedPosts);
  //     setNewPost({
  //       id: 0,
  //       title: '',
  //       description: '',
  //       category: 'QNA',
  //       creationDate: '',
  //       creator: {
  //         id: 0,
  //         name: '',
  //         userName: '',
  //       },
  //     });
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (newPost.title && newPost.description && newPost.category) {
      const newPostData = { ...newPost, id: Date.now() };
      const updatedPosts = [...posts, newPostData];
  
      // Save the updated posts to localStorage
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
  
      setPosts(updatedPosts);
  
      // Clear the input fields by resetting newPost
      setNewPost({
        id: 0,
        title: '',
        description: '',
        category: 'THREAD', // Set a default category if needed
        creationDate: '',
        creator: {
          id: 0,
          name: '',
          userName: '',
        },
      });
    }
  };
  
  

  return (
    <div>
    <div className='create-post'>
        <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={newPost.creator.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
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
        <div className='radio-btn'>
        <input type="radio" title='thread' id="THREAD" name="category" value="THREAD" checked={newPost.category === "THREAD"} onChange={handleInputChange} />
        <label htmlFor="thread">THREAD</label><br />

        <input type="radio" title='qna' id="QNA" name="category" value="QNA" checked={newPost.category === "QNA"} onChange={handleInputChange} />
        <label htmlFor="qna">QNA</label><br />

        </div>
        <div>
          <label htmlFor="creationDate">Created at:</label>
          <input
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
        <button id='cr8btn' type="submit">Create Post</button>
      </form>
    </div>
      
    </div>
  );
};

export default Post;