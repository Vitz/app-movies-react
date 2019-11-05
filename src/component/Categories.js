import React from 'react';
import './Categories.css'

class Categories extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-sm-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary collapse justify-content-center ">
        <ul className="navbar-nav ">
                  <li className="nav-item "><a className="nav-link" href="/Action">Action</a></li>
                  <li className="nav-item "><a className="nav-link" href="/Comedy">Comedy</a></li>
                  <li className="nav-item "><a className="nav-link" href="/Crime">Crime</a></li>
                  <li className="nav-item "><a className="nav-link" href="/Drama">Drama</a></li>
                  <li className="nav-item "><a className="nav-link" href="/Thriller">Thriller</a></li>
                  <li className="nav-item "><a className="nav-link" href="/about">Horror</a></li>
                </ul>
            
      </nav>
      </div>
      </div>
      </div>

    );
  }
}

export default Categories;
