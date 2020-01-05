import {StyleSheet} from 'aphrodite'

const typing = {
  from: {
    width: 0,
  },
  to: {
    width: '100%',
  },
}

const blink = {
  from: {color: 'transparent'},
  to: {color: 'transparent'},
  '50%': {
    color: '#5DB1FF',
  },
}

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    width: '125px',
    margin: '25px auto',
  },
  logo: {
    fontSize: '38px',
    maxWidth: '120px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: '20px auto',
    letterSpacing: '.15em',
    transition: 'ease-in-out',
    animationName: [typing],
    animationDuration: '3s',
    animationIterationCount: 1,
  },
  blinkingCursor: {
    fontWeight: 700,
    fontSize: '30px',
    color: '#5DB1FF',
    animationName: [blink],
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'step-end',
    animationDelay: '3s',
  },
})

export default styles
