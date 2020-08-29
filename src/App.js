import React from 'react';
import './App.css';
import {
  HomePage,
  ChatPage,
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
            <Route path={routers.CHATPAGE} component={ChatPage} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
