import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Button} from 'antd'
import {withUser} from '../hocs'

const FavoriteNoteButton = ({user, noteId, ...props}) => {
  const isFavorite =
    user && user.favorites && user.favorites.includes(noteId)
  const toggleFavorite = () =>
    isFavorite
      ? Meteor.call('notes.unfavorite', noteId)
      : Meteor.call('notes.favorite', noteId)

  return (
    <Button onClick={toggleFavorite} {...props}>
      {isFavorite ? 'Remove from favorites' : 'Mark as favorite'}
    </Button>
  )
}

export default withUser(FavoriteNoteButton)
