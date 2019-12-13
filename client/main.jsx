import React from 'react'
import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import Routes from '../imports/ui/router/Router'
import 'antd/dist/antd.css' // TODO: use modularized styles

Meteor.startup(() => {
  render(<Routes />, document.getElementById('react-target'))
})
