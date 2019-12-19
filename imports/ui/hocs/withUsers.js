import {Meteor} from 'meteor/meteor'
import {withTracker} from 'meteor/react-meteor-data'

const withUsers = withTracker(() => {
  Meteor.subscribe('users')

  return {
    users: Meteor.users.find({}).fetch(),
  }
})

export default withUsers
