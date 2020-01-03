import React from 'react'
import {Button} from 'antd'
import {css} from 'aphrodite'
import styles from './LandingHeader.styles'

const LandingHeader = () => (
  <header>
    <nav>
      <ul className={css(styles.navBar)}>
        <li>coral</li>
        <li>
          <Button type="primary">Get Started</Button>
        </li>
      </ul>
    </nav>
  </header>
)

export default LandingHeader
