import React from 'react'
import TopScored from '../component/Movies/TopScored'

class Top100 extends React.Component{
    render()
    {
        return(
            <div className="container">
                <TopScored name="Top Scored" limit="33"/>
                <TopScored name="Top Watched" limit="33" />
                <TopScored name="Last Added"  limit="33"/>
            </div>
        )
    }
}
export default Top100;