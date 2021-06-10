import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Blog from '../pages/Blog'
function AppRoute() {
    return <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/blog">
                <Blog />
            </Route>
            <Route path="profile">
                <Profile />
            </Route>
        </Switch>
    </Router>
}

export default AppRoute