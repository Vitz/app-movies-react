import React from 'react'
import './Player.css'
import Movie from './Movies/Movie'
import Servers from './Servers'
import $ from 'jquery';
import Tags from "../component/Tags"


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



    loaded() {
        setTimeout(() => {
            $("#video").remove();
            // $("#video-div").css("display", "none");
            $("#video-sms").css("display", "block");
        }, 10000);
    }

    render() {
        const movie = this.state.movie;
        return (
            <div>
                <div className="row p-auto m-4">
                    <div className="col-sm-9 d-flex justify-content-center video-bg"  >
                        <div id="video-div" className="embed-responsive embed-responsive-16by9">
                            <iframe id="video" onLoad={this.loaded} className="embed-responsive-item" src="https://www.youtube.com/embed/uYSo9vMrHjw?rel=0&autoplay=1&controls=0&modestbranding=0&fs=0&showinfo=0&version=3&enablejsapi=1" allowFullScreen></iframe>
                            <div className="yt-title">{movie.title}</div>
                        </div>
                        <div id="video-sms" className="border p-2 my-2">
                        Aby przejść dalej wyślij SMS na numer 6969 o treści xxx i wpisz kod poniżej (koszt 1,22zł)
                        
                       <div className= "sms-div">
                        <form className="form-sms">
                            <div className="form-group">
                                <label for="code">Kod SMS</label>
                                <input type="text" className="form-control" id="sms-code" placeholder="1234" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="accept" />
                                <label className="form-check-label" for="accept">Akceptuje regulamin</label>
                            </div>
                            <button type="submit" className="btn btn-dark">Użyj kodu</button>
                        </form>
                        </div>
                        </div>

                    </div>                 

                    <div className="col-sm-3 ">

                         <Tags />                        <br />


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
