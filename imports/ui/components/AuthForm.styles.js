import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    width: '130px',
    margin: '25px auto',
  },
  formContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    '@media (min-width: 480px)': {
      maxWidth: '325px',
      width: '325px',
    },
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: '280px',
  },
  button: {
    width: '100%',
    height: '40px',
    marginBottom: '20px',
  },
  input: {
    height: '40px',
  },
})

export default styles
