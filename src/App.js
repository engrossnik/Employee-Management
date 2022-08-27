import PropTypes from 'prop-types'
import React from "react"

import { Switch, BrowserRouter as Router, withRouter } from "react-router-dom"
import { userRoutes, authRoutes } from "./routes/allRoutes"


// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"
import NonAuthLayout from "./components/NonAuthLayout"

// import './App.css';
// import LogIn from './pages/login.jsx';
// import Dashboard from './pages/Dashboard/index';


// layouts Format
import VerticalLayout from "./components/Layout"


const App = props => {

  function getLayout() {
    debugger;
    return VerticalLayout
  }

  const Layout = getLayout()

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}


export default withRouter(App)