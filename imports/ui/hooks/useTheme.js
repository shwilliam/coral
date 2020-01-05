import {useContext} from 'react'
import {ThemeContext} from '../context'

const THEMES = ['dark', 'light']

const useTheme = () => {
  const {theme, setTheme: setThemeContext} = useContext(ThemeContext)
  const setTheme = (theme = 'light') =>
    THEMES.includes(theme) ? setThemeContext(theme) : 0

  return [theme, setTheme]
}

export default useTheme
