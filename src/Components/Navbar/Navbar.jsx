import React from 'react'
import {Link} from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage.jsx'

export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light ">
  <h2 className="logo navbar-brand">Noxe</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="first-nav-list navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="home">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="movies">Movies</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="TvShow">Tv Show</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="People">People</Link>
      </li>
    </ul>

    <ul className="second-nav-list navbar-nav ms-auto">
      <li className="nav-item">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </li>
      <li className="nav-item">
        <div className='pag-details-icons '>
          <a href=''><i className="fa-brands fa-facebook"></i></a>
          <a href=''><i className="fa-brands fa-youtube"></i></a>
          <a href=''><i className="fa-brands fa-instagram"></i></a>
          <a href=''><i className="fa-brands fa-twitter"></i></a>
        </div>      
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="LoginPage">Log In</Link>
      </li>
    </ul>
    
  </div>
</nav>

  )
}
