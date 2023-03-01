import React ,{ useState }from 'react'
import Component from './Component'
import "./App.css"

export default function App() {
    const [sortType, setsortType] = useState()
    const [data, setData] = useState([
        {
        id: 3,
        name: "lrv",
        year: 1970,
        },
        {
        id: 2,
        name: "Kait",
        year: 1986,
        },
        {
        id: 1,
        name: "Wess",
        year: 1988,
        },
        {
        id: 4,
        name: "Lux",
        year: 2015,
        },
])

const getSort = (id) => {
    const s = data.filter(elem => elem.id !== id)
    setData(s)
    console.log(s);
}


  return (
    <div className='App'>
        <Component data={data} />
        <button onClick={getSort}>Sort All</button>
        <button>get Active</button>
    </div>
  )
}
