import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone'
import LocalPhoneTwoToneIcon from '@material-ui/icons/LocalPhoneTwoTone'
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone'
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone'
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { darkBlueWithGrey } from '../../../assets/colors.scss'
import { Link } from '@material-ui/core'
import '../Profile.scss'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    color: darkBlueWithGrey,
  },
  profileFields: {
    maxWidth: '300px',
  },
  link: {
    margin: theme.spacing(1),
  },
}))

const preventDefault = event => event.preventDefault()

function ProfileInfo() {
  const classes = useStyles()
  return (
    <List
      subheader={<ListSubheader>personal Information</ListSubheader>}
      className={`${classes.root}`}
    >
      <ListItem className="text-on-hover-description">
        <ListItemText
          id="description"
          primary="I am not a night person, I always used to prefer work in the morning if I am not stuck somewhere . I am innovative, like I try to think something out of the box. Very happy and ready to know how actually computer science works behind the scene"
        />
      </ListItem>
      <ListItem className="text-on-hover-description">
        <ListItemText
          id="description"
          primary="Target is to create service for people, for free or open source to make them happy and make thier life easy. Always ready to learn new technologies and new stacks. One negative point is that if somebody ask for help then I can't say no"
        />
      </ListItem>
      <ListItem className="text-on-hover web-profile">
        <ListItemIcon>
          <PersonPinTwoToneIcon />
        </ListItemIcon>
        <ListItemText
          id="switch-list-label-bluetooth"
          primary="Designation"
          className={`${classes.profileFields}`}
        />
        <ListItemText>Jr. Associate IT</ListItemText>
      </ListItem>
      <ListItem className="text-on-hover web-profile">
        <ListItemIcon>
          <LocalPhoneTwoToneIcon />
        </ListItemIcon>
        <ListItemText
          id="switch-list-label-phone"
          primary="Phone"
          className={`${classes.profileFields}`}
        />
        <ListItemText>+91 9999262312</ListItemText>
      </ListItem>
      <ListItem className="text-on-hover web-profile">
        <ListItemIcon>
          <EmailTwoToneIcon />
        </ListItemIcon>
        <ListItemText
          id="switch-list-label-email"
          primary="Email"
          className={`${classes.profileFields}`}
        />
        <ListItemText>vivekrajoriya106@gmail.com</ListItemText>
      </ListItem>
      <ListItem className="text-on-hover web-profile">
        <ListItemIcon>
          <ContactMailTwoToneIcon />
        </ListItemIcon>
        <ListItemText
          id="switch-list-label-altermnate-email"
          primary="Alternate Email"
          className={`${classes.profileFields}`}
        />
        <ListItemText>sanjuparjapati1997@gmail.com</ListItemText>
      </ListItem>
      <ListItem className="text-on-hover web-profile">
        <ListItemIcon>
          <BusinessTwoToneIcon />
        </ListItemIcon>
        <ListItemText
          id="switch-list-label-address"
          primary="Address"
          className={`${classes.profileFields}`}
        />
        <ListItemText>2310, Jawahar colony NIT Faridabad, Air force road</ListItemText>
      </ListItem>
      <ListItem className="text-on-hover web-profile">
        <ListItemIcon>
          <LinkedInIcon />
        </ListItemIcon>
        <ListItemText
          id="switch-list-label-linkedin"
          primary="LinkedIn"
          className={`${classes.profileFields}`}
        />
        <ListItemText>
          <Link href="#" onClick={preventDefault} className={classes.link}>
            https://www.linkedin.com/in/vivek-rajoriya-9342a9150
          </Link>
        </ListItemText>
      </ListItem>
    </List>
  )
}

export default ProfileInfo
