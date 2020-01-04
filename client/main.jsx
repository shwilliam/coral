import React from 'react'
import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import App from '../imports/ui/App'

// ensure Meteor methods are available
import * as _ from '../imports/api/users'
import * as __ from '../imports/api/notes'

import 'antd/dist/antd.css' // TODO: use modularized styles

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'))
})
