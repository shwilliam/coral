import React from 'react'
import {css} from 'aphrodite'
import styles from './Landing.styles'
import Developer from './Developer'

const Developers = () => (
  <section className={css(styles.container)}>
    <h1>The masterminds behind it</h1>
    <p>Meet the talented team that built coral.</p>
    <section className={css(styles.features)}>
      <Developer
        developerStyles={css(styles.feature)}
        imgStyle={css([styles.landingImgs, styles.devImgs])}
        imgSrc="/shwilliam.png"
        name="William Lindvall"
        linkStyles={css(styles.devLinks)}
        githubLink="https://github.com/shwilliam"
        websiteLink="https://shwilliam.com"
      />
      <Developer
        developerStyles={css(styles.feature)}
        imgStyle={css([styles.landingImgs, styles.devImgs])}
        imgSrc="/edin.png"
        name="Edin Kaymakqi"
        linkStyles={css(styles.devLinks)}
        githubLink="https://github.com/EdinK1"
        websiteLink="https://edin.rocks"
      />
      <Developer
        developerStyles={css(styles.feature)}
        imgStyle={css([styles.landingImgs, styles.devImgs])}
        imgSrc="/robhhr.png"
        name="Roberto Hernandez"
        linkStyles={css(styles.devLinks)}
        githubLink="https://github.com/robhhr"
        websiteLink="https://robhhr.com"
      />
    </section>
  </section>
)

export default Developers
