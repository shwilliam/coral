import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    '@media (min-width: 480px)': {
      width: '90%',
      margin: '0 auto',
    },
    width: '80%',
    margin: '0 auto',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyleType: 'none',
    padding: '1rem',
  },
  mainContent: {
    backgroundImage: 'url("/coral_landing.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '250px',
    backgroundPosition: 'bottom right',
    display: 'flex',
    height: '750px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottom: 'solid 1px #DEDEDE',
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
})

export default styles
