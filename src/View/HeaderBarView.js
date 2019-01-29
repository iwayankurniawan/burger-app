import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import { Carousel } from 'react-responsive-carousel';

import './HeaderBarView.css';

class HeaderBarView extends Component {
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
        <div className="col-sm-4">
          <img src={require('../Images/kabobs-logo.svg')} className="img-size img-responsive col-sm-3 img-thumbnail img-fluid"/>
          <p className="col-sm-3">Kebab</p>
          <p className="col-sm-3">Minuman</p>
          <p className="col-sm-3">Lokasi</p>
        </div>
        <div className="col-sm-5">
        </div>
        <div className="col-sm-3">
          <p className="col-sm-4">Story</p>
          <p className="col-sm-4">Kontak</p>
          <p className="col-sm-4">Karir</p>
        </div>
      </div>
    );
  }


}

export default HeaderBarView;
