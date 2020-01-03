import React from 'react'
import {Router, Route, Switch, Redirect} from 'react-router'
const createBrowserHistory = require('history').createBrowserHistory
import Home from '../pages/Home'
import FourOhFour from '../pages/FourOhFour'
import Note from '../pages/Note'
import Profile from '../pages/Profile/Profile'
import Auth from '../pages/Auth'
import Welcome from '../pages/Welcome'
import ProtectedRoute from './ProtectedRoute'

const browserHistory = createBrowserHistory()

const Routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/get-started" component={Auth} />
      <ProtectedRoute exact path="/:username/:id" component={Note} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute component={FourOhFour} />
    </Switch>
  </Router>
)

export default Routes
