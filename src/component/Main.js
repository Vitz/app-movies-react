import React from 'react';
import './Nav.css';


class Main extends React.Component {
  render() {
    return (
        <div className="row">
          <div className="col-sm-8">
            <p><img  className="img-fluid"  src="https://placehold.it/900x450&text=A mowie sceen with text on" alt="main article " /></p>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <p><img className="img-fluid"  src="https://placehold.it/400x200&text=Other movie" alt="article promo " /></p>
            </div>
            <div className="row">
              <p><img className="img-fluid"  src="https://placehold.it/400x200&text=Other movie" alt="advertisement for deep fried Twinkies" /></p>
            </div>
          </div>      
        </div>
    );
  }
}

export default Main;
