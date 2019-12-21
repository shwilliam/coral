import {Meteor} from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'
import Notes from '../../api/notes'

const withNotes = withTracker(() => {
  Meteor.subscribe('notes')

  const user = Meteor.user()

  return {
    notes: Notes.find({author: Meteor.userId()}).fetch(),
    sharedNotes: Notes.find({collaborators: Meteor.userId()}).fetch(),
    favoriteNotes:
      user && user.favorites
        ? Notes.find({
            _id: {$in: user.favorites},
          }).fetch()
        : [],
  }
})

export default withNotes
