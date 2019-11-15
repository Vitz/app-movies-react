import React from 'react'
import './Player.css'
import Movie from './Movies/Movie'
import Servers from './Servers'
import $ from 'jquery';


class Player extends React.Component {
    state = {
        movie: { "movie_id": "1", "img_url": "https://m.media-amazon.com/images/M/MV5BMTYyOTUwNjAxM15BMl5BanBnXkFtZTgwODcyMzE0NDM@._V1_SX101_CR0,0,101,150_.jpg", "score": "0.0", "title": "None", "key": "0", "rating_amount": "0" },
    }



    getLastUrlSegment() {
        var parts = window.location.href.split('/');
        var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
        return lastSegment;
    }

    componentDidMount() {
        fetch('http://django-rest-api-imdb.herokuapp.com/movies/?format=json&movie_id=' + this.getLastUrlSegment(), {
            method: 'GET'
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ movie: data.results[0] })
            })
            .catch(console.log)
    }
    stopVid() {
        console.log("asdasdas")
        alert("yes")


    }

    render() {
        const movie = this.state.movie;
        return (
            <div>
                <div className="row p-auto m-4">
                    <div className="col-sm-9 d-flex justify-content-center video-bg"  >
                        <video onLoad={console.log.bind(this)} id="vid" className="img-fluid z-depth-1 " autoPlay loop controls muted>
                            <source src="https://imdb-video.media-imdb.com/vi2508831257/1434659607842-pgv4ql-1540843135385.mp4?Expires=1573905091&Signature=vRVD~7ZQU4gtNS4G0PZI2PE0Cr5my2rIWigIc~CJ3z-KgaRJA6GHgCe6H6bSCvyxfN8BVb~nzVcAfLOhmVBHIRPwcsOXxZc4CSK8l8ylg5p9dOeZMYuk2Zm7jcmVyvT7WwFniSuJu6WQvNwIoOJsY7bhUoaMXw0yDJd-aAwnE17pKW8jEpxNJ1pCBxZLb5jYMNCPQmfEbN2kxbDdtCSQBDr6yXSMhAVZs5RRN6mvdMO48jWN-qBX31T2ezSqHdff1EYNOtjbFSYSIPWuD6njPL7ZkRZqf~gr5CjuoqwNpxkosylMw-ns00WnsfUbtlY2jFlgaRqTBSAAwzi-YPmTbQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" type="video/mp4" />
                        </video>
                    </div>

                    <div className="col-sm-3 ">
                        <ul className="list-group-item list-group-item-dark" >Sezon 1</ul>
                        <ul className="list-group border border-dark">
                            <li className="list-group-item list-group-item-secondary">Odcinek 1</li>
                            <li className="list-group-item list-group-item-secondary">Odcinek 2</li>
                            <li className="list-group-item list-group-item-secondary">Odcinek 3</li>
                            <li className="list-group-item list-group-item-secondary">Odcinek 4</li>
                            <li className="list-group-item list-group-item-secondary">Odcinek 5</li>
                        </ul>
                        <br />
                        <ul className="list-group-item  list-group-item-dark">Sezon 2</ul>
                        <ul className="list-group border border-dark">
                            <li className="list-group-item list-group-item-secondary"><a href="/"> Odcinek 1</a></li>
                            <li className="list-group-item list-group-item-secondary">Odcinek 2</li>
                            <li className="list-group-item list-group-item-secondary">Odcinek 3</li>
                            <li className="list-group-item list-group-item-secondary">Odcinek 4</li>
                            <li className="list-group-item list-group-item-secondary">Odcinek 5</li>
                        </ul>
                    </div>
                </div>
                <div className="row movie-with-desc p-auto m-4 shadow-lg ">
                    <Movie className="movie col-sm-2 border m-auto" src={movie.img_url} src={movie.img_url} score={movie.rating_avg} title={movie.title} rating_amount={movie.rating_amount} />
                    <div className="movie-desc col-sm-9 my-3" >
                        <p className="m-4 border">Video</p>
                        <Servers />

                        <p className="m-4 border">Opis</p>
                        <p className="text-center"> Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. </p>
                    </div>
                </div >
            </div >
        )
    }
}
export default Player;
