import React from 'react'
import { Descriptions } from 'antd'
import withUser from '../hocs/withUser'

const Profile = ({ user, email }) =>
  user ? (
    <Descriptions title='User Info'>
      <Descriptions.Item label='UserName'>[username]</Descriptions.Item>
      <Descriptions.Item label='Email'>{email}</Descriptions.Item>
    </Descriptions>
  ) : (
    <p>loading</p>
  )

export default withUser(Profile)
