import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requist';
import "./Banner.scss"
const base_url = 'https://image.tmdb.org/t/p/original/';


export default function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length)]
      )
    }

    fetchData()
  }, []);

  function trancate(str, n) {
    return str?.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  return (
    <header className='banner'
      style={{
      
      }}
    >
     
    </header>
  )
}
