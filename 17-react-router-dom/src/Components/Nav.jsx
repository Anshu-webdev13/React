import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='nav'>
        <h3>Flipkart</h3>
        <div className="nav1">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/post">Post</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav
