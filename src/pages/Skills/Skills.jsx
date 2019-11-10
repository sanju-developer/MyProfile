import React from 'react'
import { Container, Grid, Avatar } from '@material-ui/core'
import HelloWorld from '../../assets/images/hello-world.png'
import './Skills.scss'
import SimpleFadeCard from './Cards/Cards'
import CustomButton from '../../components/CustomButton/CustomButton'

class Skills extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      skills: [
        {
          item: ['Javascript', 'C', 'C++', 'Java'],
          fieldEnable: false,
          name: 'Programming Language',
        },
        {
          item: [
            'NgRx',
            'Rxjs',
            'Redux',
            'firebase',
            'material ui',
            'react-bootstrap',
            'reactstrap',
            'angular material',
          ],
          fieldEnable: false,
          name: 'Libraries',
        },
        {
          item: ['Angular', 'Ionic', 'Reactjs', 'Express'],
          fieldEnable: false,
          name: 'Frameworks',
        },
        { item: ['MongoDB'], fieldEnable: false, name: 'Database' },
        { item: ['Git'], fieldEnable: false, name: 'VersionControl' },
        {
          item: ['Trello', 'Jira', 'Bitbucket', 'Gitlab'],
          fieldEnable: false,
          name: 'Project Management Tool',
        },
        {
          item: ['Visual studio', 'code', 'sublime', 'Atom', 'notepad++'],
          fieldEnable: false,
          name: 'CodeEditor',
        },
      ],
    }
  }

  render() {
    return (
      <Container className="skills-container">
        <Grid container justify="center" alignItems="center">
          <Avatar alt="skills-img" src={HelloWorld} className="bigAvatar" />
        </Grid>
        <SimpleFadeCard skillSet={this.state.skills} />
        <CustomButton btnName="Work Experience" type="secondary" />
      </Container>
    )
  }
}

export default Skills
