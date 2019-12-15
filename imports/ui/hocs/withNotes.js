import {Meteor} from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'
import Notes from '../../api/notes'

const withNotes = withTracker(() => {
  Meteor.subscribe('notes')

  return {
    notes: Notes.find({author: Meteor.userId()}).fetch(),
    sharedNotes: Notes.find({collaborators: Meteor.userId()}).fetch(),
  }
})

export default withNotes
