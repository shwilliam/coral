import React from 'react'
import {List, Typography} from 'antd'
const {Text} = Typography

const ProfileTab = ({noteType, style}) => {
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
              style={style}
              key={note._id}
              itemLayout="horizontal"
            >
              <List.Item>
                <List.Item.Meta
                  title={note.title}
                  description={content}
                />
              </List.Item>
              <List.Item>
                <Text type="secondary">{date}</Text>
              </List.Item>
            </List>
          )
        })}
    </>
  )
}

export default ProfileTab
