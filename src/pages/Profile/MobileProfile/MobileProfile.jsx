import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone'
import LocalPhoneTwoToneIcon from '@material-ui/icons/LocalPhoneTwoTone'
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone'
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone'
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { darkBlue } from '../../../assets/colors.scss'
import '../Profile.scss'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    color: darkBlue,
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    paddingLeft: 20,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

export default function MobileProfile() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  // eslint-disable-next-line no-unused-vars
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={`mobile-profile ${classes.root}`}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <PersonPinTwoToneIcon />
          <Typography className={classes.heading}>Designation</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Jr Associate IT</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <LocalPhoneTwoToneIcon />
          <Typography className={classes.heading}>Phone</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>+91 9999262312</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <EmailTwoToneIcon />
          <Typography className={classes.heading}>Email</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>vivekrajoriya106@gmail.com</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <ContactMailTwoToneIcon />
          <Typography className={classes.heading}>Alternate Email</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>sanjuparjapati1997@gmail.com</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <BusinessTwoToneIcon />
          <Typography className={classes.heading}>Address</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>2310 Jawahar colony NIT Farodabar, AIr force road</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <LinkedInIcon />
          <Typography className={classes.heading}>LinkedIn</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>https://www.linkedin.com/in/vivek-rajoriya-9342a9150</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}
