import React from 'react'

import "./Component.scss"

export default function Component({obj,handleDalete}) {
  return (
    <div className='Obj-Contnent'>
      <button onClick={()=> handleDalete(obj.id)}>X</button>
      <p>{obj.title}</p>
      <h2>{obj.body}</h2>
      <span>{obj.text}</span>
      <a href='#'>{obj.link}</a>
    </div>
  )
}