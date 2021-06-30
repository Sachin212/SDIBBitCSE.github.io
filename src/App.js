import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import Login from './pages/Login'
import Home from './pages/Home'

function App(){
    return(
        <Router>
          <Container>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Container>
        </Router>
    )
}

export default App