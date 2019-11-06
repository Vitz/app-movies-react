import React from 'react'
import Main from '../component/Main'
import TopRating from '../component/Movies/TopRating'
import MostScored from '../component/Movies/MostScored'
import LastAdded from '../component/Movies/LastAdded';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Main/>
                <MostScored name="Popular" limit="6"  />
                <LastAdded name="Last Added" limit="6" />
                <TopRating name="Top Scored" limit="6" />
            </div>

        )
    }
}
export default Home;
