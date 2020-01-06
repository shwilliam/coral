import React from 'react'
import {Radio} from 'antd'
import {useTheme} from '../hooks'

const ThemeToggle = props => {
  const [theme, setTheme] = useTheme()

  return (
    <Radio.Group
      defaultValue={theme}
      buttonStyle="solid"
      size="medium"
      style={{whiteSpace: 'nowrap'}}
      onChange={e => setTheme(e.target.value)}
      {...props}
    >
      <Radio.Button value="dark">Dark</Radio.Button>
      <Radio.Button value="light">Light</Radio.Button>
      <Radio.Button value="solarized">Solarized</Radio.Button>
    </Radio.Group>
  )
}

export default ThemeToggle
