import React, {useState, useEffect} from 'react'
import Products from './Products'

import './App.scss'

export default function App() {
    const [data, setData] = useState([])
    
    useEffect(() =>{
        const getData =() =>{
            fetch('https://fakestoreapi.com/products?limit=3')
            .then(res => res.json())
            .then(json => setData(json))
        }
        getData()
    }, [])

  return (
    <div className='Box'>
        <div className='Title'>
            <h1>Our Products</h1>
        </div>
        <div className='List'>
        {
        data.map(product =>{
            return <Products key={product.id} product={product}/>
        })
        }
    </div>
    </div>
  )
}
