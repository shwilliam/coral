import React from 'react'
import Editor from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const styledEditor = {
  width: '70%',
  margin: '0 auto',
}

const DraftEditor = ({value = '', onChange, ...props}) => (
  <Editor
    style={styledEditor}
    value={value}
    onChange={onChange}
    theme="snow"
    {...props}
  />
)

export default DraftEditor
