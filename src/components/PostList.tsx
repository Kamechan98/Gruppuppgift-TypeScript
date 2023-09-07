const PostList = () => {
    const savedPosts: PostData[] = JSON.parse(localStorage.getItem('posts') || '[]');
    console.log(savedPosts);
    {}
    return (
      <div>
        <div>
          {savedPosts.map(function(post){
            console.log("POSTS", post.creator)
            return(
              <div key={post.id}>
                <p>Title: {post.title}</p>
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