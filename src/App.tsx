import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreadListView from "./pages/ThreadListView"
import Post from './components/Post';

const App = () => {
 return(
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Post" element={<Post />} />
          <Route path="/ThreadListView" element={<ThreadListView />} />
        </Routes>
      </Router>
 );   
};

export default App;
