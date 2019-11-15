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
          <h2 className="text-center section-name">{this.props.name}</h2>
        </div>
        <div className="row">
          {
            movies.map(function (movie, idMovie) {
              return (<Movie className="col-sm-2 movie" movie_id={movie.movie_id}    src={movie.img_url}  score={movie.rating_avg} title={movie.title} key={idMovie} rating_amount={movie.rating_amount} />);

            })
          }
        </div>
      </div>
    );
  }
}



export default MoviesList;
