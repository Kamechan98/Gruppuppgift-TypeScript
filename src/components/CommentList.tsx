import React, { useState, useEffect } from 'react';

const CommentList = () => {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [newComment, setNewComment] = useState<PostComment>({
    id: 0,
    thread: 0,
    content: '',
    creator: {
      id: 0,
      name: '',
      userName: '',
    },
  });

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value,
      creator: {
        ...newComment.creator,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (newComment.content && newComment.creator.name && newComment.creator.userName) {
      const newCommentData: PostComment = { ...newComment, id: Date.now() };
      const updatedComments = [...comments, newCommentData];
  
      // Save the updated posts to localStorage
      localStorage.setItem('comments', JSON.stringify(updatedComments));
  
      setComments(updatedComments);
  
      // Clear the input fields by resetting newPost
      setNewComment({
        id: 0,
        thread: 0,
        content: '',
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
    <div className='comment' id='comment-field'>
      <h3>Comments</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input className="commentInput" type="name" name="name" id="name" value={newComment.creator.name} onChange={handleInputChange}/>
      <label htmlFor="userName">Username</label>
      <input className="commentInput" type="userName" name="userName" id="userName" value={newComment.creator.userName} onChange={handleInputChange}/>
      <label htmlFor="comment">Comment</label>
      <input className="commentInput" type="content" title="content "name="content" id="content" value={newComment.content} onChange={handleInputChange}/>
      <button className='commentButton' id='commentButton'>Send comment</button>
    </form>
    </div>
    {comments.map(function(comment){
            console.log("comments", comment.creator)
    return (<div key={comment.id} className="comment" id="comment">
                <p>Description: {comment.content}</p>
                <p>Creator name: {comment.creator.name}</p>
                <p>Username: {comment.creator.userName}</p>
              </div>)})}

    </div>
  )
}

export default CommentList

