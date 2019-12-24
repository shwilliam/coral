import React from 'react'
import Editor from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './Editor.css'
const isMobile = window.innerWidth < 480

const styledEditor = {
  width: '90%',
  margin: '0 auto',
  border: 0,
  fontSize: '5px',
}

const mobileEditor = {
  width: '70%',
  margin: '0 auto',
  border: 0,
}

const DraftEditor = ({value = '', onChange, ...props}) => (
  <>
    {isMobile ? (
      <Editor
        style={styledEditor}
        value={value}
        onChange={onChange}
        theme="snow"
        {...props}
      />
    ) : (
      <Editor
        style={mobileEditor}
        value={value}
        onChange={onChange}
        theme="snow"
        {...props}
      />
    )}
  </>
)

export default DraftEditor
