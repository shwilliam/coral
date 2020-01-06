import React from 'react'
import Joyride from 'react-joyride'
import {useTutorial} from '../hooks'

const Tutorial = props => {
  const steps = useTutorial()

  return (
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
      {...props}
    />
  )
}

export default Tutorial
