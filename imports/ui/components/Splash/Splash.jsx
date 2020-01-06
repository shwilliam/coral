import React, {useState} from 'react'
import Joyride from 'react-joyride'
import {useTheme} from '../../hooks'
import {Typography, Button} from 'antd'
import {
  splashTextStyles,
  splashContainerStyles,
  splashContentContainerStyles,
  splashImageStyles,
} from './Splash.styles'

const Splash = ({children, ...props}) => {
  const [theme] = useTheme()
  const [run, setRun] = useState(true)
  const [steps, setSteps] = useState([
    {
      target: '.anticon.anticon-plus-circle',
      content: 'Use this to create a new note!',
    },
    {
      target: '.anticon.anticon-star',
      content: 'This is where all your favorite notes will appear.',
    },
    {
      target: '.anticon.anticon-edit',
      content: 'This is where all your notes will appear.',
    },
    {
      target: '.anticon.anticon-team',
      content: 'This is where all your shared notes will appear.',
    },
    {
      target: '.anticon.anticon-setting',
      content:
        'This is where you can access your profile info and logout.',
    },
  ])

  return (
    <div style={splashContainerStyles} {...props}>
      <div style={splashContentContainerStyles}>
        <Typography.Title style={splashTextStyles[theme]}>
          Welcome
        </Typography.Title>
        <Typography.Paragraph style={splashTextStyles[theme]}>
          {children}
        </Typography.Paragraph>
        <Joyride
          steps={steps}
          continuous={true}
          showProgress={true}
          showSkipButton={true}
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
      </div>
      <div style={splashImageStyles[theme]} />
    </div>
  )
}

export default Splash
