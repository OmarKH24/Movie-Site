import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function People() {
  let [Peoples, setPeoples] = useState([]);
  
  const navigate = useNavigate();
  const imgPrevix = 'https://image.tmdb.org/t/p/original';

  async function getTvShows(){

    let {data} = await axios.get('https://api.themoviedb.org/3/trending/person/day?api_key=6720593441437f7455a45105576b53a8');
    setPeoples(data.results);
  }



  useEffect(()=>{
    getTvShows();
  },[]);
  return (
    <div className='section movies-sec'>
    {Peoples.map((People, index) =><div key={index} className='movie-Box'>
      <img src={People.profile_path? imgPrevix + People.profile_path:'./avatar-03.png'} alt='Movie Image' className='w-100'></img>
      <h3 className='h6 text-center mt-3'>{People.name}</h3>
     </div>
    )}
  </div>
  )
}
