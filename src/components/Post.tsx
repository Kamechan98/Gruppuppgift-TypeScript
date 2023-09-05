import React from 'react';

type PostProps = {
  title: string;
  category: string;
  creationDate: string;
  description: string;
  name: string; // Add name and username props
  userName: string;
};

const Post: React.FC<PostProps> = ({ title, description, category, creationDate, name, userName }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Created at: {creationDate}</p>
      <p>Name: {name}</p> {/* Display the Name */}
      <p>Username: {userName}</p> {/* Display the Username */}
    </div>
  );
};

export default Post;
