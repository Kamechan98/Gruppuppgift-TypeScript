// import React, { useState, useEffect } from 'react';
// import Post from './Post';

// interface User {
// 	id: number;
// 	name: string;
// 	userName: string;
// }

// type PostCategory = "THREAD" | "QNA"

// interface PostData {
//   id: number;
// 	title: string;
// 	category: PostCategory;
// 	creationDate: string;
// 	description: string;
// 	creator: User
// }

// interface QNAPost extends PostData {
// 	category: "QNA";
// 	isAnswered: boolean;
// 	commentAnswerId?: number
// }

// interface Comment {
// 	id: number; //(tillagt)
// 	thread: number;
// 	content: string;
// 	creator: User
// }


// const PostList: React.FC = () => {
//   const [posts, setPosts] = useState<PostData[]>([]);
//   const [newPost, setNewPost] = useState<PostData>({
//   id: 0,
// 	title: '',
// 	category: 'QNA' || 'THREAD',
// 	creationDate: '',
// 	description: '',
// 	creator: {
//   id: 0,
// 	name: '',
// 	userName: '',
//   }
//   });

//   useEffect(() => {
//     const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
//     setPosts(savedPosts);
//   }, []);


//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   const { name, value } = e.target;
//   // Update the 'creator' object within 'newPost' correctly
//   setNewPost({
//     ...newPost, [name]: value,
//     creator: {
//       ...newPost.creator,
//       [name]: value,
//     },
//   });
// };


//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     if (newPost.title && newPost.description) {
//       const newPostData = { ...newPost, id: Date.now() };
//       const updatedPosts = [...posts, newPostData];

//       // Save the updated posts to localStorage
//       localStorage.setItem('posts', JSON.stringify(updatedPosts));

//       setPosts(updatedPosts);
//       setNewPost({ id: 0, title: '', description: '', category: "QNA" || "THREAD", creationDate: '', creator: {id: 0, name: '', userName: ''} });
//     }
//   };
  

//   // useEffect(() => {
//   //   const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
//   //   setPosts(savedPosts);
//   // }, []);
  
  
//   const handleCreatePost = () => {
//     if (newPost.title && newPost.description && newPost.category && newPost.creationDate && newPost.creator) {
//       const newPostData = { ...newPost, id: Date.now() };
//       const updatedPosts = [...posts, newPostData];
  
//       // Save the updated posts to localStorage
//       localStorage.setItem('posts', JSON.stringify(updatedPosts));
  
//       setPosts(updatedPosts);
//       setNewPost({ id: 0, title: '', description: '', category: "QNA" || "THREAD", creationDate: '', creator: {id: 0, name: '', userName: ''} });
//     }
//   };

//   return (
//     <div>
//       <h1>Create Post</h1>
//       <form onSubmit={handleSubmit}>
//       <div>
//           <label htmlFor="name">Name:</label>
//           <div>
//           <input
//             id="name"
//             name="name"
//             value={newPost.creator.name}
//             onChange={handleInputChange}
//           />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="userName">Username:</label>
//           <input
//             id="userName"
//             name="userName"
//             value={newPost.creator.userName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={newPost.title}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="category">Category:</label>
//           <textarea
//             id="category"
//             name="category"
//             value={newPost.category}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="creationDate">Created at:</label>
//           <textarea
//             id="creationDate"
//             name="creationDate"
//             value={newPost.creationDate}
//             onChange={handleInputChange}
//           />
//           </div>
//           <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={newPost.description}
//             onChange={handleInputChange}
//           />
//           </div>
//         <button type="button" onClick={handleCreatePost}>
//           Create Post
//         </button>
//       </form>
//       <div className="post-list">
//         {posts.map((post) => (
//           <Post key={post.id} title={post.title} category={post.category} description={post.description} creationDate={post.creationDate} name={post.creator.name} userName={post.creator.userName} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PostList;


import React, { useState, useEffect } from 'react';

const Post: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [newPost, setNewPost] = useState<PostData>({
    id: 0,
    title: '',
    category: 'QNA',
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
  
    if (newPost.title && newPost.description) {
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
        category: 'QNA',
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
        <div>
          <label htmlFor="category">Category:</label>
          <input
            id="category"
            name="category"
            value={newPost.category}
            onChange={handleInputChange}
          />
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
        <button type="submit">Create Post</button>
      </form>
      {/* <div className="post-list">
        {posts.map((post) => (
          <div key={post.id}>
           <h3>{post.title}</h3>
      <p>Name: {post.creator.name}</p>
      <p>Username: {post.creator.userName}</p>
      <p>Category: {post.category}</p>
      <p>Created at: {post.creationDate}</p>
      <p>Description: {post.description}</p>
            
          </div>
        ))} */}
      {/* </div> */}
    </div>
  );
};
export default Post;
