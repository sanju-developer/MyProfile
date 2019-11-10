import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}))

function ListData(props) {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText primary={props.data} />
      </ListItem>
    </List>
  )
}

ListData.propTypes = {
  data: PropTypes.string.isRequired,
}

export default ListData
