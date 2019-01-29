import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

import './FooterView.css';

class FooterView extends Component {
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

        <div className="container-fluid black_Background">
          <div className="row">
            <div className="col-sm-12 col-md-2">
                <img src={require('../Images/kabobs-logo.svg')} className="img-size img-responsive img-fluid dis-inline"/>                    
                <p>&copy; Kabobs {new Date().getFullYear()} Copyright</p>                     
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="col-sm-12 col-md-3">
                  <ul className="list-unstyled acount-icon">
                    <li>
                      <a className="text-sm-center " href="#!">Story</a>
                    </li>
                    <li>
                      <a href="#!">Kontak</a>
                    </li>
                    <li>
                      <a href="#!">Karir</a>
                    </li>
                  </ul>                                    
                </div>
                <div className="col-sm-12 col-md-3">
                  <ul className="list-unstyled acount-icon">
                    <li>
                      <a href="#!">Alacarte</a>
                    </li>
                    <li>
                      <a href="#!">Combo Hemat</a>
                    </li>
                    <li>
                      <a href="#!">Combobs</a>
                    </li>
                    <li>
                      <a href="#!">Minuman</a>
                    </li>
                  </ul>                                    
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="footer-col-item">
                    <h5>Dapatkan email tentang promo, menu baru dan lowongan pekerjaan.</h5>
                    <form className="signUpNewsletter" action="" method="get">
                      <input className="gt-email form-control" placeholder="Alamat Email" type="text" />
                      <input className="btn-go" value="Ok" type="button" />
                    </form>
                  </div>                                    
                </div>                      
            </div>
            <div className="col-sm-12 col-md-4">
                <div className="col-sm-12 col-md-7">
                  <span className="acount-icon2">       
                     <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i>@kabobs.id</a>
                     <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i>@kabobs.id</a>
                     <a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i>kabobs.id@gmail.com</a>
                   </span>                                   
                </div>
                <div className="col-sm-12 col-md-4">
                    <p className="title2 text-sm-center text-lg-left ">Management Office</p>
                    <p className="title3 text-lg-left text-sm-center">Management Office Outlet Dago Lt. 2 Jl. Ir. H. Djuanda No. 310, Kota Bandung 40135</p>                                    
                </div>                   
            </div>
          </div>          
        </div>      

      </div>    
        
    );
  }


}

export default FooterView;
