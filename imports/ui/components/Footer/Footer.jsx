import React from 'react'
import {Layout} from 'antd'
import {useTheme} from '../../hooks'
const {Footer: AntFooter} = Layout
import {
  footerDarkStyles,
  footerLightStyles,
  footerContentStyles,
} from './Footer.styles'

const Footer = () => {
  const [theme] = useTheme()

  return (
    <AntFooter
      style={theme === 'light' ? footerLightStyles : footerDarkStyles}
    >
      <div style={footerContentStyles}>
        Coral ©2019, made with ❤️ by{' '}
        <a
          href="https://github.com/shwilliam/"
          target="_blank"
          rel="noopener"
        >
          @shwilliam
        </a>
        ,{' '}
        <a
          href="https://github.com/EdinK1/"
          target="_blank"
          rel="noopener"
        >
          @EdinK1
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/robhhr/"
          target="_blank"
          rel="noopener"
        >
          @robhhr
        </a>
      </div>
    </AntFooter>
  )
}

export default Footer
