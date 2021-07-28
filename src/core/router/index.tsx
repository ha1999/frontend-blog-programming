import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../pages/Home'
const Blog = React.lazy(()=> import('../pages/Blog'))
const Introduce  = React.lazy(()=> import('../pages/Introduce'))
const NewBlog = React.lazy(()=> import ('../pages/CreateBlog'))
function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:userName/:title">
          <Blog />
        </Route>
        <Route path="/new">
          <NewBlog />
        </Route>
        <Route path="/gioi-thieu.html">
          <Introduce />
        </Route>
        <Route path="*">
          
        </Route>
      </Switch>
    </Router>
  )
}

export default React.memo(AppRoute)
