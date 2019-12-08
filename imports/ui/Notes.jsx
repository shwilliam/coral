import React, {Component} from 'react'
import {withTracker} from 'meteor/react-meteor-data'
import Notes from '../api/notes'

class Info extends Component {
  render() {
    const notes = this.props.notes.map(note => this.makeNote(note))

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>{notes}</ul>
      </div>
    )
  }

  makeNote(note) {
    return <li key={note._id}>{note.title}</li>
  }
}

export default InfoContainer = withTracker(() => {
  return {
    notes: Notes.find().fetch(),
  }
})(Info)
