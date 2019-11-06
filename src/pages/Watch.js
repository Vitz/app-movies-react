import React from 'react'
import Player from '../component/Player'
import MostScored from '../component/Movies/MostScored';


class Watch extends React.Component{
    render(){
        return (
            <div className="container">
            <Player />
            <MostScored name="Popular" limit="6"  />
            </div>
        )
    }
}
export default Watch;