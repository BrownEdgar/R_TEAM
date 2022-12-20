import React from 'react'

export default function List({data}) {
  return (
    <div>
        <ul>
            {
                data.map(elem => {
                    return(
                        <li key={elem.id}>{elem.name}</li>
                    )
                })
            }
        </ul>
        <button onClick={() => AllPrice()}></button>
    </div>
  )
}
