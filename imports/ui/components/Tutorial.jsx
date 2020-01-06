import React from 'react'
import Joyride from 'react-joyride'
import {useTutorial} from '../hooks'
import {withNotes} from '../hocs'

const Tutorial = ({notes, ...props}) => {
  const steps = useTutorial()

  if (notes && notes.length !== 0) return null
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

export default withNotes(Tutorial)
