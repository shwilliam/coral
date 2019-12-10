import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import {check} from 'meteor/check'

const Notes = new Mongo.Collection('notes')

if (Meteor.isServer) {
  Meteor.publish('notes', function notesPub() {
    return Notes.find({
      author: this.userId,
    })
  })
}

Meteor.methods({
  'notes.insert'(title) {
    check(title, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    Notes.insert({
      title,
      createdAt: new Date(),
      author: this.userId,
    })
  },
})

export default Notes
