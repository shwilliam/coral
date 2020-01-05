import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  formContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    '@media (max-width: 480px)': {
      maxWidth: '280px',
    },
    maxWidth: '325px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
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
