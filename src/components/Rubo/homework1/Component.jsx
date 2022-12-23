import React from 'react'

export default function Component({people,handleDelete}) {
  return (
    <div>
        {
            people.map(elem=>{
                return (
                    <ul key={elem.id}>
                        <button onClick={() => handleDelete(elem.id)}>X</button>
                        <li>{elem.name}</li>
                        <li>{elem.year}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}
