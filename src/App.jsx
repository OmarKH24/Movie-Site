import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Movies from './Components/Movies/Movies.jsx'
import TvShow from './Components/TvShow/TvShow.jsx'
import People from './Components/People/People.jsx'
import About from './Components/About/About.jsx'
import Networks from './Components/Networks/Networks.jsx'
import Error from './Components/Error/Error.jsx'
import LoginPage from './Components/LoginPage/LoginPage.jsx'
import MovieDetails from './Components/MovieDetails/MovieDetails.jsx'

import { Route, Routes } from 'react-router'

export default function App() {
  return (
    <div>
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="Home" element={<Home />}></Route>
            <Route path="Movies" element={<Movies />}></Route>
            <Route path="TvShow" element={<TvShow />}></Route>
            <Route path="People" element={<People />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="Networks" element={<Networks />}></Route>
            <Route path="LoginPage" element={<LoginPage />}></Route>
            <Route path="MovieDetails" element={<MovieDetails />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
    </div>
  )
}
