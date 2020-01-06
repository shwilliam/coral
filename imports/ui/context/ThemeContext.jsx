import React, {createContext, useState, useEffect} from 'react'
import {withUser} from '../hocs'

const ThemeContext = createContext()

const ThemeContextProvider = withUser(
  ({user, children, ...props}) => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
      if (user && user.theme) setTheme(user.theme)
    }, [user])

    return (
      <ThemeContext.Provider value={{theme, setTheme}} {...props}>
        {children}
      </ThemeContext.Provider>
    )
  },
)

export default ThemeContext
export {ThemeContextProvider}
