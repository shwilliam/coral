import React from 'react'
import {Button} from 'antd'
import {css} from 'aphrodite'
import styles from './Landing.styles'
import {useHistory} from 'react-router'

const Header = () => {
  const history = useHistory()

  return (
    <header>
      <nav>
        <ul className={css(styles.navBar)}>
          <li>coral</li>
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
