import {useState} from 'react'

const useTutorial = () => {
  const [steps] = useState([
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

  return steps
}

export default useTutorial
