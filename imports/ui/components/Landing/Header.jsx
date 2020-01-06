import React from 'react'
import {Button} from 'antd'
import {css} from 'aphrodite'
import styles from './Landing.styles'
import {useHistory} from 'react-router'
import Logo from '../Logo'

const Header = () => {
  const history = useHistory()

  return (
    <header className={css(styles.container)}>
      <nav>
        <ul className={css(styles.navBar)}>
          <div className={css(styles.logo)}>
            <Logo />
          </div>
          <li>
            <Button
              onClick={() => history.push('/get-started')}
              type="primary"
            >
              Get Started
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
