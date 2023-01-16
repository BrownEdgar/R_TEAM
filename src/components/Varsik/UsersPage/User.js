import React from 'react'

export default function User({data}) {
  return (
    <div>
        <h1>Users</h1>
        {data.map((elem, index) => <li key={index}>{elem.username}</li> )}
    </div>
  )
}
