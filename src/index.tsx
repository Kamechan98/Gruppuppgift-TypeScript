import React from 'react';
import ReactDOM from 'react-dom/client';
// import { useNavigate } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import PostList from './components/PostList';
import Post from './components/Post';

// function Navigate() {
//   const navigate = useNavigate();
  
//   const goToPage1 = () => {
  
//     // This will navigate to second component
//     navigate('/threadcreationview'); 
//   };
//   const gotToPage2 = () => {
  
//     // This will navigate to first component
//     navigate('/threadlistview'); 
//   };

//   const gotToPage3 = () => {
  
//     // This will navigate to first component
//     navigate('/threaddetailview'); 
//   };
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>  
    <PostList/>
    {/* <Post/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();