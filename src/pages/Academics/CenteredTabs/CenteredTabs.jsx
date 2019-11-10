import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Box } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import '../Academics.scss'
import { darkgreen } from '../../../assets/colors.scss'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: '30px 0px',
    // boxShadow: '10px 10px 30px 0px rgba(0, 0, 0, 0.1)',
  },
})

export default function CenteredTabs(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  // eslint-disable-next-line no-unused-vars
  const handleChange = (event, newValue) => {
    setValue(newValue)
    props.clickTab(newValue)
  }

  return (
    <Box className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        TabIndicatorProps={{
          style: {
            backgroundColor: darkgreen,
          },
        }}
      >
        <Tab label="Schooling" />
        <Tab label="Graduation" />
      </Tabs>
    </Box>
  )
}

CenteredTabs.propTypes = {
  clickTab: PropTypes.func.isRequired,
}
