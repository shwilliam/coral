import React from 'react'
import {Layout} from 'antd'
const {Footer: AntFooter} = Layout

const footerStyles = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
}

const footerContent = {
  width: '60%',
  fontSize: '0.8rem',
  textAlign: 'center',
}

const Footer = () => (
  <AntFooter style={footerStyles}>
    <div style={footerContent}>
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

export default Footer
