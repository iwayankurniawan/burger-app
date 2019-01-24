import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import './KarirView.css';

class KarirView extends Component {
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
        <div className="row karir-background">
          <p>Karir</p>
        </div>
        <div className="col-sm-6 karir-background-white">
          <p>Kabobs ingin menjadi tempat bekerja yang menyenangkan untuk seluruh Crew Kabobs. Supaya selalu bisa memberikan pelayanan terbaik untuk setiap pelanggan dimanapun mereka berada.</p>
          <h1>Posisi yang tersedia</h1>
          <h2>OUTLET CREW DI OUTLET BIP LT. 3</h2>
          <h2>Marketing</h2>
          <div className="row">
            <button type="button" class="btn btn-outline-secondary btn-lg">Apply</button>
          </div>
        </div>
        <div className="col-sm-6 karir-background-white">
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

export default KarirView;
