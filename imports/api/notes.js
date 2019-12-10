import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import {check} from 'meteor/check'

const Notes = new Mongo.Collection('notes')

Meteor.methods({
  'notes.insert'(title) {
    check(title, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    Notes.insert({
      title,
      createdAt: new Date(),
      author: this.userId,
      // username: Meteor.users.findOne(this.userId).username,
    })
  },
})

export default Notes
