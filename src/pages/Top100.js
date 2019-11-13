import React from 'react'
import TopRating from '../component/Movies/TopRating'
import MostScored from '../component/Movies/MostScored'
import LastAdded from '../component/Movies/LastAdded';

class Top100 extends React.Component{
    render()
    {
        return(
            <div className="container">
                <LastAdded name="Last Added"  limit={this.props.limit} category={this.props.category}/>
                <TopRating name="Top Scored" limit={this.props.limit} category={this.props.category}/>
                <MostScored name="Most rated" limit={this.props.limit}  category={this.props.category}/>
            </div>
        )
    }
}
export default Top100;