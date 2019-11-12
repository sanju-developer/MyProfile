import React from 'react'
import { Container, Grid, Box, Typography } from '@material-ui/core'
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone'
import CertiCongrats from '../../assets/images/certi-congrats.gif'
import certificatBackground from '../../assets/images/certifications.jpeg'
import './Certifications.scss'

class Certifications extends React.PureComponent {
  render() {
    return (
      <Container className="Certifications-container">
        <Typography variant="h4" gutterBottom>
          Certifications
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box className="certificate-card" textAlign="center">
              <VerifiedUserTwoToneIcon />
              <Typography variant="body1" gutterBottom>
                Passed an Online Exam <strong>( C Programming test )</strong> conducted by{' '}
                <strong>IIT Bombat on October 18, 2016</strong>
              </Typography>
              <img src={CertiCongrats} alt="CertiCongrats" className="certiCongrats" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box className="certificate-card" textAlign="center">
              <VerifiedUserTwoToneIcon />
              <Typography variant="body1" gutterBottom>
                Passed <strong>C++</strong> test conducted remotely from{' '}
                <strong>IIT Bombat on feburary 21, 2017</strong>
              </Typography>
              <img src={CertiCongrats} alt="CertiCongrats" className="certiCongrats" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box className="certificate-card" textAlign="center">
              <VerifiedUserTwoToneIcon />
              <Typography variant="body1" gutterBottom>
                Successfully completed <strong>JAVA</strong> test organized at{' '}
                <strong>B. S. Anangpuria Institute of Technology Mangement</strong> by{' '}
                <strong>IIT Bombay on October 3,2017</strong>
              </Typography>
              <img src={CertiCongrats} alt="CertiCongrats" className="certiCongrats" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box className="certificate-card" textAlign="center">
              <VerifiedUserTwoToneIcon />
              <Typography variant="body1" gutterBottom>
                Passed an <strong>JAVA</strong> exam executed for Certifications, conducted by{' '}
                <strong>DUCAT on feburary 18, 2017</strong> at Ducat Institute
              </Typography>
              <img src={CertiCongrats} alt="CertiCongrats" className="certiCongrats" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Box textAlign="center">
              <img
                src={certificatBackground}
                alt="CertiCongrats"
                className="certificatBackground"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default Certifications
