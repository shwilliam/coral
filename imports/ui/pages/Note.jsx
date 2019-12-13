import React, {useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import {useParams, useHistory} from 'react-router'
import {withNote, withUser} from '../hocs'
import {activeNote} from '../../api/notes'

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

  console.log(note)

  return (
    <h1>
      hello {username} | {id}
    </h1>
  )
}

export default withUser(withNote(Note))
