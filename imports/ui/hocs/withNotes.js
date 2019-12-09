import {withTracker} from 'meteor/react-meteor-data'
import Notes from '../../api/notes'

const withNotes = withTracker(() => ({
  notes: Notes.find().fetch(),
}))

export default withNotes
