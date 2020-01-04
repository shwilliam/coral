import React from 'react'
import Editor from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './Editor.css'
import {css} from 'aphrodite'
import styles from './Editor.styles'

const DraftEditor = ({value = '', onChange, ...props}) => (
  <>
    <Editor
      className={css(styles.mainEditor)}
      value={value}
      onChange={onChange}
      theme="snow"
      {...props}
    />
  </>
)

export default DraftEditor
