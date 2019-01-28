import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import './LocationView.css';

class LocationView extends Component {
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
        <div className="row location-background">
          <p>Outlet</p>
        </div>
        <div className="col-sm-6 location-background-white">
          <p>Kabobs memiliki 18 outlet yang tersebar di Kota Bandung dan sekitarnya. Kunjungi outlet Kabobs terdekat bersama teman, keluarga atau pasangan. Kamu juga bisa memesan Kabobs melalui aplikasi Go-Jek dan Grab.</p>
         </div>
        <div className="col-sm-6 location-background-white">
          <p>Oulet Dago Lt. 2 Jl. Ir. H. Djuanda No. 310, Kota Bandung 40135</p>
          <p>email</p>
          <p>line</p>
          <p>instagram</p>
          <p>Dapatkan email tentang promo, menu baru dan lowongan pekerjaan.</p>
          <p>Insert Email</p>
        </div>
      </div>
    );
  }


}

export default LocationView;
