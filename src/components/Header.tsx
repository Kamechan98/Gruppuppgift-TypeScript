import React from 'react'
import '../index.css';
// import './index.tsx';
// import { useNavigate } from 'react-router-dom';


  // const navigate = useNavigate();
  
  // const goToPage1 = () => {
  
  //   // This will navigate to second component
  //   navigate('/threadcreationview'); 
  // }

  // const gotToPage2 = () => {
  
  //   // This will navigate to first component
  //   navigate('/threadlistview'); 
  // };

  // const gotToPage3 = () => {
  
  //   // This will navigate to first component
  //   navigate('/threaddetailview'); 
  // };

const Header = () => {
  return (
    <div>
      <div className='Header'>
        <h1>Grupp E's forum</h1>
        {/* <label htmlFor="text">Search</label> */}
        <input title="Searchbar" type="text" name="SearchBar" id="Searchbar" placeholder='Search...' />
        <img src="https://www.svgrepo.com/show/127033/magnifying-glass.svg" alt="search" id='img'/>
        <button id='src-btn'> Search</button>
        <a id='create-btn'>Create new Post</a>
      </div>
    </div>
  )
}

export default Header