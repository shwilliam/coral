const splashImageSharedStyles = {
  position: 'absolute',
  opacity: '25%',
  width: '100%',
  height: '100%',
  backgroundImage: 'url("/coral_landing.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '250px',
  backgroundPosition: 'bottom right',
}

export const splashImageStyles = {
  light: {
    ...splashImageSharedStyles,
  },
  dark: {
    filter: 'invert(1)',
    ...splashImageSharedStyles,
  },
  solarized: {
    ...splashImageSharedStyles,
  },
}

export const splashContainerStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

export const splashContentContainerStyles = {
  height: '50%',
  width: '70%',
  maxWidth: '350px',
  opacity: '100%',
  paddingBottom: '80px',
}

export const splashTextStyles = {
  light: {},
  dark: {
    color: 'rgba(255, 255, 255, 0.65)',
  },
  solarized: {},
}
