import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import './HomeView.css';

class HomeView extends Component {
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
        <div className="col-sm-4 home-title svg-container">
          <div className="svg-container row">
            <svg height="450" width="510" className="svg-container" preserveAspectRatio="none">
              <text fill="#111111" font-size="80" font-family="'Khula', sans-serif" x="50" y="286">MORE</text>
              <text fill="#D92C27" font-size="80" font-family="'Khula', sans-serif" x="275" y="286">MEAT</text>
              <text fill="#111111" font-size="80" font-family="'Khula', sans-serif" x="470" y="286">,</text>

              <text fill="#111111" font-size="80" font-family="'Khula', sans-serif" x="50" y="370">MORE</text>
              <text fill="#43B049" font-size="80" font-family="'Khula', sans-serif" x="275" y="370">VEGIE</text>
              <text fill="#111111" font-size="80" font-family="'Khula', sans-serif" x="485" y="370">,</text>

              <text fill="#111111" font-size="80" font-family="'Khula', sans-serif" x="50" y="450">MORE</text>
              <text fill="#FFCE06" font-size="80" font-family="'Khula', sans-serif" x="275" y="450">FUN!</text>
            </svg>
          </div>
          <div className="row">
            <button type="button" class="btn btn-outline-secondary btn-lg button-style">Menu</button>
            <button type="button" class="btn btn-outline-secondary btn-lg">Outlet</button>
          </div>
        </div>
        <div className="col-sm-8">
            <img src={require('./ImagesView/photo-classic-kebab@3x.png')} className="img-responsive img-fluid img-title"/>
        </div>
      </div>

    );
  }
}

export default HomeView;
