import React from 'react';
import './Categories.css'

class Categories extends React.Component {
  render() {
    return (
      <div className="container my-4 ">
        <div className="row">
        <div className="col-sm-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary collapse justify-content-center ">
        <ul className="navbar-nav">
                  <li className="nav-item px-md-4"><a className="nav-link nav-link-genre" href="/Action">Action</a></li>
                  <li className="nav-item px-md-4"><a className="nav-link nav-link-genre" href="/Comedy">Comedy</a></li>
                  <li className="nav-item px-md-4"><a className="nav-link nav-link-genre" href="/Crime">Crime</a></li>
                  <li className="nav-item px-md-4"><a className="nav-link nav-link-genre" href="/Drama">Drama</a></li>
                  <li className="nav-item px-md-4"><a className="nav-link nav-link-genre" href="/Thriller">Thriller</a></li>
                  <li className="nav-item px-md-4"><a className="nav-link nav-link-genre" href="/Horror">Horror</a></li>
                </ul>
            
      </nav>
      </div>
      </div>
      </div>

    );
  }
}

export default Categories;
