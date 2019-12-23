import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    '@media (min-width: 600px)': {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },

  backButton: {
    fontSize: '1.3rem',
    margin: '2rem',
  },

  card: {
    margin: '1rem auto 24px auto',
    width: '90%',
    height: 'auto',
    padding: '24px',
    textAlign: 'center',

    '@media (min-width: 600px)': {
      width: '27%',
      margin: '1rem 0 24px 0',
      minHeight: '500px',
    },
  },

  tabCard: {
    '@media (min-width: 600px)': {
      width: '66%',
      height: 'auto',
    },
  },

  dashed: {
    border: 'dashed #e8e8e8',
    borderTopWidth: 'medium',
    borderRightWidth: 'medium',
    borderBottomWidth: 'medium',
    borderLeftWidth: 'medium',
    borderWidth: '1px 0 0',
    margin: '1.5rem 0',
    padding: '1rem 0',
    textAlign: 'left',
  },

  info: {
    padding: '0.75rem 0',
    textAlign: 'left',
  },

  notesList: {
    padding: '0.75rem 0',
    textAlign: 'left',
  },

  gravatar: {
    margin: '0 auto',
    borderRadius: '50%',
    width: '104px',
    height: '104px',
    marginBottom: '20px',
  },
})

export default styles
