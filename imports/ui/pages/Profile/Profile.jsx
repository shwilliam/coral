import React, {useState} from 'react'
import withUser from '../../hocs/withUser'
import {Meteor} from 'meteor/meteor'
import {withUsers, withNotes} from '../../hocs'
import {Skeleton, Icon, List, Card, Typography} from 'antd'
const {Text} = Typography
import Gravatar from 'react-gravatar'
import {Layout} from '../../components'
import EditableProfileInfo from '../../components/EditableProfileInfo'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import {card, info, gravatar, dashed} from './Profile.styles'

const Profile = ({
  user,
  users,
  author,
  username: profileUsername,
  favoriteNotes,
  email,
}) => {
  const [loading, setLoading] = useState(false)
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
            <Text strong>Your collaborators</Text>
            {users
              .filter(({_id}) => !(author === _id))
              .map(({_id, username}) => (
                <List.Item key={_id}>
                  {username === profileUsername ? null : (
                    <>
                      <Icon
                        style={{paddingRight: '0.5rem'}}
                        type="team"
                      />
                      {username}
                    </>
                  )}
                </List.Item>
              ))}
          </section>
          <section style={dashed}>
            <Text strong>Your favorite notes</Text>
            {favoriteNotes.map(({_id, title}) => (
              <List.Item key={_id}>
                <Icon style={{paddingRight: '0.5rem'}} type="star" />
                {title}
              </List.Item>
            ))}
          </section>
        </Card>
      </Layout>
    )
  ) : (
    <p>loading...</p>
  )
}
export default withUser(withUsers(withNotes(Profile)))
