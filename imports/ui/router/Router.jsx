import React from 'react'
import {Router, Route, Switch} from 'react-router'
const createBrowserHistory = require('history').createBrowserHistory

import Home from '../pages/Home'
import FourOhFour from '../pages/FourOhFour'
import Note from '../pages/Note'
import Notes from '../pages/Notes'
import Profile from '../pages/Profile'

const browserHistory = createBrowserHistory()

const Routes = () => (
  <Router history={browserHistory}>
    <Switch>
      {/* TODO: delete notes page */}
      <Route exact path="/notes" component={Notes} />
      <Route exact path="/" component={Home} />
      <Route exact path="/:username/:id" component={Note} />
      <Route exact path="/profile" component={Profile} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
)

export default Routes
