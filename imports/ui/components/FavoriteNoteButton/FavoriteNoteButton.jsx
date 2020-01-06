import React from 'react'
import {Meteor} from 'meteor/meteor'
import {withUser} from '../../hocs'
import {useTheme} from '../../hooks'
import {Button, Icon} from 'antd'
import {buttonStyles} from './FavoriteNoteButton.styles'

const FavoriteButton = () => {
  return (
    <Icon type="star" theme="filled" style={{color: '#1890ff'}} />
  )
}

const NotFavoriteButton = () => {
  return <Icon type="star" />
}

const FavoriteNoteButton = ({
  user,
  noteId,
  type = 'default',
  ...props
}) => {
  const [theme] = useTheme()
  const isFavorite =
    user && user.favorites && user.favorites.includes(noteId)
  const toggleFavorite = () =>
    isFavorite
      ? Meteor.call('notes.unfavorite', noteId)
      : Meteor.call('notes.favorite', noteId)

  return (
    <Button
      onClick={toggleFavorite}
      type={type}
      style={buttonStyles[theme]}
      {...props}
    >
      {isFavorite ? <FavoriteButton /> : <NotFavoriteButton />}
    </Button>
  )
}

export default withUser(FavoriteNoteButton)
