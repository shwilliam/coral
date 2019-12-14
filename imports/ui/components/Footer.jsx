import React from 'react'
import {Layout} from 'antd'
const {Footer: AntFooter} = Layout

const Footer = () => (
  <AntFooter style={{textAlign: 'center'}}>
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
      EdinK1
    </a>{' '}
    and{' '}
    <a
      href="https://github.com/robhhr/"
      target="_blank"
      rel="noopener"
    >
      robhhr
    </a>
  </AntFooter>
)

export default Footer
