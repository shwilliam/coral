import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import {Accounts} from 'meteor/accounts-base'
import {ReactiveVar} from 'meteor/reactive-var'
import {check} from 'meteor/check'

const Notes = new Mongo.Collection('notes')

export const activeNote = new ReactiveVar()

if (Meteor.isServer) {
  Meteor.publish('notes', function notesPub() {
    return Notes.find({
      $or: [{author: this.userId}, {collaborators: this.userId}],
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
  'notes.edit'(id, content) {
    check(id, String)
    check(content, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const note = Notes.findOne(id)
    if (!note) throw new Meteor.Error('note-not-found')

    if (
      note.author !== this.userId &&
      note.collaborators &&
      !note.collaborators.includes(this.userId)
    )
      throw new Meteor.Error('not-authorized')

    Notes.update(id, {
      $set: {
        content,
      },
    })
  },
  'notes.remove'(id) {
    check(id, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const note = Notes.findOne(id)
    if (!note) throw new Meteor.Error('note-not-found')

    Notes.remove(id)
  },
  'notes.updateTitle'(id, title) {
    check(id, String)
    check(title, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const note = Notes.findOne(id)
    if (!note) throw new Meteor.Error('note-not-found')

    if (
      note.author !== this.userId &&
      note.collaborators &&
      !note.collaborators.includes(this.userId)
    )
      throw new Meteor.Error('not-authorized')

    Notes.update(id, {
      $set: {
        title,
      },
    })
  },
})

export default Notes
