import React from 'react'
import {css} from 'aphrodite'
import {useTheme} from '../hooks'
import styles from './Logo.styles'

const LogoSidemenu = () => {
  const [theme] = useTheme()
  return (
    <>
      <h1
        className={
          theme === 'light'
            ? css(styles.logoLight)
            : theme === 'solarized'
            ? css(styles.logoSolarized)
            : css(styles.logoDark)
        }
      >
        coral
      </h1>
      <span className={css(styles.blinkingCursor)}>_</span>
    </>
  )
}

export default LogoSidemenu
