import { withTracker } from 'meteor/react-meteor-data'
import Notes from '../../api/notes'

const withNote = id => withTracker(() => ({
  notes: Notes.findOne(id).fetch()
})
)

export default withNote