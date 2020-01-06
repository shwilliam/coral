import React from 'react'
import {css} from 'aphrodite'
import styles from './Logo.styles'

const Logo = () => {
  return (
    <>
      <h1 className={css(styles.logo)}>coral</h1>
      <span className={css(styles.blinkingCursor)}>_</span>
    </>
  )
}

export default Logo
