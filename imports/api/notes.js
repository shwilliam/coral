import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
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
  'notes.share'(id, collaborators) {
    if (!Meteor.isServer) return

    check(id, String)
    check(collaborators, Array)

    const note = Notes.findOne(id)
    if (!note) throw new Meteor.Error('note-not-found')

    if (!this.userId || note.author !== this.userId)
      throw new Meteor.Error('not-authorized')

    Notes.update(id, {
      $set: {
        collaborators,
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
  'notes.removeCollaborator'(id) {
    if (!Meteor.isServer) return

    check(id, String)

    const note = Notes.findOne(id)
    if (!note) throw new Meteor.Error('note-not-found')

    if (
      note.collaborators &&
      !note.collaborators.includes(this.userId)
    )
      throw new Meteor.Error('not-authorized')

    Notes.update(id, {
      $set: {
        collaborators: note.collaborators.splice(
          note.collaborators.indexOf(id),
          1,
        ),
      },
    })
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
  'notes.favorite'(id) {
    check(id, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const note = Notes.findOne(id)
    if (!note) throw new Meteor.Error('note-not-found')

    if (
      note.author !== this.userId &&
      note.collaborators &&
      !note.collaborators.includes(this.userId)
    )
      throw new Meteor.Error('not-authorized')

    const favorites = Meteor.user().favorites || []

    if (favorites.includes(id))
      throw new Meteor.Error('already-favorite')

    Meteor.users.update(this.userId, {
      $set: {
        favorites: [...favorites, id],
      },
    })
  },
  'notes.unfavorite'(id) {
    check(id, String)

    if (!this.userId) throw new Meteor.Error('not-authorized')

    const note = Notes.findOne(id)
    if (!note) throw new Meteor.Error('note-not-found')

    if (
      note.author !== this.userId &&
      note.collaborators &&
      !note.collaborators.includes(this.userId)
    )
      throw new Meteor.Error('not-authorized')

    const favorites = Meteor.user().favorites || []

    if (!favorites.includes(id))
      throw new Meteor.Error('not-favorite')

    Meteor.users.update(this.userId, {
      $set: {
        favorites: favorites.splice(1, favorites.indexOf(id)),
      },
    })
  },
})

export default Notes
