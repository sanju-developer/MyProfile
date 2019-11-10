import React, { useImperativeHandle } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone'
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone'
import EmojiEventsTwoToneIcon from '@material-ui/icons/EmojiEventsTwoTone'
import WbIncandescentTwoToneIcon from '@material-ui/icons/WbIncandescentTwoTone'
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone'
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
}))

const RightSidebar = React.forwardRef((props, ref) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })

  // validate will be available to parent component using ref
  useImperativeHandle(ref, () => ({
    toggleDrawer(side, open) {
      toggleDrawerSetting(side, open)
    },
  }))

  const toggleDrawerSetting = (side, open) => {
    setState({ ...state, [side]: open })
  }

  function changeRoute(path) {
    props.history.push(`/${path}`)
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => toggleDrawerSetting(side, false)}
      onKeyDown={() => toggleDrawerSetting(side, false)}
    >
      <List>
        <ListItem button onClick={() => changeRoute('')}>
          <ListItemIcon>
            <DashboardTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => changeRoute('profile')}>
          <ListItemIcon>
            <AccountCircleTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem button onClick={() => changeRoute('academics')}>
          <ListItemIcon>
            <SchoolTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Academics" />
        </ListItem>

        <ListItem button onClick={() => changeRoute('skills')}>
          <ListItemIcon>
            <WbIncandescentTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>

        <ListItem button onClick={() => changeRoute('work-experience')}>
          <ListItemIcon>
            <WorkTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Work Experience" />
        </ListItem>

        <ListItem button onClick={() => changeRoute('certifications')}>
          <ListItemIcon>
            <EmojiEventsTwoToneIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Certifications" />
        </ListItem>
      </List>
    </div>
  )

  return (
    <Drawer anchor="right" open={state.right} onClose={() => toggleDrawerSetting('right', false)}>
      {sideList('right')}
    </Drawer>
  )
})

export default RightSidebar

RightSidebar.propTypes = {
  history: PropTypes.object.isRequired,
}
