import React from 'react'
import { createContext } from 'react'

const ThemeContext = () => {
  const themeDataContext =  createContext()
  return (
    <div>
      <themeDataContext.Provider>
        {props.children}
      </themeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
