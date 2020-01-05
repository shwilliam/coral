import {StyleSheet} from 'aphrodite'

const typing = {
  from: {
    width: 0,
  },
  to: {
    width: '100%',
  },
}

const blinkCursor = {
  from: {borderColor: 'transparent'},
  to: {borderColor: 'transparent'},
  '100%': {borderColor: '#5DB1FF'},
}

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    margin: '25px 0',
  },
  logo: {
    fontSize: '38px',
    maxWidth: '125px',
    overflow: 'hidden',
    borderRight: '6px solid #a2d2ff',
    whiteSpace: 'nowrap',
    margin: '20px auto',
    letterSpacing: '.15em',
    transition: 'ease-in-out',
    animationName: [typing, blinkCursor],
    animationDuration: '3.5s',
    animationIterationCount: 1.5,
  },
})

export default styles
