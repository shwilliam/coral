import React, {createContext, useState} from 'react'

const ThemeContext = createContext()

const ThemeContextProvider = ({children, ...props}) => {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{theme, setTheme}} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
export {ThemeContextProvider}
