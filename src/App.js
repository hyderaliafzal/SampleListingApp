import React, { Component } from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import List from './components/List';
import Detail from './components/Detail';


class App extends Component {
  render() {
    return (
      <List/>
    );
  }
}

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/detail/:id' component={Detail}/>
    </Switch>
  </BrowserRouter>
);

export default routes;
