import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'
import Box from '@material-ui/core/Box'
import { darkGrey } from '../../../assets/colors.scss'

const data = [
  {
    name: 'Jan',
    months: 300,
  },
  {
    name: 'Feb',
    months: 300,
  },
  {
    name: 'Mar',
    months: 350,
  },
  {
    name: 'Apr',
    months: 290,
  },
  {
    name: 'May',
    months: 200,
  },
  {
    name: 'Jun',
    months: 190,
  },
  {
    name: 'July',
    months: 180,
  },
  {
    name: 'Aug',
    months: 170,
  },
  {
    name: 'Sep',
    months: 160,
  },
  {
    name: 'Oct',
    months: 200,
  },
  {
    name: 'Nov',
    months: 210,
  },
  {
    name: 'Dec',
    months: 150,
  },
]

class Chart extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
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

  render() {
    return (
      <>
        <Box
          textAlign="right"
          letterSpacing={1}
          fontSize={22}
          lineHeight={1.5}
          color={darkGrey}
          p={2}
          pt={0}
          pr={this.state.isMobile ? 0 : 3.5}
        >
          Visits per months
        </Box>
        <LineChart
          width={this.state.isMobile ? 370 : 700}
          height={350}
          data={data}
          left="-50px"
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          className="mobile-line-chart"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'people visits', angle: -90, position: 'left' }} />
          <Legend />
          <Line type="natural" dataKey="months" stroke="#3f51b5" />
        </LineChart>
      </>
    )
  }
}

export default Chart
