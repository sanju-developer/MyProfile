import React from 'react'
import { Container, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import profilePic from '../../assets/images/roundProfilePic.jpg'
import MobileProfile from './MobileProfile/MobileProfile'
import './Profile.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { darkBlue } from '../../assets/colors.scss'
import CustomButton from '../../components/CustomButton/CustomButton'

class Profile extends React.PureComponent {
  render() {
    return (
      <Container className="Profile-container">
        <Box className="profile-pic-container">
          <img alt="profile-pic" src={profilePic} title="Profile pic" className="profile-pic" />
          <Box className="side-title" color={darkBlue}>
            <Typography variant="h4" gutterBottom>
              Hi
            </Typography>
            <Typography variant="h4" gutterBottom>
              This is Vivek Rajoriya
            </Typography>
          </Box>
        </Box>

        <Box className="profile-section">
          <ProfileInfo />
          <MobileProfile />
          <CustomButton btnName="academics" type="primary" />
        </Box>
      </Container>
    )
  }
}

export default Profile
