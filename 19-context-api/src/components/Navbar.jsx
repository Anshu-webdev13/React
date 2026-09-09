import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import {useContext} from 'react'

const Navbar = (props) => {
  const data =useContext(themeDataContext)
  return (
    <div className='nav'>
      <h2>{data}</h2>
      <Navbar2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
