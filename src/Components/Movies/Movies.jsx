import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Movies() {
  let [movies, setMovies] = useState([]);
  
  const navigate = useNavigate();
  const imgPrevix = 'https://image.tmdb.org/t/p/original';

  async function getMovies(){

    let {data} = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6720593441437f7455a45105576b53a8');
    setMovies(data.results);
  
  }

  
  function goToMovie(movieID){

    navigate({
      pathname: '/MovieDetails',
      search: `?movieID=${movieID}`
    });
  }

  useEffect(()=>{
    getMovies();
  },[]);
  return (
    <div className='section movies-sec'>
      {movies.map((movie, index) =><div key={index} className='movie-Box'>
        <img onClick={()=> goToMovie(movie.id)} src={imgPrevix + movie.poster_path} alt='Movie Image' className='w-100'></img>
        <h3 className='h6 text-center mt-3'>{movie.original_title}</h3>
       </div>
      )}
    </div>
  )
}
