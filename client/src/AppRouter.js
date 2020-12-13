import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddPost from './components/AddPost';
import Home from './components/Home';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddPost} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
