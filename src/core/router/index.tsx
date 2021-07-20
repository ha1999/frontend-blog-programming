import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../pages/Home'
const  Profile = React.lazy(()=> import('../pages/Profile'))
const Blog = React.lazy(()=> import('../pages/Blog'))
const Introduce  = React.lazy(()=> import('../pages/Introduce'))
const Login = React.lazy(()=> import('../pages/Login'))

function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bai-viet.html">
          <Blog />
        </Route>
        <Route path="/tin-cong-nghe.html">
          <Profile />
        </Route>
        <Route path="/gioi-thieu.html">
          <Introduce />
        </Route>
        <Route path="/login.html">
          <Login />
        </Route>
        <Route path="*">
          <Introduce />
        </Route>
      </Switch>
    </Router>
  )
}

export default React.memo(AppRoute)
