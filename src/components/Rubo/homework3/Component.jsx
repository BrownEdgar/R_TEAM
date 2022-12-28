import React, { Fragment } from 'react'

export default function Component({data}) {
  return (
    <div>
      <ul>
        {
            data.map(elem =>{
               return  <Fragment key={elem.id}>
                    <li>Name: {elem.name}</li>
                    <li>Price: {elem.price}</li>
                </Fragment>
            })
        }
      </ul>
    </div>
  )
}
