import {Meteor} from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'

const withUser = withTracker(() => ({
  user: Meteor.user(),
}))

export default withUser
