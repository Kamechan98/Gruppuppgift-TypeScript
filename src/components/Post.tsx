
import React from 'react';


type PostProps = {
	title: string;
  category: string;
	creationDate: string;
	description: string;
};

const Post: React.FC<PostProps> = ({ title, description, category, creationDate}) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{category}</p>
      <p>{description}</p>
      <p>{creationDate}</p>
    </div>
    
  );
};

export default Post;
