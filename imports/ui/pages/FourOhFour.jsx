import React from 'react'
import Copyright from '../components/Copyright'
import { Link } from 'react-router'
const FourOhFour = () => {
  return (
    <div>
      <h1>Ooops wrong url. You might wanna go <Link to="/">back</Link></h1>
      <Copyright />
    </div>
  )
}

export default FourOhFour
