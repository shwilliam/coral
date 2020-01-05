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
  '100%': {borderColor: '#1890ff'},
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
    maxWidth: '120px',
    overflow: 'hidden',
    borderRight: '.15em solid #1890ff',
    whiteSpace: 'nowrap',
    margin: '20px auto',
    letterSpacing: '.15em',
    transition: 'ease-in-out',
    animationName: [typing, blinkCursor],
    animationDuration: '2.5s',
    animationIterationCount: 'infinite',
  },
})

export default styles
