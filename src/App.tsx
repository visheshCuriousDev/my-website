import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {Suspense} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from './utility/loading';
import { isNavbarOpened } from './features/slice/headerSlice';
import { useSelector } from 'react-redux';

const NotFound = React.lazy(() => import('./utility/404'));
const Home = React.lazy(() => import('./components/home'));
const Header = React.lazy(() => import('./components/header'));
const Footer = React.lazy(() => import('./components/footer'));
const ReactTutorials = React.lazy(() => import('./components/react-tutorials'));

function App() {

  const navbar = useSelector(isNavbarOpened);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div className={`body ${navbar ? 'mobile-nav-active' : ''} `}>
          <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/react-tutorials'>
                <ReactTutorials />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
