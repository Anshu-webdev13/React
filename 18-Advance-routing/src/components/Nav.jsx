import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex justify-between px-4 py-8 bg-cyan-900">
      <h2 className="text-2xl font-bold">Seriyans</h2>
      <div className="flex gap-10">
        <Link className="text-medium font-bold" to="/">
          Home
        </Link>
        <Link className="text-medium font-bold" to="/about">
          About
        </Link>
        <Link className="text-medium font-bold" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
}

export default Nav
