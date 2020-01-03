import React from 'react'
import {css} from 'aphrodite'
import styles from './Landing.styles'

const LandingFeatures = () => (
  <section className={css(styles.container)}>
    <h2>Gorgeous settings</h2>
    <p>
      Packed with beautiful themes such as Dark Mode and Solarized
      Mode, Coral makes your writing look great before and after
      publishing.
    </p>
    <img className={css(styles.themesImg)} src="/themes.png" />
  </section>
)

export default LandingFeatures
