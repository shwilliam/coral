import React from 'react'
import {Router, Route, Switch} from 'react-router'
const createBrowserHistory = require('history').createBrowserHistory

import Home from '../pages/Home'
import FourOhFour from '../pages/FourOhFour'
import Note from '../pages/Note'
import Notes from '../pages/Notes'
import Profile from '../pages/Profile'
import Welcome from '../pages/Welcome'
import ProtectedRoute from './ProtectedRoute'

const browserHistory = createBrowserHistory()

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        {/* TODO: delete notes page */}
        <Route exact path="/welcome" component={Welcome} />
        <ProtectedRoute exact path="/notes" component={Notes} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute
          exact
          path="/:username/:id"
          component={Note}
        />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute component={FourOhFour} />
      </Switch>
    </Router>
  )
}

export default Routes
