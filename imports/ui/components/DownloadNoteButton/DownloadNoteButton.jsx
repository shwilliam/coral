import React from 'react'
import {Button} from 'antd'
import {usePdfDownload, useTheme} from '../../hooks'
import {
  buttonLightStyles,
  buttonDarkStyles,
} from './DownloadNoteButton.styles'

const isMobile = window.innerWidth < 480

const DownloadNoteButton = ({
  type = 'primary',
  noteContent,
  ...props
}) => {
  const [theme] = useTheme()
  const downloadPdf = usePdfDownload()

  return (
    <Button
      onClick={() => downloadPdf(noteContent)}
      type={type}
      style={theme === 'light' ? buttonLightStyles : buttonDarkStyles}
    >
      {isMobile ? 'PDF' : 'Save as PDF'}
    </Button>
  )
}

export default DownloadNoteButton
