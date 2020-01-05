const footerStyles = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  zIndex: 999,
}

export const footerDarkStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  color: '#fff',
  ...footerStyles,
}

export const footerLightStyles = {
  ...footerStyles,
}

export const footerContentStyles = {
  width: '60%',
  fontSize: '0.8rem',
  textAlign: 'center',
}
