import React from 'react';

class Servers extends React.Component {      
  runMovie()
  {
    this.video.source = "asd"
  }

  render() {    
    const links = [{link:"www.hosting1.pl", type:"lektor"},{link:"www.hosting1.ru",type:"napisy PL"}]
    // this.props.links
    return (
      <div>
        <ul className="list-group">{
          links.map(function (link, idLink) {
            return (<li className="list-group-item list-group-item-secondary"><SingleServer link={link.link} type={link.type} key={idLink}/></li>)
          })}
        </ul>
      </div>
    )
  }
}


class SingleServer extends React.Component {
  extractServerName(link){ 
    // splitBySlash?
    // httpPart =
    // hostPart = 
    return link
  }
  render() {
    return (
          <a href={this.props.link}>{this.extractServerName(this.props.link)} ({this.props.type})</a>
          )
        }
      }
      
  export default Servers;