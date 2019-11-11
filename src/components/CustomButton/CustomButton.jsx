import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import KeyboardArrowRightTwoToneIcon from '@material-ui/icons/KeyboardArrowRightTwoTone'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  button: {
    position: 'fixed',
    bottom: 10,
    right: '8%',
  },
  bottom: {
    right: '80px',
  },
  input: {
    display: 'none',
  },
}))

function CustomButton(props) {
  const classes = useStyles()

  function changeRoute() {
    if (props.btnName !== 'Work Experience') {
      props.history.push(`/${props.btnName}`)
    } else {
      props.history.push('/work-experience')
    }
  }

  return !props.isMobile ? (
    <Button
      variant="outlined"
      color={`${props.type === 'yellow' || props.type === 'success' ? 'default' : props.type}`}
      className={`fixed-at-bottom ${classes.button} ${props.type} ${
        props.btnName === 'skills' ? classes.bottom : ''
      }`}
      onClick={changeRoute}
    >
      {props.btnName} <KeyboardArrowRightTwoToneIcon />
    </Button>
  ) : (
    <Button
      variant="outlined"
      color={`${props.type === 'yellow' || props.type === 'success' ? 'default' : props.type}`}
      className={`fixed-at-bottom ${classes.button} ${props.type}`}
      onClick={changeRoute}
    >
      {props.btnName} <KeyboardArrowRightTwoToneIcon />
    </Button>
  )
}

export default withRouter(CustomButton)

CustomButton.propTypes = {
  history: PropTypes.object.isRequired,
  btnName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isMobile: PropTypes.any,
}

CustomButton.defaultProps = {
  isMobile: undefined,
}
