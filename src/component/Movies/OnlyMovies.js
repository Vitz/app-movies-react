import React from 'react';
import MoviesList from './MoviesList';

class OnlyMovies extends React.Component{
  state = {
    movies: [{"img":"https://placehold.it/400x200&text=Other new movie"},{"img":"https://placehold.it/400x200&text=Other movie"},{"img":"https://placehold.it/400x200&text=Other movie"}],
    limit:6 
  }

  componentDidMount() {
      fetch('http://django-rest-api-imdb.herokuapp.com/movies/?format=json', {  
      method: 'GET'
      })
    .then(res => res.json())
    .then((data) => {
      this.setState({ movies: data.results })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div> 
       <MoviesList name={this.props.name} movies={this.state.movies}/> 
       </div>
    );
  }
}

export default OnlyMovies;
