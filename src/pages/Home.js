import React from 'react'
import Main from '../component/Main'
import TopScored from '../component/Movies/TopScored'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Main/>
                <TopScored name="Top Scored" limit="6" />
                <TopScored name="Top Watched" limit="6"  />
                <TopScored name="Last Added" limit="6" />
            </div>

        )
    }
}
export default Home;
