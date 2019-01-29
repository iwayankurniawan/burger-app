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
      <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-xs-12" >          
                  <img src={require('./ImagesView/kabobs-slogan@2x.png')} alt="" className="img-fluid img-width img-responsive"/>
                  <a className="btn btn-default btn-light btn-lg m-2 bg-white rounded-circle" href="#" role="button">Menu</a>
                  <a className="btn btn-default btn-light btn-lg m-2 bg-white rounded-circle" href="#" role="button">Outlet</a> 
              </div>            
              <div className="col-sm-6 col-xs-12" >
                <img src={require('./ImagesView/photo-classic-kebab@3x.png')} alt="" className="img-fluid img-width2 img-responsive"/>
              </div>
              <div className="col-sm-6 col-xs-12" >          
                      <img src={require('./ImagesView/LandingPage/model.png')} alt="" className="img-fluid"/> 
                </div>            
                <div className="col-sm-6 col-xs-12" >
                    <h1>Kebabs Premium Kebabs</h1>
                    <p>Hadir sebagai teman yang memberikan rasa kenyang dan rasa nyaman. Menyajikan berbagai olahan kebab dengan banyak varian rasa dan aneka minuman. Bisa ditemui di 18 gerai di Kota Bandung dengan crew outlet yang senantiasa memberikan pelayanan dan senyum terbaik mereka.</p>
                    <button type="button" className="btn btn-outline-secondary btn-lg button-style">Kabobs Story</button>
                </div>
          </div>

          
        {/*<div className="how-section1 background-diagonal">
          <div className="col-sm-4 home-title svg-container background-diagonal">
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

        */}

        {/*<div className="how-section1 background-diagonal">
          <header id="header2">
            <div className="box"></div>
            <h2 className="caption">Summer<br/>Collection</h2>
            <img src="http://www.pngall.com/wp-content/uploads/2016/05/Model-PNG-HD.png" className="" alt=""/>
            <button className="btn btn-light action">Call to Action</button>
          </header>

        */}

          
          
            
        
      

          {/*<div className="how-section1 background-diagonal">*/}
            {/*
              <div className="row">
                <div className="col-sm-4">
                    <h4>Get hired quickly</h4>
                                <h4 className="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4>
                                <p className="text-muted">Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for.
                                    Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs.
                                    Do substantial work with top clients. GetLance pricing encourages freelancers to use GetLance for repeat relationships with their clients.</p>
                </div>
                <div className="col-sm-8 how-img">
                    <img src={require('./ImagesView/photo-classic-kebab@3x.png')} className="rounded-circle img-fluid" alt=""/>
                </div>
            </div>
            </div>

            */}

            
          
        


      </div>

    );
  }
}

export default HomeView;
