import React from 'react'
import OnlyMovies from '../component/Movies/OnlyMovies'

class Movies extends React.Component {
    render() {
        return (
            <div className="container">
                <OnlyMovies name="Movies" limit="36" category="" />
            </div>
        )
    }
}
export default Movies;