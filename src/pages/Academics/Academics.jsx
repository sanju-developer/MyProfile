import React from 'react'
import CenteredTabs from './CenteredTabs/CenteredTabs'
import { Container, Box, List, ListSubheader, ListItem, ListItemText } from '@material-ui/core'
import './Academics.scss'
import CustomButton from '../../components/CustomButton/CustomButton'
import AnimatedNumber from '../../components/AnimatedNumber/AnimatedNumber'

class Academics extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedtabs: 0,
      isMobile: false,
    }

    this.updatePredicate = this.updatePredicate.bind(this)
  }

  componentDidMount() {
    this.updatePredicate()
    window.addEventListener('resize', this.updatePredicate)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate)
  }

  updatePredicate() {
    this.setState({ isMobile: window.innerWidth < 768 })
  }

  selectedTab = selectedTabIndex => {
    this.setState({ selectedtabs: selectedTabIndex })
  }

  render() {
    return (
      <div className="academics-container">
        <CenteredTabs clickTab={this.selectedTab} />
        {this.state.selectedtabs === 0 ? (
          <Container maxWidth="sm" className="inner-academics-container">
            <Box>
              <List subheader={<ListSubheader>Schooling</ListSubheader>}>
                <ListItem className="text-on-hover">
                  <ListItemText id="switch-list-label-phone" primary="School" />
                  <ListItemText>Vidya Niketan sr. sec. school</ListItemText>
                </ListItem>
                <ListItem className="text-on-hover">
                  <ListItemText id="switch-list-label-phone" primary="10th" />
                  <ListItemText>
                    <AnimatedNumber number={72} type="simple-number" />%
                  </ListItemText>
                </ListItem>
                <ListItem className="text-on-hover">
                  <ListItemText id="switch-list-label-phone" primary="12th" />
                  <ListItemText>
                    <AnimatedNumber number={78} type="simple-number" />%
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Container>
        ) : (
          <Container maxWidth="sm" className="inner-academics-container">
            <Box>
              <List subheader={<ListSubheader>Graduation</ListSubheader>}>
                <ListItem className="text-on-hover">
                  <ListItemText id="switch-list-label-phone" primary="College / Institute" />
                  <ListItemText>
                    Bhawani Shankar Anangpuria Institute of Technology and Management
                  </ListItemText>
                </ListItem>
                <ListItem className="text-on-hover">
                  <ListItemText id="switch-list-label-phone" primary="Aggregate" />
                  <ListItemText>
                    <AnimatedNumber number={81} type="simple-number" />%
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Container>
        )}
        <Box className="bottom-bg" />
        <CustomButton btnName="skills" type="success" isMobile={this.state.isMobile} />
      </div>
    )
  }
}

export default Academics
