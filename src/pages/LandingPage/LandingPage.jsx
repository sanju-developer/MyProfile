import React from 'react'
import Grid from '@material-ui/core/Grid'
import './LandingPage.scss'
import Container from '@material-ui/core/Container'
import FlipedCard from './FlipedCard/FlipedCard'
import Chart from './Chart/Chart'
import CustomButton from '../../components/CustomButton/CustomButton'

class LandingPage extends React.PureComponent {
  render() {
    return (
      <Container className="Landing-page-container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <FlipedCard />
          </Grid>
          <Grid item xs={12} sm={7} className="mobile-part-chart">
            <Chart />
            <CustomButton btnName="profile" type="default" />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default LandingPage
