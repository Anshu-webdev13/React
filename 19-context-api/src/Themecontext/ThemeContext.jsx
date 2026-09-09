import React from 'react'
import { createContext } from 'react'

const ThemeContext = (props) => {
  const themeDataContext =  createContext()
  return (
    <div>
      <themeDataContext.Provider value='Anshu'>
        {props.children}
      </themeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
