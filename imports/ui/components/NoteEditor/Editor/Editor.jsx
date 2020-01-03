import React from 'react'
import Editor from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './Editor.css'
import {css} from 'aphrodite'
import styles from './Editor.styles'
const isMobile = window.innerWidth < 480

const DraftEditor = ({value = '', onChange, ...props}) => (
  <>
    {isMobile ? (
      <Editor
        className={css(styles.fullEditor)}
        value={value}
        onChange={onChange}
        theme="snow"
        {...props}
      />
    ) : (
      <Editor
        className={css(styles.mobileEditor)}
        value={value}
        onChange={onChange}
        theme="snow"
        {...props}
      />
    )}
  </>
)

export default DraftEditor
