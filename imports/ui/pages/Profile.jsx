import React from 'react'
import withUser from '../hocs/withUser'
import {Descriptions} from 'antd'
import Gravatar from 'react-gravatar'
import {Layout} from '../components'
import EditableProfileInfo from '../components/EditableProfileInfo'
import ChangePasswordForm from '../components/ChangePasswordForm'

const Profile = ({user, username, email}) => {
  return user ? (
    console.log(user) || (
      <Layout>
        <Descriptions title="User Info">
          <Descriptions.Item label="Avatar">
            <Gravatar default="monsterid" email={email} />
          </Descriptions.Item>
          <Descriptions.Item label="User name">
            <EditableProfileInfo
              onSave={'users.updateUserName'}
              value={username}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            <EditableProfileInfo
              onSave={'users.updateEmail'}
              type="email"
              value={email}
            />
          </Descriptions.Item>
        </Descriptions>
        <ChangePasswordForm />
      </Layout>
    )
  ) : (
    <p>loading...</p>
  )
}
export default withUser(Profile)
