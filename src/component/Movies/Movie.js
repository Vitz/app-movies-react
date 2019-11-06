
import React from 'react';
import './Movies.css'


class Movie extends React.Component {
    buildStarRow(score) {
      if (score != null) {
        let filledStars = parseInt(score)
        let emptyStars = 5 - filledStars
        let halfStar = 0
        let starsFloat = parseFloat(score)
        let remainder = starsFloat - parseFloat(filledStars)
        console.log(remainder)
        if (remainder > 0.25 && remainder < 0.75) {
          halfStar = 1
          emptyStars = emptyStars - 1
        }
        return (<div>{this.pritnStars(filledStars, 1)}{this.pritnStars(halfStar, 2)}{this.pritnStars(emptyStars, 3)}</div>)
      }
    }
  
    pritnStars(num, type) {
      return ([...Array(num)].map(function (star, starId) {
        if (type === 1)
          return (<i className="fas fa-star" key={starId}></i>);
        else if (type === 2)
          return (<i className="fas fa-star-half-alt" key={starId}></i>);
        else
          return (<i className="far fa-star" key={starId}></i>);
      })
      )
    }
    
    render() {
      return (
        <div className={this.props.className}>
          <p><img className="img-fluid" src={this.props.src} alt={this.props.title} /></p>
          <div>
            <h5><a href="watch/">{this.props.title}</a></h5>
            <h6>{this.props.score} ({this.props.rating_amount} ocen)</h6>
  
            <div className="text-warning">
              {
                this.buildStarRow(this.props.score)
              }
            </div>
          </div>
        </div>)
    }
  }

  export default Movie;