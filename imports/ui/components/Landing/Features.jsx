import React from 'react'
import {css} from 'aphrodite'
import styles from './Landing.styles'
import Feature from './Feature'

const Features = () => (
  <section className={css(styles.container)}>
    <Feature
      title="Use it everywhere"
      description="Coral works on desktop, tablet, and mobile, so you can write
      wherever inspiration strikes."
      imgSrc="/sizes.png"
      imgAlt="desktop, tablet & mobile look"
      imgStyle={css(styles.landingImgs)}
    />
    <Feature
      title="Gorgeous settings"
      description="Packed with beautiful themes such as Dark Mode and Solarized
      Mode, Coral makes your writing look great before and after
      publishing."
      imgSrc="/themes.png"
      imgAlt="light, dark and solarized mode"
      imgStyle={css(styles.landingImgs)}
    />
    <Feature
      title="Collaborate with your team"
      description="Manage projects, deadlines, clients, and meetings with ease."
      imgSrc="/collaborators.svg"
      imgAlt="collaborators"
      imgStyle={css(styles.landingImgs)}
    />
  </section>
)

export default Features
