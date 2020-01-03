import {StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
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
  },
  heading: {
    marginTop: '10rem',
  },
})

export default styles
