import React from 'react';
import './App.css';
import {
  HomePage,
} from './pages';
import {
  Switch,
  Route,
} from "react-router-dom";
import { routers } from './config/router';

function App() {
  return (
      <div className="super-container">
        <div className="page-main-container">
          <Switch>
            <Route path={routers.HOMEPAGE} exact component={HomePage} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
