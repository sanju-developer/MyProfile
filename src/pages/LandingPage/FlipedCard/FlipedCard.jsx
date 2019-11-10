import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { darkGrey } from '../../../assets/colors.scss'
import Grid from '@material-ui/core/Grid'
import RoundProfilePic from '../../../assets/images/roundProfilePic.jpg'
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import './FlipedCard.scss'

const useStyles = makeStyles({
  bigAvatar: {
    marginTop: 100,
    width: 100,
    height: 100,
  },
})

function FlipedCard() {
  const classes = useStyles()

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <div className="flip-card-container" onClick={() => set(state => !state)}>
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Remy Sharp" src={RoundProfilePic} className={classes.bigAvatar} />
        </Grid>
        <Typography variant="h4" component="h2">
          <Box textAlign="center" letterSpacing={1} pt={2}>
            Vivek Rajoriya
          </Box>
          <Box textAlign="center" letterSpacing={1} fontSize={16} lineHeight={1.5} color={darkGrey}>
            Software developer
          </Box>
          <Box textAlign="center" letterSpacing={1} fontSize={16} lineHeight={1.5} color={darkGrey}>
            <AlternateEmailIcon style={{ verticalAlign: 'middle' }} /> vivekrajoriya106@gmail.com
          </Box>
          <Box textAlign="center" letterSpacing={1} fontSize={16} lineHeight={1.5} color={darkGrey}>
            <PhoneIphoneTwoToneIcon style={{ verticalAlign: 'middle' }} /> +919999262312
          </Box>
        </Typography>
      </a.div>
      <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
    </div>
  )
}

export default FlipedCard
