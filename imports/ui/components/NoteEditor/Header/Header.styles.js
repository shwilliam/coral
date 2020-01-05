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
      width: '50%',
      margin: '0 auto',
    },
  },
})

export default styles
