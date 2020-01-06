import React from 'react'
import {useTheme} from '../../hooks'
import {List, Typography} from 'antd'
const {Text} = Typography
import {textDarkBg} from './ProfileTab.styles'

const ProfileTab = ({noteType, style, ...props}) => {
  const [theme] = useTheme()

  return (
    <>
      {noteType &&
        noteType.length &&
        noteType.map(note => {
          const content = note.content
            ? note.content.replace(/(<([^>]+)>)/gi, '')
            : 'no content provided'
          const date = note.createdAt.toDateString()
          return (
            <List
              className={style}
              key={note._id}
              itemLayout="horizontal"
              {...props}
            >
              <List.Item>
                <List.Item.Meta
                  title={note.title}
                  description={content}
                />
              </List.Item>
              <List.Item>
                <Text
                  type="secondary"
                  style={theme === 'dark' ? textDarkBg : {}}
                >
                  {date}
                </Text>
              </List.Item>
            </List>
          )
        })}
    </>
  )
}

export default ProfileTab
