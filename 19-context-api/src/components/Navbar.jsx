
import { useContext } from 'react'
import Navbar2 from './Navbar2'
import { themeDataContext } from '../Themecontext/ThemeContext'

const Navbar = () => {
  const [theme]=useContext(themeDataContext)
  return (
    <div className={theme}>
      <h2>Sheriyans</h2>
      <Navbar2 />
    </div>
  )
}

export default Navbar
