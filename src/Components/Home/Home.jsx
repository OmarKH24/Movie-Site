import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Home() {

  const navigate = useNavigate();
  const imgPrevix = 'https://image.tmdb.org/t/p/original';

  let[TrendingMovies, setTrendingMovies] = useState([]);
  let[TrendingTv, setTrendingTv] = useState([]);


  async function getMovies(){
    
    let {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=6720593441437f7455a45105576b53a8');
    setTrendingMovies(data.results);

  }

  async function getTv(){
    
    let {data} = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=6720593441437f7455a45105576b53a8');
    setTrendingTv(data.results);

  }

  const renderMovies = () => {
    
      
    if (!TrendingMovies || TrendingMovies.length === 0) {
      return <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>;
    }

    const renderMovies = [];
    for (let i = 0; i < 10; i++) {

      let imgSrc = imgPrevix + TrendingMovies[i].poster_path;
      let rate = Math.round(TrendingMovies[i].vote_average * 10) / 10;
      const movieId = TrendingMovies[i].id;

      renderMovies.push(
        <div className='trend-Box'>
         <img loading='lazy' width={180} height={270} onClick={()=> goToMovie(movieId)} src={imgSrc} alt='Movie Image' className='w-100'></img>
          <h3 className='h6 text-center mt-3'>{TrendingMovies[i].original_title}</h3>
          <span className='box-rate'>{rate}</span>
        </div>
      );
    }
    return renderMovies;
  };
  const renderTv = () => {
    
      
    if (!TrendingTv || TrendingTv.length === 0) {
      return <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>;
    }

    const renderMovies = [];
    for (let i = 0; i < 10; i++) {

      let imgSrc = imgPrevix + TrendingTv[i].poster_path;
      let rate = Math.round(TrendingTv[i].vote_average * 10) / 10;
      const movieId = TrendingTv[i].id;

      renderMovies.push(
        <div className='trend-Box'>
          <img loading='lazy' onClick={()=> goToMovie(movieId)} src={imgSrc} alt='Tv Image' className='w-100'></img>
          <h3 className='h6 text-center mt-3'>{TrendingTv[i].name}</h3>
          <span className='box-rate'>{rate}</span>
        </div>
      );
    }
    return renderMovies;
  };

  function goToMovie(movieID){

    navigate({
      pathname: '/MovieDetails',
      search: `?movieID=${movieID}`
    });
  }

  useEffect( ()=>{

    getMovies();
    getTv();
  },[]);


  return (
    <div className='section home'>
      <div className='trendRow'>
          <div className='trendRow-details d-flex justify-content-center flex-column text-left w-25'>
            <div className='brd w-25 mb-3'></div>
            <h2>Trending Movies to Watch Now!</h2>
            <p>most Wached movies by days.</p>
            <div className='brd w-100 mt-3'></div>
          </div>
          {renderMovies()}
        </div>
        <div className='trendRow'>
          <div className='trendRow-details d-flex justify-content-center flex-column text-left w-25'>
            <div className='brd w-25 mb-3'></div>
            <h3>Trending TV to Watch Now!</h3>
            <p>most Wached TV by days.</p>
            <div className='brd w-100 mt-3'></div>
          </div>
          {renderTv()}
        </div>

 
    </div>
  )
}
