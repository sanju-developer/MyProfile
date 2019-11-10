/* eslint-disable react/no-array-index-key */
import React from 'react'
import './WorkExp.scss'
import { Container, Box, Typography, Grid, Avatar } from '@material-ui/core'
import developer from '../../assets/images/developer.jpg'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import CustomButton from '../../components/CustomButton/CustomButton'
import '../../assets/colors.scss'
import ListData from './List/List'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}))

class WorkExp extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      workExp: {
        projects: [
          {
            id: 'proj1',
            name: 'Rewhiz',
            type: 'Web Application',
            technology: ['Reactjs', 'Redux', 'Python', 'react-bootstrap', 'bootstrap'],
            timeSpan: '3 months + ongoing',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            role: [
              'Create custom refresh token Interceptor (challenging task)',
              'Integrate virtual scroll',
              'Integrate infinite sroll',
              'Integrate Google login',
              'Custom responsive Table which added table columns in between with passage of time',
              'Integration Web socket for notification',
            ],
            teamSize: '1',
          },
          {
            id: 'proj2',
            name: 'Woodstock',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            type: 'Web Application + Mobile App',
            technology: ['Ionic', 'php/Laravel', 'Rxjs', 'PWA', 'Angular material'],
            timeSpan: '5 months',
            teamSize: '2',
            role: [
              'Integrate NgRx',
              'Infinite Scroll Implementation',
              'Virtual scroll Implementation',
              'Create new designs from PSD and added functionality',
              'Bug fixes',
              'build for Android adn PWA',
            ],
          },
          {
            id: 'proj3',
            name: 'Invoice System',
            type: 'Web Application',
            technology: ['Angular', 'Nodejs'],
            timeSpan: '4 months',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            role: ['a', 'b', 'c', 'd'],
            teamSize: '2',
          },
          {
            id: 'proj4',
            name: 'Albaap',
            type: 'Mobile Application',
            technology: ['Ionic', 'Rxjs', 'Nodejs'],
            timeSpan: '1 months',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            role: ['Integrate google map', 'Bug fixes', ' Create build for Ios and Android'],
            teamSize: '1',
          },
        ],
        companies: [
          { name: 'Yugasa software labs', servedTime: '10 months' },
          { name: 'Daffodils software private limited', servedTime: '10 months + Ongoing' },
        ],
      },
    }
  }

  render() {
    return (
      <Container className="WorkExp-container">
        <Grid container alignItems="flex-start" key="#work-exp">
          <Avatar alt="skills-img" src={developer} className="bigAvatar" />
        </Grid>
        {this.state.workExp.projects.map((project, index) => {
          return (
            <>
              <Typography variant="h5" gutterBottom>
                {'Project ' + Math.floor(index + 1)}
              </Typography>
              <Box className="project-card" key={project.id}>
                <Typography variant="h4" gutterBottom className="project-title">
                  {project.name}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {project.description}
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Project Type
                  <ListData data={project.type} />
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Time Period
                  <ListData data={project.timeSpan} />
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Team Size
                  <ListData data={project.teamSize} />
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Technologies
                  {project.technology.map((tech, index) => {
                    return <ListData data={tech} key={'tech' + index} />
                  })}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Roles
                  {project.role.map((roles, index) => {
                    return <ListData data={roles} key={index + 'roles'} />
                  })}
                </Typography>
              </Box>
            </>
          )
        })}
        <CustomButton btnName="certifications" type="yellow" />
      </Container>
    )
  }
}

export default withStyles(useStyles)(WorkExp)
