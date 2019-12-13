import {Meteor} from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'
import Notes, {activeNote} from '../../api/notes'

const withNote = withTracker(() => {
  const id = activeNote.get()
  if (!id) return 400

  const notesSub = Meteor.subscribe('notes')

  if (!notesSub.ready()) return {loading: true}

  const note = Notes.findOne({_id: id})
  if (!note) return {error: 404}

  return {
    note,
  }
})

export default withNote
