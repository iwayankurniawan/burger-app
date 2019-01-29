import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import HomeView from './MainViewPart/HomeView';
import HomeViewSlides from './MainViewPart/HomeViewSlides';
import HomeViewKataMereka from './MainViewPart/HomeViewKataMereka';
import HomeViewMenu from './MainViewPart/HomeViewMenu';
import HomeViewOutlet from './MainViewPart/HomeViewOutlet';
import HomeViewKarir from './MainViewPart/HomeViewKarir';

class MainView extends Component {
  constructor(props) {
    super(props)
    // We put on state the properties we want to use and modify in the component
    this.state = {

    }
  }

  componentDidMount() {
    this.props.model.addObserver(this);
  }

  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }

  update(obj) {
    // setState causes the component to re-render
    this.setState({

    });
  }

  render() {
    return(
      <div>
        <div className="row">
          <HomeViewSlides model={this.props.model}/>
        </div>
        <div className="row">
          <HomeView model={this.props.model}/>
        </div>
        
        <div className="row">
          <HomeViewKataMereka model={this.props.model}/>
        </div>
        
        <div className="row">
          <HomeViewOutlet model={this.props.model}/>
        </div>
        <div className="row">
          <HomeViewKarir model={this.props.model}/>
        </div>
      </div>

    );
  }
}

export default MainView;
