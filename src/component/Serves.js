import React from 'react';

class Servers extends React.Component {
  render() {
    const links = this.props.links
    return (
      <div>
        <ul>{
          links.map(function (link, idLink) {
            return (<SingleServerLink link={link} key={idLink}/>)
          })}
        </ul>
      </div>
    )
  }
}


class SingleServerLink extends React.Component {
  extractServerName(link){ 
    // splitBySlash?
    // httpPart =
    // hostPart = 

    return link
  }
  render() {
    return (
          <a href={this.props.link}>{extractServerName(this.props.link)}</a>
          )
        }
      }
      
  export default Servers;