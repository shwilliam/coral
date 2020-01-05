import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    '@media (min-width: 480px)': {
      width: '80%',
      margin: '0 auto',
      textAlign: 'center',
    },
    width: '90%',
    margin: '0 auto',
    textAlign: 'center',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyleType: 'none',
    padding: '1rem',
  },
  mainContent: {
    '@media (min-width: 480px)': {
      width: '80%',
      margin: '0 auto',
    },
    width: '100%',
    backgroundImage: 'url("/coral_landing.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '250px',
    backgroundPosition: 'bottom right',
    display: 'flex',
    height: '750px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  heading: {
    marginTop: '10rem',
  },
  landingImgs: {
    width: '100%',
    margin: '2rem 0',
    height: 'auto',
    textAlign: 'center',
  },
  devContainer: {
    paddingTop: '1rem',
  },
  devImgs: {
    borderRadius: '50%',
    width: '80%',
  },
  devLinks: {
    fontSize: '2.25rem',
    padding: '0 1rem',
  },
  footer: {
    textAlign: 'center',
  },
})

export default styles
