import React, { Component } from 'react';
import { modelInstance } from './StoreData/DataModel';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';

import HeaderProjectView from './View/HeaderBarView';
import MainView from './View/MainView';
import SideBarView from './View/SideBarView';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App container-fluid row">
        <div className="header-bar row">
          <HeaderProjectView model={modelInstance}/>
        </div>
        <div className="row">
          <div className="sidebar col-sm-4">
            <SideBarView model={modelInstance}/>
          </div>
          <div className="main-content col-sm-8">
            <Route path="/"  render={() => <MainView model={modelInstance}/>}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
