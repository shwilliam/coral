import React from 'react'
import {css} from 'aphrodite'
import styles from './Logo.styles'

const Logo = () => {
  return (
    <div
      className={css(styles.logoContainer)}
      style={{margin: '25px auto'}}
    >
      <h1 className={css(styles.logo)}>coral</h1>
      <span className={css(styles.blinkingCursor)}>_</span>
    </div>
  )
}

export default Logo
