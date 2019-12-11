import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import {Accounts} from 'meteor/accounts-base'
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
  'notes.share'(id, email) {
    // prevent `Accounts.findUserByEmail` from running on client
    if (!Meteor.isServer) return

    check(id, String)
    check(email, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const note = Notes.findOne(id)
    if (!note) throw new Meteor.Error('note-not-found')

    const collaborator = Accounts.findUserByEmail(email)
    if (!collaborator) throw new Meteor.Error('user-not-found')

    if (
      (note.collaborators &&
        note.collaborators.includes(collaborator._id)) ||
      note.author === collaborator._id
    )
      throw new Meteor.Error('already-collaborator')

    Notes.update(id, {
      $set: {
        collaborators: note.collaborators
          ? [...note.collaborators, collaborator._id]
          : [collaborator._id],
      },
    })
  },
})

export default Notes
