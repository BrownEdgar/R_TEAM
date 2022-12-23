import React from 'react'
import { useState } from 'react'
import Component from './Component'
export default function App() {
    const [people,setPeople] = useState([
        {
            id:1,
            name:"Wes",
            year:1988
        },
        {
            id:2,
            name:"Kait",
            year:1986
        },
        {
            id:3,
            name:"Irv",
            year:1970
        },
        {
            id:4,
            name:"Lux",
            year:2015
        }
    ])
    const sortYear = () =>{
        const newPeople = people.filter(elem => elem.year)
        .sort((a,b)=> a.year - b.year)
        setPeople(newPeople)
    }
    const sortName = () =>{
        const newPeople1 = people.filter(elem => elem.name)
        .sort((a,b)=> a.name > b.name ? 1 : -1)
        setPeople(newPeople1)
    }
    const handleDelete = (id) =>{
      const  newPeople2 = people.filter(elem => elem.id !== id)
        setPeople(newPeople2) 
    } 
  return (
    <div>
        <Component people={people} handleDelete={handleDelete}/>
        <button onClick={sortName}>sort by name</button>
        <button onClick={sortYear}>sort by year</button>
    </div>
  )
}
