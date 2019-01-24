import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import './HomeViewMenu.css';

class HomeViewMenu extends Component {
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
          <div className="col-sm-6 nopadding">
              <img src={require('./ImagesView/Blackpepper-Kebab.jpg')} className="img-responsive img-fluid img-title"/>
          </div>
          <div className="col-sm-6 nopadding">
              <img src={require('./ImagesView/Beef-Cheese- Kebab.jpg')} className="img-responsive img-fluid img-title"/>
          </div>
          <div className="col-sm-6 nopadding">
              <img src={require('./ImagesView/Beef-Cheesy-Mayo-Kebab.jpg')} className="img-responsive img-fluid img-title"/>
          </div>
          <div className="col-sm-6 nopadding">
              <img src={require('./ImagesView/Supreme-Kebab-2.jpg')} className="img-responsive img-fluid img-title"/>
          </div>      
    </div>

    );
  }
}

export default HomeViewMenu;
