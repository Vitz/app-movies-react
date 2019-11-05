import React from 'react';
import './Nav.css';

class Logo extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <img className="img-fluid" src="https://placehold.it/90x90&text=Other" alt="company logo" />
          </div>
          <div className="col-sm-10">
            <img className="img-fluid" src="https://placehold.it/728x90&text=Other" alt="advertisement" />
          </div>
        </div>
      </div>
    )
  }
}

export default Logo;
