import {Meteor} from 'meteor/meteor'
import Notes from '/imports/api/notes'

// ensure Meteor methods are available
import * as _ from '../imports/api/users'
import * as __ from '../imports/api/notes'

function insertNote(title, content) {
  Notes.insert({title, content, createdAt: new Date()})
}

Meteor.startup(() => {
  // if no notes, add dummy data
  if (Notes.find().count() === 0) {
    insertNote('My first note', 'bla bla')

    insertNote('My second note', 'bla bla')

    insertNote('My third note', 'bla bla')
  }
})
