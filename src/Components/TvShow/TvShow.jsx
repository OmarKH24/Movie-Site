import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function TvShow() {
  let [TvShows, setTvShows] = useState([]);
  
  const navigate = useNavigate();
  const imgPrevix = 'https://image.tmdb.org/t/p/original';

  async function getTvShows(){

    let {data} = await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=6720593441437f7455a45105576b53a8');
    setTvShows(data.results);
  }

  
  function goToMovie(movieID){

    navigate({
      pathname: '/MovieDetails',
      search: `?movieID=${movieID}`
    });
  }

  useEffect(()=>{
    getTvShows();
  },[]);
  return (
    <div className='section movies-sec'>
    {TvShows.map((TvShow, index) =><div key={index} className='movie-Box'>
      <img onClick={()=> goToMovie(TvShow.id)} src={imgPrevix + TvShow.poster_path} alt='Movie Image' className='w-100'></img>
      <h3 className='h6 text-center mt-3'>{TvShow.name}</h3>
     </div>
    )}
  </div>
  )
}
