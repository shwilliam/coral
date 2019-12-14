import React from 'react'
import Footer from '../components/Footer'
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
      <Footer />
    </>
  )
}

export default FourOhFour
