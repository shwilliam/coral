import React from 'react'
import {useHistory} from 'react-router'
import {css} from 'aphrodite'
import {withUser, withUsers, withNotes} from '../../hocs'
import {useTheme} from '../../hooks'
import Gravatar from 'react-gravatar'
import {Icon, List, Card, Typography, Tabs, Radio} from 'antd'
const {Text} = Typography
const {TabPane} = Tabs
import {Layout} from '../../components'
import EditableProfileInfo from '../../components/EditableProfileInfo'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import ProfileTab from '../../components/ProfileTab'
import styles from './Profile.styles'

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
  const history = useHistory()
  const [theme, setTheme] = useTheme()

  return user ? (
    <Layout>
      <Icon
        className={css(styles.backButton)}
        onClick={() => history.push('/')}
        type="arrow-left"
      />
      <main className={css(styles.container)}>
        <Card className={css(styles.card)}>
          <Gravatar
            className={css(styles.gravatar)}
            default="monsterid"
            email={email}
          />
          <EditableProfileInfo
            className={css(styles.info)}
            iconType="user"
            onSave={'users.updateUserName'}
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
            <Radio.Group
              defaultValue={theme}
              buttonStyle="solid"
              size="small"
              style={{whiteSpace: 'nowrap'}}
              onChange={e => setTheme(e.target.value)}
            >
              <Radio.Button value="dark">Dark</Radio.Button>
              <Radio.Button value="light">Light</Radio.Button>
              <Radio.Button value="solarized">Solarized</Radio.Button>
            </Radio.Group>
          </section>
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
  ) : null
}
export default withUser(withUsers(withNotes(Profile)))
