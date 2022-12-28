import React from 'react'
import Component from './Component'
import CustomHook from './CustomHook'

export default function App() {
    const [data,{sortPrice}] = CustomHook([
        {
            id:1,
            name:"Iphone",
            price:1400,
        },
        {
            id:2,
            name:"Samsung",
            price:800,
        },
        {
            id:3,
            name:"LG",
            price:150,
        },
        {
            id:4,
            name:"Xiaomi",
            price:500,
        }
    ])
  return (
    <div>
        <Component data={data.state}/>
    <button onClick={sortPrice}>Sort By Price</button>
    </div>
  )
}
