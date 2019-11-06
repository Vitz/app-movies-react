import React from 'react'
import './Player.css'

class Player extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-9">
                    <video class="img-fluid z-depth-1" autoplay loop controls muted>
                        <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="col-sm-3 ">
                    <ul class="list-group-item list-group-item-dark">Sezon 1</ul>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-secondary">Odcinek 1</li>
                        <li class="list-group-item list-group-item-secondary">Odcinek 2</li>
                        <li class="list-group-item list-group-item-secondary">Odcinek 3</li>
                        <li class="list-group-item list-group-item-secondary">Odcinek 4</li>
                        <li class="list-group-item list-group-item-secondary">Odcinek 5</li>
                    </ul>
                    <br/>
                    <ul class="list-group-item  list-group-item-dark">Sezon 2</ul>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-secondary">Odcinek 1</li>
                        <li class="list-group-item list-group-item-secondary">Odcinek 2</li>
                        <li class="list-group-item list-group-item-secondary">Odcinek 3</li>
                        <li class="list-group-item list-group-item-secondary">Odcinek 4</li>
                        <li class="list-group-item list-group-item-secondary">Odcinek 5</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Player;