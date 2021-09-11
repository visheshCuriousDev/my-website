import './App.css';
import Header from './components/header';
import MiniBytes from './components/mini-bytes';
import Projects from './components/projects';
import NotFound from './utility/404'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <section className="content">
            <Switch>
              <Route exact path='/'>
                <MiniBytes />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
