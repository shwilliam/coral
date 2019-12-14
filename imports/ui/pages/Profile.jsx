import React from 'react'
import {Descriptions} from 'antd'
import withUser from '../hocs/withUser'
import Footer from '../components/Footer'

const Profile = ({user, email}) =>
  user ? (
    <>
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">
          [username]
        </Descriptions.Item>
        <Descriptions.Item label="Email">{email}</Descriptions.Item>
      </Descriptions>
      <Footer />
    </>
  ) : (
    <p>loading...</p>
  )

export default withUser(Profile)
