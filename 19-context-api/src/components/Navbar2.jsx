import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from '../Themecontext/ThemeContext'

const Navbar2 = () => {
  const [theme, setTheme] = useContext(themeDataContext)
  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>Conatact</h4>
      <h4>About</h4>
      <h4>Service</h4>
      <h4>{theme}</h4>
  
    </div>
  )
}

export default Navbar2
