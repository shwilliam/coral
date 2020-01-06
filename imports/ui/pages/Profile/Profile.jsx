import React from 'react'
import {useHistory} from 'react-router'
import {css} from 'aphrodite'
import {withUser, withUsers, withNotes} from '../../hocs'
import {useTheme} from '../../hooks'
import {Icon, List, Card, Typography, Tabs} from 'antd'
const {Text} = Typography
const {TabPane} = Tabs
import Gravatar from 'react-gravatar'
import {Layout, ThemeToggle} from '../../components'
import EditableText from '../../components/EditableText'
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
  const [theme] = useTheme()
  const history = useHistory()

  return user ? (
    <Layout>
      <Icon
        className={css(styles.backButton)}
        onClick={() => history.push('/')}
        type="arrow-left"
      />
      <main className={css(styles.container)}>
        <Card
          className={
            theme === 'dark'
              ? css([styles.card, styles.cardDark])
              : theme === 'solarized'
              ? css([styles.card, styles.cardSolarized])
              : css(styles.card)
          }
        >
          <Gravatar
            className={css(styles.gravatar)}
            default="monsterid"
            email={email}
          />
          <EditableText
            className={css(styles.info)}
            onSave={'users.updateUserName'}
            value={profileUsername}
          />
          <EditableText
            className={css(styles.info)}
            onSave={'users.updateEmail'}
            type="email"
            value={email}
          />
          <ChangePasswordForm className={css(styles.action)} />
          <ThemeToggle className={css(styles.action)} />
          <section className={css(styles.dashed)}>
            <Text
              strong
              className={
                theme === 'dark' ? css(styles.textDarkBg) : {}
              }
            >
              Your collaborators <Icon type="team" />
            </Text>
            {users
              .filter(({_id}) => !(author === _id))
              .map(({_id, username}) =>
                username === profileUsername ? null : (
                  <List.Item
                    key={_id}
                    className={
                      theme === 'dark' ? css(styles.textDarkBg) : {}
                    }
                  >
                    {username}
                  </List.Item>
                ),
              )}
          </section>
          <section className={css(styles.dashed)}>
            <Text
              strong
              className={
                theme === 'dark' ? css(styles.textDarkBg) : {}
              }
            >
              Your favorite notes <Icon type="star" />
            </Text>
            {favoriteNotes.map(({_id, title}) => (
              <List.Item
                key={_id}
                className={
                  theme === 'dark' ? css(styles.textDarkBg) : {}
                }
              >
                {title}
              </List.Item>
            ))}
          </section>
        </Card>
        <Card
          className={
            theme === 'dark'
              ? css([
                  styles.center,
                  styles.card,
                  styles.cardDark,
                  styles.tabCard,
                ])
              : theme === 'solarized'
              ? css([
                  styles.card,
                  styles.cardSolarized,
                  styles.tabCard,
                ])
              : css([styles.card, styles.tabCard])
          }
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Your notes" key="1">
              {notes.length !== 0 ? (
                <ProfileTab
                  style={css(styles.notesList)}
                  noteType={notes}
                />
              ) : (
                <Text
                  className={
                    theme === 'dark' ? css(styles.textDarkBg) : {}
                  }
                >
                  No notes
                </Text>
              )}
            </TabPane>
            <TabPane tab="Shared notes" key="2">
              {sharedNotes.length !== 0 ? (
                <ProfileTab
                  style={css(styles.notesList)}
                  noteType={sharedNotes}
                />
              ) : (
                <Text
                  className={
                    theme === 'dark' ? css(styles.textDarkBg) : {}
                  }
                >
                  No shared notes
                </Text>
              )}
            </TabPane>
          </Tabs>
        </Card>
      </main>
    </Layout>
  ) : null
}
export default withUser(withUsers(withNotes(Profile)))
