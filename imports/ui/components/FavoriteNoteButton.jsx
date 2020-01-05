import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Button, Icon} from 'antd'
import {withUser} from '../hocs'

const FavoriteButton = () => {
  return <Icon type="star" theme="twoTone" />
}

const noFavoriteButton = () => {
  return <Icon type="star" />
}

const FavoriteNoteButton = ({user, noteId, ...props}) => {
  const isFavorite =
    user && user.favorites && user.favorites.includes(noteId)
  const toggleFavorite = () =>
    isFavorite
      ? Meteor.call('notes.unfavorite', noteId)
      : Meteor.call('notes.favorite', noteId)

  return (
    <Button onClick={toggleFavorite} {...props}>
      {isFavorite ? (
        <Icon type="star" theme="filled" style={{color: '#1890ff'}} />
      ) : (
        <Icon type="star" />
      )}
    </Button>
  )
}

export default withUser(FavoriteNoteButton)
