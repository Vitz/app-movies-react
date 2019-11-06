import React from 'react';
import './Movies.css'
import '../../index.css'
import Movie from './Movie'


class MoviesList extends React.Component {

  render() {
    const movies = this.props.movies
    return (
      <div className="row">
        <div className="col-sm-12 section-header">
          <h2 className="text-center">{this.props.name}</h2>
        </div>
        <div className="row">
          {
            movies.map(function (movie, idMovie) {
              return (<Movie className="col-sm-2 movie" src="https://placehold.it/200x300&text=Other new movie" score={movie.rating_avg} title={movie.title} key={idMovie} rating_amount={movie.rating_amount} />);
              // return (<Movie src={movie.img} alt={movie.title} key={idMovie} />);

            })
          }
        </div>
      </div>
    );
  }
}



export default MoviesList;
