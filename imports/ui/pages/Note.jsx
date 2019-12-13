import React, {useEffect} from 'react'
import {useParams} from 'react-router'
import {withUser, withNote} from '../hocs'
import {activeNote} from '../../api/notes'

const Note = ({user, note}) => {
  const {username, id} = useParams()

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
