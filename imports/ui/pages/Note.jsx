import React, {useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import {useParams, useHistory} from 'react-router'
import {Layout} from 'antd'
import {withNote, withUser} from '../hocs'
import SideMenu from '../components/SideMenu'
import NoteEditor from '../components/NoteEditor'
import Copyright from '../components/Copyright'
import {activeNote} from '../../api/notes'

const {Content} = Layout

const Note = ({note, user}) => {
  const {username, id} = useParams()
  const history = useHistory()

  // TODO: refactor to custom hook
  useEffect(() => {
    if (!note) return

    Meteor.call('users.findUsername', note.author, (e, author) => {
      if (e) console.error('author not found')

      if (author !== username)
        window &&
          window.history.pushState(
            'Editing...',
            '',
            `/${author}/${id}`,
          )
    })
  }, [note])

  useEffect(() => {
    activeNote.set(id)
  }, [])

  return (
    <Layout>
      <SideMenu />
      {user ? (
        <Layout>
          <Content>
            <NoteEditor />
          </Content>
          <Copyright />
        </Layout>
      ) : null}
    </Layout>
  )
}

export default withUser(withNote(Note))
