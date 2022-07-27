import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comments from './Component/Comments/Comments';
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/post/comments/:id">
          <Comments></Comments>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
