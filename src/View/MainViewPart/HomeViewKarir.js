import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class HomeViewKarir extends Component {
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
        <div className="col-sm-8">
            <img src={require('./ImagesView/LandingPage/good-employer-image.png')} className="img-responsive img-fluid img-title"/>
        </div>
        <div className="col-sm-4">
          <h1>AYO BERKARIR BERSAMA KABOBS!</h1>
          <p>KABOBS mengedepankan etos kerja yang baik dan suasana kekeluargaan.</p>
          <div className="row">
          <button type="button" className="btn btn-outline-secondary btn-lg button-style">Posisi yang tersedia</button>
        </div>
        </div>
      </div>

    );
  }
}

export default HomeViewKarir;
