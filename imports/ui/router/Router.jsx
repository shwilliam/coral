import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from '../pages/Home'
import FourOhFour from '../pages/FourOhFour'

const browserHistory = createBrowserHistory()

const Routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
)

export default Routes
