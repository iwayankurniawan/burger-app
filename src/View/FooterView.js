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
        <MDBFooter color="blue" className="font-small pt-4 mt-4 black_Background text-color-white">
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                  <MDBCol md="3">
                    <img src={require('../Images/kabobs-logo.svg')} className="img-size img-responsive img-fluid dis-inline"/>
                    <div className="footer-copyright text-center py-3">
                      <MDBContainer fluid>
                        &copy; Kabobs {new Date().getFullYear()} Copyright
                      </MDBContainer>
                    </div>
                  </MDBCol>
                  <MDBCol md="5">
                    <MDBCol md="3">                      
                      <ul className="list-unstyled">
                        <li className="list-unstyled text-center">
                          <a href="#!">Story</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#!">Kontak</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#!">Karir</a>
                        </li>
                      </ul>
                    </MDBCol>
                    <MDBCol md="3">                      
                      <ul className="list-unstyled">
                        <li className="list-unstyled text-center">
                          <a href="#!">Alacarte</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#!">Combo Hemat</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#!">Combobs</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="#!">Minuman</a>
                        </li>
                      </ul>
                    </MDBCol>
                    <div className="col-sm-6">
                                <div className="footer-col-item">
                                  <h5>Dapatkan email tentang promo, menu baru dan lowongan pekerjaan.</h5>
                                  <form className="signUpNewsletter" action="" method="get">
                                    <input className="gt-email form-control" placeholder="Alamat Email" type="text" />
                                    <input className="btn-go" value="Ok" type="button" />
                                  </form>
                        </div>
                    </div>                   
                  </MDBCol>
                  <MDBCol md="4">
                    <h4 className="title">My Account</h4>
                    <i class="fab fa-instagram"></i>
                      <span className="acount-icon">
                        <MDBIcon icon="camera-retro" size="lg"/> 
                        <p><MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />amber-text</p>         
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i> List</a>
                        <a href="#"><i className="fa fa-users" aria-hidden="true"></i>Group</a>
                        <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Profile</a>
                        <a href="#"><i className="fa fa-globe" aria-hidden="true"></i> Language</a>           
                      </span>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              
            </MDBFooter> 
    );
  }


}

export default FooterView;
