import React from 'react'
import { useParams } from 'react-router'
import withUser from '../hocs/withUser'
import NoteTemplate from '../components/NoteTemplate'

const Note = ({ user }) => {
  let { username, id } = useParams()
  return (
    <h1>
      {/* hello {username} | {id} */}
      <NoteTemplate />

    </h1>
  )
}

export default withUser(Note)
