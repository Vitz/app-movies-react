import React from 'react';
import './Nav.css';


class Main extends React.Component {
  render() {
    return (
        <div className="row">
          <div className="col-sm-8">
            <p><img  className="img-fluid border"  src="https://i.pinimg.com/originals/55/3a/da/553ada2b9135a3ccdfaaaf31346403dd.png" alt="main article " /></p>
          </div>
          <div className="col-sm-4">
            <div className="">
              <p><img className="img-fluid border "  src="http://cdn3.whatculture.com/images/2018/06/1c291705ac30edae-600x338.jpg" alt="article promo " /></p>
            </div>
            <div className="">
              <p><img className="img-fluid border "  src="https://www.thesun.co.uk/wp-content/uploads/2017/05/nintchdbpict000327985863.jpg" alt="advertisement" /></p>
            </div>
          </div>      
        </div>
    );
  }
}

export default Main;
