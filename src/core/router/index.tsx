import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../pages/Home'
import TagDetail from '../pages/TagDetail'
const Blog = React.lazy(() => import('../pages/Blog'))
const NewBlog = React.lazy(() => import('../pages/CreateBlog'))
const DashBoard = React.lazy(() => import ('../pages/DashBoard'))
const PageNotFound = React.lazy(() => import('../pages/notFound'))
const PageSearch = React.lazy(()=> import('../pages/Search'))
function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dash-board">
          <DashBoard />
        </Route>
        <Route path="/t/:tag">
          <TagDetail />
        </Route>
        <Route path="/:auth/:title">
          <Blog />
        </Route>
        <Route path="/new">
          <NewBlog />
        </Route>
        <Route path='/search'>
          <PageSearch />
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
