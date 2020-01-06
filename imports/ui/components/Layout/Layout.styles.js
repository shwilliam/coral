const contentContainerSharedStyles = {
  minHeight: 'auto',
}

export const contentContainerStyles = {
  light: {
    backgroundColor: '#fff',
    ...contentContainerSharedStyles,
  },
  dark: {
    backgroundColor: '#000',
    color: '#fff',
    ...contentContainerSharedStyles,
  },
  solarized: {
    backgroundColor: '#fdf6e3',
    color: '#586e75',
    ...contentContainerSharedStyles,
  },
}

export const layoutContainerStyles = {
  fullHeight: {
    minHeight: '100vh',
  },
}
