import React, {useState} from 'react'
import withUser from '../../hocs/withUser'
import {Skeleton, Card} from 'antd'
import Gravatar from 'react-gravatar'
import {Layout} from '../../components'
import EditableProfileInfo from '../../components/EditableProfileInfo'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import {card, info, gravatar} from './Profile.styles'

const Profile = ({user, username, email}) => {
  const [loading, setLoading] = useState(false)
  return user ? (
    console.log(user) || (
      <Layout>
        <Card title="Your Profile" style={card} loading={loading}>
          <Gravatar
            style={gravatar}
            default="monsterid"
            email={email}
          />
          <EditableProfileInfo
            style={info}
            onSave={'users.updateUserName'}
            value={username}
          />
          <EditableProfileInfo
            style={info}
            onSave={'users.updateEmail'}
            type="email"
            value={email}
          />
          <ChangePasswordForm />
        </Card>
      </Layout>
    )
  ) : (
    <p>loading...</p>
  )
}
export default withUser(Profile)
