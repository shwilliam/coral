import React from 'react'
import {css} from 'aphrodite'
import styles from './Logo.styles'

const Logo = () => {
  return (
    <div className={css(styles.logoContainer)}>
      <h1 className={css(styles.logo)}>coral</h1>
    </div>
  )
}

export default Logo
