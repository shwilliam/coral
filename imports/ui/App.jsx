import React from 'react'
import {ThemeContextProvider} from './context'
import Router from './router'

const App = () => (
  <ThemeContextProvider>
    <Router />
  </ThemeContextProvider>
)

export default App
