import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../pages/Home'
const Blog = React.lazy(() => import('../pages/Blog'))
const Introduce = React.lazy(() => import('../pages/Introduce'))
const NewBlog = React.lazy(() => import('../pages/CreateBlog'))
const PageNotFound = React.lazy(() => import('../pages/notFound'))
function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/t/:tag">
          <Introduce />
        </Route>
        <Route path="/:auth/:title">
          <Blog />
        </Route>
        <Route path="/new">
          <NewBlog />
        </Route>
        <Route path="/not-found">
          <PageNotFound />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default React.memo(AppRoute)
