import React, {useEffect} from 'react'
import {Meteor} from 'meteor/meteor'
import {useParams, useHistory} from 'react-router'
import {withNote, withUser} from '../hocs'
import {activeNote} from '../../api/notes'

const Note = ({note, user}) => {
  const {username, id} = useParams()
  const history = useHistory()

  useEffect(() => {
    activeNote.set(id)
  }, [])

  useEffect(() => {
    if (!note) return

    Meteor.call('users.findUsername', note.author, (e, author) => {
      if (e) console.error('author not found')

      if (author !== username)
        window.history.pushState('Editing...', '', `/${author}/${id}`)
    })
  }, [note])

  console.log(note)

  return (
    <h1>
      hello {username} | {id}
    </h1>
  )
}

export default withUser(withNote(Note))
