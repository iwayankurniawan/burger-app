import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
'mdbreact';

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

class HomeViewSlides extends Component {
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

      <Carousel autoplay>
          <div>
              <img src={require('./ImagesView/Blackpepper-Kebab.jpg')} />
              <h1 className="legend">Blackpepper Kebab 1</h1>
          </div>
          <div>
              <img src={require('./ImagesView/Blackpepper-Kebab.jpg')} />
              <p className="legend">Blackpepper Kebab 2</p>
          </div>
          <div>
              <img src={require('./ImagesView/Blackpepper-Kebab.jpg')} />
              <p className="legend">Blackpepper Kebab 3</p>
          </div>
          <div>
              <img src={require('./ImagesView/Blackpepper-Kebab.jpg')} />
              <p className="legend">Blackpepper Kebab 4</p>
          </div>
      </Carousel>


        
      </div>
      

    );
  }
}

export default HomeViewSlides;
