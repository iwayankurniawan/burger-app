import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class HomeViewOutlet extends Component {
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
        <div className="container-fluid">
          <div className="row">                       
              <div className="col-sm-8">
                  <img src={require('./ImagesView/LandingPage/outlet-image.png')} className="img-responsive img-fluid"/>
              </div>
              <div className="col-sm-4">
                <h1>KABOBS MEMILIKI 18 OUTLET YANG TERSEBAR DI KOTA BANDUNG DAN SEKITARNYA.</h1>
                <button type="button" className="btn btn-outline-secondary btn-lg button-style">Semua Outlet</button>
              </div>
          </div>
        </div>


      </div>



    );
  }
}

export default HomeViewOutlet;
