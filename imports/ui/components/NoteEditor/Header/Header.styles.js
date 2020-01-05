import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  header: {
    width: '95%',
    margin: '0 auto',
  },
  title: {
    margin: '0px 5px',
  },
  menu: {
    '@media (max-width: 480px)': {
      width: 'max-content',
      margin: '0 auto',
    },
  },
  menuButton: {
    '@media (max-width: 480px)': {
      margin: '0px 5px',
    },
    marginLeft: '10px',
  },
})

export default styles
