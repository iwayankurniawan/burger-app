import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class HomeViewStory extends Component {
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
          <div className="col-sm-1">              
          </div>
          <div className="col-sm-6">
              <img src={require('./ImagesView/LandingPage/model.png')} className="img-responsive img-fluid img-title"/>
          </div>
          <div className="col-sm-4">
            <h1>Kebabs Premium Kebabs</h1>
            <p>Hadir sebagai teman yang memberikan rasa kenyang dan rasa nyaman. Menyajikan berbagai olahan kebab dengan banyak varian rasa dan aneka minuman. Bisa ditemui di 18 gerai di Kota Bandung dengan crew outlet yang senantiasa memberikan pelayanan dan senyum terbaik mereka.</p>
            <div className="row">
            <button type="button" class="btn btn-outline-secondary btn-lg button-style">Kabobs Story</button>
          </div>
          </div>
      </div>

    );
  }
}

export default HomeViewStory;
