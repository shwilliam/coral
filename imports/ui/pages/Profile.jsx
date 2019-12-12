import React from 'react'
import { Descriptions } from 'antd'
import withUser from '../hocs/withUser'

const Profile = ({ user }) =>
  user ? (
    <Descriptions title='User Info'>
      <Descriptions.Item label='UserName'>[username]</Descriptions.Item>
      <Descriptions.Item label='Email'>
        {user.emails[0] && user.emails[0].address}
      </Descriptions.Item>
    </Descriptions>
  ) : (
    <p>loading</p>
  )

export default withUser(Profile)
