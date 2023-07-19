import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function MovieDetails() {
  let [searchParams, setSearchParams] = useSearchParams();
  let currId = searchParams.get('movieID');
  const imgPrevix = 'https://image.tmdb.org/t/p/original';

  let [movie, setMovie] = useState();
  let [imgSrc, setImgSrc] = useState('');


  async function getMovie(){

    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${currId}?api_key=6720593441437f7455a45105576b53a8`);
    setMovie(data);
    console.log(data);

  }


  useEffect(()=>{

    getMovie();
  },[]);
  return (
    <div className='section movie-details-section'>
      {movie?
      <>
      <div className='w-75 d-flex justify-content-center align-items-center'>
        <img src={imgPrevix+movie.poster_path} alt='Movie-Det-Img' className='w-100'></img>
      </div>  
      <div className='movie-details d-flex flex-column '>
        <div>
          <h3 className='header'>{movie.original_title} - <span>{movie.original_language}</span></h3>
          <p className='tag'>{movie.tagline}</p>
        </div>
        <div className='d-flex justify-content-around align-items-center'>
          {movie.genres.map((categore, index) =>
          <p key={index} className='ithCategory'>{categore.name}</p> )}
        </div>
        <p className='det'>Vote: {movie.vote_average}</p>
        <p className='det'>Vote Count: {movie.vote_count}</p>
        <p className='det'>Popularity: {movie.popularity}</p>
        <p className='det'>Release Date: {movie.release_date}</p>
        <p className='overview'>{movie.overview}</p>
      </div>
      </>
      :<div className='section section-center'>
          <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
          </div>
        </div>
      }
    </div>
  )
}
