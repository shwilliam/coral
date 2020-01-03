import React from 'react'
import LandingHeader from './LandingHeader'
import {css} from 'aphrodite'
import styles from './Landing.styles'

const Landing = () => (
  <>
    <LandingHeader />
    <main className={css(styles.mainContent)}>
      <h1 className={css(styles.heading)}>Welcome to coral!</h1>
      <p>The best note taking app out there!</p>
    </main>
  </>
)

export default Landing
