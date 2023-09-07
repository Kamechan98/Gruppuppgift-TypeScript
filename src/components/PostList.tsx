import { useNavigate } from 'react-router-dom';


const PostList = () => {
    const navigate = useNavigate()
    const savedPosts: PostData[] = JSON.parse(localStorage.getItem('posts') || '[]');
    console.log(savedPosts);
    {}
    return (
      <div>
        <div>
          {savedPosts.map(function(post){
            console.log("POSTS", post.creator)
            return(
              <div key={post.id} className="post" id="post" onClick={() =>{
                navigate(`/post/${post.id}`)
                }}>
                <h3>Title: {post.title}</h3>
                <p>Description: {post.description}</p>
                <p>Category: {post.category}</p>
                <p>Creation Date: {post.creationDate}</p>
                <p>Creator name: {post.creator.name}</p>
                <p>Username: {post.creator.userName}</p>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default PostList;