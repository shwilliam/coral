import React, {useState} from 'react'
import withUser from '../../hocs/withUser'
import {Meteor} from 'meteor/meteor'
import {withUsers, withNotes} from '../../hocs'
import {Skeleton, Icon, List, Card, Typography, Tabs} from 'antd'
const {Title, Text} = Typography
const {TabPane} = Tabs
import Gravatar from 'react-gravatar'
import {Layout} from '../../components'
import EditableProfileInfo from '../../components/EditableProfileInfo'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import {
  card,
  info,
  gravatar,
  dashed,
  notesList,
} from './Profile.styles'

const Profile = ({
  users,
  user,
  username: profileUsername,
  email,
  notes,
  favoriteNotes,
  author,
}) => {
  const [loading, setLoading] = useState(false)
  console.log('notes', notes)
  console.log('users', users)
  return user ? (
    console.log(user) || (
      <Layout>
        <Card style={card} loading={loading}>
          <Gravatar
            style={gravatar}
            default="monsterid"
            email={email}
          />
          <EditableProfileInfo
            iconType="user"
            style={info}
            onSave={'users.updateUserName'}
            value={profileUsername}
          />
          <EditableProfileInfo
            iconType="mail"
            style={info}
            onSave={'users.updateEmail'}
            type="email"
            value={email}
          />
          <ChangePasswordForm />
          <section style={dashed}>
            <Text strong>
              Your collaborators <Icon type="team" />
            </Text>
            {users
              .filter(({_id}) => !(author === _id))
              .map(({_id, username}) =>
                username === profileUsername ? null : (
                  <List.Item key={_id}>{username}</List.Item>
                ),
              )}
          </section>
          <section style={dashed}>
            <Text strong>
              Your favorite notes <Icon type="star" />
            </Text>
            {favoriteNotes.map(({_id, title}) => (
              <List.Item key={_id}>{title}</List.Item>
            ))}
          </section>
        </Card>
        <Card style={card}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Your notes" key="1">
              {notes &&
                notes.length &&
                notes.map(note => {
                  const content = note.content
                    ? note.content.replace(/(<([^>]+)>)/gi, '')
                    : 'no content provided'
                  const date = note.createdAt.toDateString()
                  return (
                    <List
                      style={notesList}
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
            </TabPane>
            <TabPane tab="Shared notes" key="2">
              Shared Notes
            </TabPane>
          </Tabs>
        </Card>
      </Layout>
    )
  ) : (
    <p>loading...</p>
  )
}
export default withUser(withUsers(withNotes(Profile)))
