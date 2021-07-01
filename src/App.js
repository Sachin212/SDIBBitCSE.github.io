import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import Login from './pages/Login'
import Home from './pages/Home'
// import Data from './pages/Data'
import FormDetail from './pages/FormDetail'
import Error from './components/Error'
import { AuthProvider } from './context/auth'
import Navbar from './components/Navbar'

function App(){
    return(
        <AuthProvider>
          <Router>
            <Container>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                {/* <Route path="/data" component={Data} /> */}
                <Route path="/form" component={FormDetail} />
                <Route component={Error} />
              </Switch>
            </Container>
          </Router>
        </AuthProvider>
    )
}

export default App