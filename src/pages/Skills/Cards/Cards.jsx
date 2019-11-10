import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Fade from '@material-ui/core/Fade'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { List, ListSubheader, ListItem, ListItemText, FormGroup, Checkbox } from '@material-ui/core'

const useStyles = theme => ({
  root: {
    height: 'auto',
  },
  container: {
    display: 'flex',
    borderRadius: '8px',
    backgroundColor: 'rgba(245, 0, 87, 0.1)',
    border: '1px solid rgba(245, 0, 87, 1)',
    margin: '20px',
  },
  paper: {
    margin: theme.spacing(1),
    padding: 16,
  },
})

class SimpleFadeCard extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      skills: this.props.skillSet,
      checkedAll: false,
    }
  }

  handleChange = index => {
    if (index === 'checkedAll') {
      this.setState(
        prevState => {
          return { checkedAll: !prevState.checkedAll }
        },
        () => {
          for (let i = 0; i < this.state.skills.length; i++) {
            const stateCopy = [...this.state.skills]
            if (this.state.checkedAll) {
              stateCopy[i].fieldEnable = true
              this.setState(() => {
                return { skills: stateCopy }
              })
            } else {
              stateCopy[i].fieldEnable = false
              this.setState(() => {
                return { skills: stateCopy }
              })
            }
          }
        },
      )
    } else {
      const stateCopy = [...this.state.skills]
      stateCopy[index].fieldEnable = !stateCopy[index].fieldEnable

      this.setState(() => {
        return { skills: stateCopy }
      })
    }
  }

  render() {
    const { classes } = this.props
    return (
      <>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedAll}
                onChange={() => this.handleChange('checkedAll')}
                value="checkedAll"
              />
            }
            label="Select all"
          />
        </FormGroup>
        {this.state.skills.map((data, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div className={classes.root} key={'#' + index}>
              <FormControlLabel
                control={
                  <Switch checked={data.fieldEnable} onChange={() => this.handleChange(index)} />
                }
                label={data.name}
              />
              {data.fieldEnable ? (
                <div className={classes.container}>
                  <Fade in={data.fieldEnable}>
                    <List
                      subheader={<ListSubheader>{data.name + ':'}</ListSubheader>}
                      className={`${classes.root}`}
                    >
                      {data.item.map((item, index) => {
                        return (
                          // eslint-disable-next-line react/no-array-index-key
                          <ListItem className="text-on-hover-description" key={index + '#'}>
                            <ListItemText id="description" primary={item} />
                          </ListItem>
                        )
                      })}
                    </List>
                  </Fade>
                </div>
              ) : (
                ''
              )}
            </div>
          )
        })}
      </>
    )
  }
}

SimpleFadeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  skillSet: PropTypes.array.isRequired,
}

export default withStyles(useStyles, { withTheme: true })(SimpleFadeCard)
