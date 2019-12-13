import React from 'react'
import Copyright from '../components/Copyright'
import {Button} from 'antd'
import {useHistory} from 'react-router'

const FourOhFour = () => {
  const history = useHistory()
  return (
    <>
      <h1>
        Ooops wrong url.{' '}
        <Button onClick={() => history.push('/')} type="primary">
          Go back
        </Button>
      </h1>
      <Copyright />
    </>
  )
}

export default FourOhFour
