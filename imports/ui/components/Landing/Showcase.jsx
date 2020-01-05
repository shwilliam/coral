import React from 'react'
import {css} from 'aphrodite'
import styles from './Landing.styles'

const Showcase = () => (
  <main className={css(styles.mainContent)}>
    <h1 className={css(styles.heading)}>Welcome to coral!</h1>
    <p className={css(styles.paragraph)}>
      The best note taking app out there!
    </p>
  </main>
)

export default Showcase
