import React, { useState } from 'react'

import "./App.scss"

export default function App() {
    const [data,setData] = useState([
        {
            id: 1,
            name:"Wes",
            year: 1988,
        },
        {
            id: 2,
            name:"Kait",
            year: 1986,
        },
        {
            id: 3,
            name:"Irv",
            year: 1970,
        },
        {
            id: 4,
            name:"Lux",
            year: 2015,
        }
    ])
    const [isShow,setShow] = useState(false)
    const [isSorted,setSorted] = useState(false)

    const handleDelete = (id) => {
       const newData = data.filter(elem => elem.id !== id)
       setData(newData)
    } 

    const handleSort = () => {
        const sortData = data.sort((a,b) => a.year - b.year)
        setData(sortData)
        setSorted(true)
     }
     const handleClick = () => {
        if(isSorted) {
            setShow(true)
        }else{
            setShow(false)
        }
     }
     

  return (
    <div className='App'>
        <div className="App-Content">
        {
            data.map(elem => {
                return <div className="Data" key={elem.id}>
                    <div className="Data-Content">
                        <div className="Data-items">
                            <div className={isShow ? "show" : ""}></div>
                            <button onClick={() => handleDelete(elem.id)}>X</button>
                        </div>
                        <p><span>Id : </span>{elem.id}</p>
                        <p><span>Name : </span>{elem.name}</p>
                        <p><span>Year : </span>{elem.year}</p>
                    </div>
                </div>
            })
        }
        <div className='buttons'>
            <button className='btnSort' onClick={handleSort}>sort by Asceding</button>
            <button className='btnActive' onClick={handleClick}>Click to active</button>
        </div>
        </div>
    </div>
  )
}
