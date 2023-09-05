
import React from 'react';


type PostProps = {
	title: string;
	creationDate: string;
	description: string;
  name: string;
  userName: string
};

const Post: React.FC<PostProps> = ({ title, description, creationDate, name, userName}) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{name}</p>
      <p>{userName}</p>
      <p>{description}</p>
      <p>{creationDate}</p>
    </div>
    
  );
};

export default Post;
