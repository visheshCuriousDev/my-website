import './App.css';

import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Loading from './utility/loading';
const MiniBytes = React.lazy(() => import('./components/mini-bytes'));
const Projects = React.lazy(() => import('./components/projects'));
const NotFound = React.lazy(() => import('./utility/404'));

function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <section className="content">
            <Switch>
              <Route exact path='/'>
                <Suspense fallback={<Loading />}>
                  <MiniBytes />
                </Suspense>
              </Route>
              <Route path='/projects'>
                <Suspense fallback={<Loading />}>
                  <Projects />
                </Suspense>
              </Route>
              <Route path='*'>
                <Suspense fallback={<Loading />}>
                  <NotFound />
                </Suspense>
              </Route>
            </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
