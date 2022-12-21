import React, {useState, useEffect} from 'react'
import Product from './Product';

import "./App.scss"

export default function App() {
    const [data, setData] = useState([]);

    const handleDelete = (id) => {
		const newData = data.filter(product => product.id !== id);
		setData(newData)
	}

    useEffect(() => {
        const getData = () => {
            fetch("https://fakestoreapi.com/products")
						.then(res => res.json())
						.then(json => setData(json))
        }
        getData()
    }, [])


  return (
    <div className='List'>
        {data.map(product => {
            return <Product key={product.id} product={product} handleDelete={handleDelete}/>
        })
        }
    </div>
  )
}
