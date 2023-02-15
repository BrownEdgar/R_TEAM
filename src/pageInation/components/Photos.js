import React from 'react'

export default function Photos({ photo }) {
  return (
    <div className='Photos'>
        {
            photo.map(elem => {
                return <div className='Photos-img-div' key={elem.id}>
                    <img 
                    className='Photos-img'
                    src={elem.thumbnailUrl} />
                    <p className='Photos-name'>{elem.title}</p>
                </div>
            })
        }
    </div>
  )
}
