import React from 'react'
import TopRating from '../component/Movies/TopRating'
import MostScored from '../component/Movies/MostScored'
import LastAdded from '../component/Movies/LastAdded';

class Top100 extends React.Component{
    render()
    {
        return(
            <div className="container">
                <LastAdded name="Last Added"  limit="33"/>
                <TopRating name="Top Scored" limit="33"/>
                <MostScored name="Most rated" limit="33" />
            </div>
        )
    }
}
export default Top100;