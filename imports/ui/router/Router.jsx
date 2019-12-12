import React from 'react'
import { Router, Route, Switch } from 'react-router'
const createBrowserHistory = require('history').createBrowserHistory
import Home from '../pages/Home'
import FourOhFour from '../pages/FourOhFour'
import Note from '../pages/Note'

const browserHistory = createBrowserHistory()

const Routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/:username/:id' component={Note} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
)

export default Routes
