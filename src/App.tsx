import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreadListView from "./pages/ThreadListView"
import Post from './components/Post';
import PostList from './components/PostList';

const App = () => {
 return(
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/post" element={<Post />} />
          <Route index element={<PostList />} />
        </Routes>
      </Router>
 );   
};

export default App;
