import React from 'react';
import './Movies.css'
import '../../index.css'

class MoviesList extends React.Component {

  render() {
    const movies = this.props.movies
    return (
      <div className="row">
        <div className="col-sm-12 section-header">
          <h2  className="text-center">{this.props.name}</h2>
        </div>
        <div className="row">
          {
            movies.map(function (movie, idMovie) {
              return (<Movie src="https://placehold.it/400x200&text=Other new movie" score={movie.rating_avg} title={movie.title} key={idMovie} />);
              // return (<Movie src={movie.img} alt={movie.title} key={idMovie} />);

            })
          }
        </div>
      </div>
    );
  }
}

class Movie extends React.Component {
  render() {
    return (
      <div className="col-sm-4 movie">
        <p><img className="img-fluid" src={this.props.src} alt={this.props.title} /></p>
        <div>
          <h6>{this.props.title} </h6>
          <div className="text-warning">
            {this.props.score}
            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
          </div>
        </div>
      </div>)
  }
}

export default MoviesList;
