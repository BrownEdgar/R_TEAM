import React, { useEffect, useState } from 'react'
import Pageination from './components/Pageination'
import Photos from './components/Photos'

import "./App.scss"

export default function App() {
    const [photo, setPhoto] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const perPage = 10

    useEffect(() => {
       const getPhoto = () =>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(data => data.json())
        .then(res => setPhoto(res))
       }

       getPhoto()
    }, [])

    const lastPostIndex = currentPage + perPage;
    const firstPostIndex  = lastPostIndex - perPage;
    const currentPost = photo.slice(firstPostIndex, lastPostIndex);

    const pageinate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
        <h1 className='head-title'>Fetch Photo</h1>
        <Photos photo={currentPost} />
        <Pageination perPage={perPage} totalPost={photo.length} pageinate={pageinate}/>
    </div>
  )
}
