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
    width: 'max-content',
    margin: '5px auto',
  },
  menuButton: {
    '@media (min-width: 480px)': {
      marginLeft: '10px',
    },
    margin: '0px 5px',
  },
})

export default styles
