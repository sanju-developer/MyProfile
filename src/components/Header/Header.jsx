import React, { useRef } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone'
import { darkGrey } from '../../assets/colors.scss'
import RightSidebar from '../RightSidebar/RightSidebar'
import AnimatedNumber from '../AnimatedNumber/AnimatedNumber'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  cursor: {
    cursor: 'pointer',
  },
  headerContainer: {
    paddingTop: 32,
    position: 'fixed',
    margin: '0% auto' /* Will not center vertically and won't work in IE6/7. */,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 9,
    backgroundColor: '#FFF',
  },
}))

function Header(props) {
  const childRef = useRef()
  const classes = useStyles()

  return (
    <Container className={classes.headerContainer}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <CodeTwoToneIcon
              fontSize="large"
              htmlColor={darkGrey}
              onClick={() => childRef.current.toggleDrawer('right', true)}
              className={classes.cursor}
            />
            <RightSidebar ref={childRef} history={props.history} />
          </Grid>
          <Grid item xs={6}>
            <AnimatedNumber number={200} />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Header

Header.propTypes = {
  history: PropTypes.object.isRequired,
}
