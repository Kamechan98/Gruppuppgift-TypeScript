import React from 'react'
import '../index.css';
// import './index.tsx';

  
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
        <a href="/" className='header-link'><h1>Grupp E's forum</h1></a>
        
        {/* <label htmlFor="text">Search</label> */}
        <input title="Searchbar" type="text" name="SearchBar" id="Searchbar" placeholder='Search...' />
        <img src="https://www.svgrepo.com/show/127033/magnifying-glass.svg" alt="search" id='img'/>
        <button id='src-btn'> Search</button>
        <a href='/post' id='create-btn'>Create new Post</a>
      </div>
    </div>
  )
}

export default Header