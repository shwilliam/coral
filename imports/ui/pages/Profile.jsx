import React from 'react'
import withUser from '../hocs/withUser'
import {Descriptions} from 'antd'
import Gravatar from 'react-gravatar'
import Footer from '../components/Footer'

const Profile = ({user, username, email}) =>
  user ? (
    <>
      <Descriptions title="User Info">
        <Descriptions.Item label="User Name">
          <Gravatar default="monsterid" email={email} />
        </Descriptions.Item>
        <Descriptions.Item label="User Name">
          {username}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{email}</Descriptions.Item>
      </Descriptions>
      <Footer />
    </>
  ) : (
    <p>loading...</p>
  )

export default withUser(Profile)
