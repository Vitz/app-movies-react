import React from 'react';
import './Nav.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" href="/">
          <img src="https://png2.cleanpng.com/sh/63c5cba8e6b11ffe4e9608fafc25df3d/L0KzQYm3VMI2N5RBiZH0aYP2gLBuTfdzaaoyj9H1Zj3vf7j2TgBpd6V0fARqcHj8Pcj2jPYudJDsh58AYXWzQYXpWcFka2RqSZCAMkC5RYm5VsE2OmU7S6YDMEm0QYiBTwBvbz==/kisspng-gray-wolf-logo-photography-wolf-logo-5ae014b91cc3e1.5206582615246348091178.png" width="30" height="30" alt="" />
        </a>
        <a className="navbar-brand" href="/">wildMovies</a>
        <ul className="navbar-nav mr-auto">
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item  ml-auto">
            <a href="/vip" className="nav-link">Konto VIP</a>
          </li>
          <li className="nav-item  ml-auto">
            <a href="/movies" className="nav-link">Filmy</a>
          </li>
          <li className="nav-item ml-auto">
            <a  href="/series" className="nav-link">Seriale</a>
          </li>
          <li className="nav-item">
            <a href="/top100" className="nav-link">Top 100</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Konto</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Login</a>
              <a className="dropdown-item" href="#">Rejestracja</a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
