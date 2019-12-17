import React from 'react'
import withUser from '../hocs/withUser'
import {Descriptions} from 'antd'
import Gravatar from 'react-gravatar'
import {Layout} from '../components'
import ProfileUpdate from '../components/ProfileUpdate'

const Profile = ({user, username, email}) => {
  return user ? (
    <Layout>
      <Descriptions title="User Info">
        <Descriptions.Item label="Avatar">
          <Gravatar default="monsterid" email={email} />
        </Descriptions.Item>
        <Descriptions.Item label="User Name">
          {username}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{email}</Descriptions.Item>
      </Descriptions>
      <ProfileUpdate />
    </Layout>
  ) : (
    <p>loading...</p>
  )
}
export default withUser(Profile)
