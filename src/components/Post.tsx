
import React from 'react';


type PostProps = {
  title: string;
  content: string;
};

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
    
  );
};

export default Post;
