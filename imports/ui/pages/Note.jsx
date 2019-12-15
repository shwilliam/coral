import React, {useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import {useParams} from 'react-router'
import {withNote, withUser} from '../hocs'
import {activeNote} from '../../api/notes'
import {Layout, NoteEditor} from '../components'

const Note = ({note, user}) => {
  const {username, id} = useParams()

  // TODO: refactor to custom hook
  useEffect(() => {
    if (!note) return

    Meteor.call('users.findUsername', note.author, (_, author) => {
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

  return <Layout>{user ? <NoteEditor /> : null}</Layout>
}

export default withUser(withNote(Note))
