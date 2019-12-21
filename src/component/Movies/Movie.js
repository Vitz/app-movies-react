
import React from 'react';
import './Movies.css'
import ReactDOM from 'react-dom';
import { func } from 'prop-types';



class Movie extends React.Component {
  state = {lastStarsSet : null}

  buildStarRow(score) {
    if (score != null) {
      let filledStars = parseInt(score)
      let emptyStars = 5 - filledStars
      let halfStar = 0
      let starsFloat = parseFloat(score)
      let remainder = starsFloat - parseFloat(filledStars)
      if (remainder > 0.25 && remainder < 0.75) {
        halfStar = 1
        emptyStars = emptyStars - 1
      }
      
      return (<div className="text-warning stars-list" >{this.pritnStars(filledStars, 1)}{this.pritnStars(halfStar, 2)}{this.pritnStars(emptyStars, 3)}</div>)
    }
  }

  handleMouseEnter(e) {
    const star = e.target
    var starLine = star.parentElement
    var stateStarsList = []

    starLine.childNodes.forEach(function(star){
      stateStarsList.push(star.classList.value)
  });

  this.setState({lastStarsSet : stateStarsList})

    var starTmpForPrev = star
    var starTmpForNext = star
    while(starTmpForPrev.previousSibling != null){
      starTmpForPrev.classList = "single-star fas fa-star"
      starTmpForPrev = starTmpForPrev.previousSibling 
    }
    starTmpForPrev.classList = "single-star fas fa-star"

    while(starTmpForNext.nextSibling != null){
      starTmpForNext.classList = "single-star far fa-star"
      starTmpForNext = starTmpForNext.nextSibling 
    }
    star.classList = "single-star fas fa-star text-danger"
  }

  handleMouseLeave(e) {  
    const star = e.target
    var starLine = star.parentElement
    var stateStarsList = this.state.lastStarsSet
    starLine.childNodes.forEach(function(star, i ){
      star.classList = stateStarsList[i]
      });
  }

  pritnStars(num, type) { 
    return ([...Array(num)].map(function (_, starId) {
      if (type === 1)
        return (<i  onMouseEnter={(e) => this.handleMouseEnter(e)}  onMouseLeave={(e) => this.handleMouseLeave(e)}  className="single-star fas fa-star" key={starId}></i>);
      else if (type === 2)
        return (<i   onMouseEnter={(e) => this.handleMouseEnter(e)}  onMouseLeave={(e) => this.handleMouseLeave(e)} className="single-star fas fa-star-half-alt" key={starId}></i>);
      else
        return (<i  onMouseEnter={(e) => this.handleMouseEnter(e)}  onMouseLeave={(e) => this.handleMouseLeave(e)} className="single-star far fa-star" key={starId}></i>);
    }, this)
    )
  }


  render() {
    return (
      <div className={this.props.className}>
        <div className="movie-box">
          <a href={"watch/" + this.props.movie_id}>
            <div className="movie-cover">
              <img id={"movie_img_" + this.props.movie_id} className="img-fluid border border-dark" onMouseLeave={(id) => this.showStartIcon("movie_img_" + this.props.movie_id)} onMouseEnter={(id) => this.showStartIcon("movie_img_" + this.props.movie_id)} src={this.props.src} alt={this.props.title} />
              <div className="overlay img-fluid ">
                  <i className="icon fa fa-play"></i>
              </div>
            </div>
          </a>
          <div>
            <div className="movie-title"><a href={"watch/" + this.props.movie_id}>{this.props.title}</a></div>

            <div className="stars">
              <h6>{this.props.score} ({this.props.rating_amount} ocen)</h6>

              {
                this.buildStarRow(this.props.score)
              }
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;