import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import {Accounts} from 'meteor/accounts-base'

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
  'users.updateUserName'(username) {
    check(username, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const user = Meteor.users.findOne({_id: this.userId})
    if (!user) throw new Meteor.Error('not-found')

    Meteor.users.update({_id: Meteor.userId()}, {$set: {username}})
  },
  'users.updateEmail'(email) {
    check(email, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const user = Meteor.users.findOne({_id: this.userId})
    if (!user) throw new Meteor.Error('not-found')

    Meteor.users.update(
      {_id: Meteor.userId()},
      {$set: {emails: [{address: email}]}},
    )
  },
  'users.changePassword'(newPassword) {
    if (!Meteor.isServer) return
    check(newPassword, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const user = Meteor.users.findOne({_id: this.userId})
    if (!user) throw new Meteor.Error('not-found')

    Accounts.setPassword(this.userId, newPassword, {logout: false})
  },
})

Meteor.users.allow({
  update: function(userId, user) {
    return true
  },
})
