import React from 'react'
import {Router, Route, Switch, Redirect} from 'react-router'
const createBrowserHistory = require('history').createBrowserHistory
import {useHistory} from 'react-router'
import Home from '../pages/Home'
import FourOhFour from '../pages/FourOhFour'
import Note from '../pages/Note'
import Profile from '../pages/Profile'
import Welcome from '../pages/Welcome'
import ProtectedRoute from './ProtectedRoute'
import {Meteor} from 'meteor/meteor'

const browserHistory = createBrowserHistory()

const Routes = ({...props}) => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/welcome" component={Welcome}>
          {Meteor.loggingIn() === true ? (
            <Redirect to="/notes" />
          ) : null}
        </Route>
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
