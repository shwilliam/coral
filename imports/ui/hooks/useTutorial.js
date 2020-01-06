import {useState} from 'react'

const useTutorial = () => {
  const [steps] = useState([
    {
      target: 'h1.ant-typography',
      content:
        'Welcome to coral! This short walkthrough will highlight some of the main features and help you navigate the app.',
    },
    {
      target: '.anticon.anticon-plus-circle',
      content:
        "The 'New Note' button allows you to create and open a new note.",
    },
    {
      target: '.anticon.anticon-edit',
      content: 'When created, all your notes can be found here.',
    },
    {
      target: '.anticon.anticon-star',
      content:
        "Notes marked as 'favorites' can be easily accessed here.",
    },
    {
      target: '.anticon.anticon-team',
      content:
        'If another user adds you as a collaborator, the shared note will be available to you here.',
    },
    {
      target: '.anticon.anticon-setting',
      content:
        "Under the settings tab you will find a link to the 'Profile' page where you can access, update or change your profile information and change the app's theme.",
    },
    {
      target: 'h1.ant-typography',
      content:
        "That's about it! We hope coral helps you organize your ideas and get things done.",
    },
  ])

  return steps
}

export default useTutorial
