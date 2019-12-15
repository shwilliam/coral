import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Route, Redirect} from 'react-router'

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <Route
      {...props}
      render={props =>
        Meteor.user() !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/welcome" />
        )
      }
    />
  )
}

export default ProtectedRoute
