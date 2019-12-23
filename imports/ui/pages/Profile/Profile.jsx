import React, {useState} from 'react'
import withUser from '../../hocs/withUser'
import {withUsers, withNotes} from '../../hocs'
import {css} from 'aphrodite'
import {Skeleton, Icon, List, Card, Typography, Tabs} from 'antd'
const {Title, Text} = Typography
const {TabPane} = Tabs
import Gravatar from 'react-gravatar'
import {Layout} from '../../components'
import EditableProfileInfo from '../../components/EditableProfileInfo'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import {useHistory} from 'react-router'
import ProfileTab from '../../components/ProfileTab'
import styles from '../Profile/Profile.styles'

const Profile = ({
  users,
  user,
  username: profileUsername,
  email,
  notes,
  favoriteNotes,
  sharedNotes,
  author,
}) => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  return user ? (
    <Layout>
      <Icon
        className={css(styles.backButton)}
        onClick={() => history.push('/')}
        type="arrow-left"
      />
      <main className={css(styles.container)}>
        <Card className={css(styles.card)} loading={loading}>
          <Gravatar
            className={css(styles.gravatar)}
            default="monsterid"
            email={email}
          />
          <EditableProfileInfo
            className={css(styles.info)}
            iconType="user"
            onSave={'users.updateUserName'}
            value={profileUsername}
          />
          <EditableProfileInfo
            className={css(styles.info)}
            iconType="mail"
            onSave={'users.updateEmail'}
            type="email"
            value={email}
          />
          <ChangePasswordForm />
          <section className={css(styles.dashed)}>
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
          <section className={css(styles.dashed)}>
            <Text strong>
              Your favorite notes <Icon type="star" />
            </Text>
            {favoriteNotes.map(({_id, title}) => (
              <List.Item key={_id}>{title}</List.Item>
            ))}
          </section>
        </Card>
        <Card className={css(styles.card, styles.tabCard)}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Your notes" key="1">
              <ProfileTab
                style={css(styles.notesList)}
                noteType={notes}
              />
            </TabPane>
            <TabPane tab="Shared notes" key="2">
              <ProfileTab
                style={css(styles.notesList)}
                noteType={sharedNotes}
              />
            </TabPane>
          </Tabs>
        </Card>
      </main>
    </Layout>
  ) : (
    <p>loading...</p>
  )
}
export default withUser(withUsers(withNotes(Profile)))
