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
  logo: {
    fontFamily: 'Quicksand',
    fontSize: '38px',
    maxWidth: '130px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: '20px auto',
    letterSpacing: '.15em',
    transition: 'ease-in-out',
    animationName: [typing],
    animationDuration: '2.5s',
    animationIterationCount: 1,
  },
  logoLight: {
    fontFamily: 'Quicksand',
    fontSize: '34px',
    maxWidth: '130px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: '20px auto',
    letterSpacing: '.15em',
    transition: 'ease-in-out',
    animationName: [typing],
    animationDuration: '2.5s',
    animationIterationCount: 1,
    color: 'white',
  },
  logoDark: {
    fontFamily: 'Quicksand',
    fontSize: '34px',
    maxWidth: '130px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: '20px auto',
    letterSpacing: '.15em',
    transition: 'ease-in-out',
    animationName: [typing],
    animationDuration: '2.5s',
    animationIterationCount: 1,
    color: '#a9a9a9',
  },
  logoSolarized: {
    fontFamily: 'Quicksand',
    fontSize: '34px',
    maxWidth: '130px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    margin: '20px auto',
    letterSpacing: '.15em',
    transition: 'ease-in-out',
    animationName: [typing],
    animationDuration: '2.5s',
    animationIterationCount: 1,
    color: '#fdf6e3',
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
