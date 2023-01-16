import React from 'react'
import CustomHook from './CustomHook'

export default function App() {

  const [data, {sortByCount}] = CustomHook([
    {
      id: 1,
      car: "Lambroghini",
      price: 550000,
      city: "Italia"
    },
    {
      id: 2,
      car: "Audi R8",
      price: 40000,
      city: "Germany"
    },
    {
      id: 3,
      car: "Bmw i8",
      price:  120000,
      city: "Germany"
    },
    {
      id: 4,
      car: "Buggati",
      price: 1500000,
      city: "Franch"
    }
  ])

  return (
    <div>
        <button onClick={sortByCount}>Sort Count</button>
			<pre>{JSON.stringify(data.result,null,1)}</pre>
    </div>
  )
}