import React from 'react';
import './App.css';
import {
  IntroPage,
  UserDetailPage,
} from './pages';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { routers } from './config/router';

function App() {
  return (
      <div className="super-container">
        <div className="page-main-container">
          <Switch>
            <Route path={routers.INTROPAGE} exact component={IntroPage} />
            <Route path={routers.USERDETAILPAGE} exact component={UserDetailPage} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
