import {useContext} from 'react'
import {Meteor} from 'meteor/meteor'
import {ThemeContext} from '../context'

const THEMES = ['dark', 'light', 'solarized']

const useTheme = () => {
  const {theme, setTheme: setThemeContext} = useContext(ThemeContext)
  const setTheme = (theme = 'light') => {
    if (THEMES.includes(theme)) {
      setThemeContext(theme)
      Meteor.call('users.changeTheme', theme)
    }
  }

  return [theme, setTheme]
}

export default useTheme
