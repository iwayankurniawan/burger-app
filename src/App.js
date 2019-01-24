import React, { Component } from 'react';
import { modelInstance } from './StoreData/DataModel';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import HeaderProjectView from './View/HeaderBarView';
import MainView from './View/MainView';
import FooterView from './View/FooterView';
import MenuView from './View/MenuView';
import LocationView from './View/LocationView';
import StoryView from './View/StoryView';
import ContactView from './View/ContactView';
import KarirView from './View/KarirView';

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
            <Switch>
              <Route path="/menu"  render={() => <MenuView model={modelInstance}/>}/>
              <Route path="/outlet"  render={() => <LocationView model={modelInstance}/>}/>
              <Route path="/kontak"  render={() => <ContactView model={modelInstance}/>}/>
              <Route path="/story"  render={() => <StoryView model={modelInstance}/>}/>            
              <Route path="/karir"  render={() => <KarirView model={modelInstance}/>}/>   
              <Route path="/"  render={() => <MainView model={modelInstance}/>}/>          
            </Switch>
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
