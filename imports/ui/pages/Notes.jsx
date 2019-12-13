import React from 'react'
import {withNotes} from '../hocs'
import {Layout} from '../components'

const Notes = ({notes}) => (
  <Layout>
    {notes ? (
      <ul>
        {notes.map(({_id, title}) => (
          <li key={_id}>
            <a href={`/user/${_id}`}>{title}</a>
          </li>
        ))}
      </ul>
    ) : null}
  </Layout>
)

export default withNotes(Notes)
