import React, {Fragment} from 'react'

  export default function Component({ data, onChangeSort }) {
    
    return (
        <ul>
          {
            data.map(elem => {
              return (
                <Fragment key={elem.id}>
                  <li>{elem.id}</li>
                  <li>{elem.name}</li>
                  <li>{elem.year}</li>
                  <hr />
                </Fragment>
              )
            })
          }
        </ul>
    )
  }
  
