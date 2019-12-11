import {Meteor} from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'
import Notes from '../../api/notes'

const withNotes = withTracker(() => {
  Meteor.subscribe('notes')

  return {
    notes: Notes.find().fetch(),
  }
})

export default withNotes
