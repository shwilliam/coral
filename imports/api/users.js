import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

if (Meteor.isServer) {
  Meteor.publish('users', function() {
    return Meteor.users.find({})
  })
}

Meteor.methods({
  'users.findUsername'(id) {
    check(id, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const user = Meteor.users.findOne({_id: id})
    if (!user) throw new Meteor.Error('not-found')

    return user.username
  },
})
