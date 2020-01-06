import React from 'react'
import {useTheme} from '../../hooks'
import {Typography} from 'antd'
import {
  splashTextStyles,
  splashContainerStyles,
  splashContentContainerStyles,
  splashImageStyles,
} from './Splash.styles'

const Splash = ({children, ...props}) => {
  const [theme] = useTheme()

  return (
    <div style={splashContainerStyles} {...props}>
      <div style={splashContentContainerStyles}>
        <Typography.Title style={splashTextStyles[theme]}>
          Welcome
        </Typography.Title>
        <Typography.Paragraph style={splashTextStyles[theme]}>
          {children}
        </Typography.Paragraph>
      </div>
      <div style={splashImageStyles[theme]} />
    </div>
  )
}

export default Splash
