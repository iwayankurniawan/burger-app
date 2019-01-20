import React, { Component } from 'react';
import { modelInstance } from './StoreData/DataModel';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';

import HeaderProjectView from './View/HeaderBarView';
import MainView from './View/MainView';
import FooterView from './View/FooterView';

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
          <div className="main-content col-sm-12">
            <Route path="/"  render={() => <MainView model={modelInstance}/>}/>
          </div>
        </div>
        <div className="row">
          <FooterView model={modelInstance}/>
        </div>
      </div>
    );
  }
}

export default App;
