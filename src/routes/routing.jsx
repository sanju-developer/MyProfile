import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage'
import { Router, Switch, Route } from 'react-router-dom'
import Profile from '../pages/Profile/Profile'
import history from '../history'
import Academics from '../pages/Academics/Academics'
import Skills from '../pages/Skills/Skills'
import WorkExp from '../pages/WorkExp/WorkExp'
import Certifications from '../pages/Certifications/Certifications'

function Routing() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/academics" component={Academics} exact />
        <Route path="/skills" component={Skills} exact />
        <Route path="/work-experience" component={WorkExp} exact />
        <Route path="/certifications" component={Certifications} exact />
      </Switch>
    </Router>
  )
}

export default Routing
