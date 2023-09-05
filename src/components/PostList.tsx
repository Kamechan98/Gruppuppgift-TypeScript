import Post from './Post';

const PostList = () => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    console.log(savedPosts);
    {}
    return (
      <div>
        <div>
          {savedPosts.map(function(post:any){
            return(
              <div key={post.id}>
                <p>Title: {post.title}</p>
                <p>Content: {post.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  };

  export default PostList;
  