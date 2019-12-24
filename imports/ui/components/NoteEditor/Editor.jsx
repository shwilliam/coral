import React from 'react'
import Editor from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './Editor.css'

const styledEditor = {
  width: '70%',
  margin: '0 auto',
  border: 0,
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
