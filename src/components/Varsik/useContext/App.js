import React from 'react'
import { useState } from 'react'
import List from "./List"


export const MyContext = React.createContext()

export default function App() {
    const [value, setValue] = useState(1);
    const [data, setData] = useState([
        {
            id:1,
            name: "bread",
            price: 3,
            amount: 10
        },
        {
            id:2,
            name: "water",
            price: 5,
            amount: 9
        },
        {
            id:3,
            name: "milk",
            price: 8,
            amount: 11
        },
        {
            id:4,
            name: "meat",
            price: 10,
            amount: 22
        }
    ])
    const AllPrice = () => {
        
    }
  return (
    <div>
        <List data={data}/>
    </div>
  )
}
