import {render} from 'react-dom';
import React from 'react'
import { HashRouter,Route } from 'react-router-dom';
import App from './component/App'
// import About from './component/About'
// import User from './component/User'
import UserWrapper from './container/UserWrapper'
import AboutWrapper from './container/AboutWrapper'
import Home from './component/Home'

render(
  (<HashRouter>
    <App>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutWrapper} />
        <Route path="/user" component={UserWrapper} />
    </App>
  </HashRouter>),
  document.getElementById('root')
);

