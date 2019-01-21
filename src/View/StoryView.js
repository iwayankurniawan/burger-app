import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class StoryView extends Component {
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
      {/*Main Image*/}
        <div className="row">
          <p>Image</p>
        </div>

      {/*Story 2016*/}
        <div className="row">
          <div className="col-sm-4">
            <p className="row">2016</p>
            <p className="row">Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet</p>
          </div>
          <div className="col-sm-8">
            <p>Image</p>
          </div>
        </div>

        {/* Story Premium Luar Dalam*/}
        <div className="row">
          <div className="col-sm-8">
            <p>Image</p>
          </div>
          <div className="col-sm-4">
            <p className="row">Premium Luar Dalam</p>
            <p className="row">Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet</p>
          </div>
        </div>

        {/*Story 2017*/}
        <div className="row">
          <div className="col-sm-4">
            <p className="row">2017 - Ekspansi</p>
            <p className="row">Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet</p>
          </div>
          <div className="col-sm-8">
            <p>Image</p>
          </div>
        </div>

        {/* Story Saat Ini*/}
        <div className="row">
          <div className="col-sm-8">
            <p>Image</p>
          </div>
          <div className="col-sm-4">
            <p className="row">Saat Ini</p>
            <p className="row">Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet</p>
          </div>
        </div>

      </div>

    );
  }


}

export default StoryView;
