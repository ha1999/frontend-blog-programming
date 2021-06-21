import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Blog from '../pages/Blog';
import Introduce from '../pages/Introduce'

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
      </Switch>
    </Router>
  );
}

export default AppRoute;
