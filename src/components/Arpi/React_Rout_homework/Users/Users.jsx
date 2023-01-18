import React from 'react'
import './Users.scss'

export default function Users({ user }) {
  return (
    <div class ="user_box">
      <h2>USERS</h2>
        <div>
            {user.map((elem, index )=> {
              return <ul> 
              <li> 
                <h3>User N {index +1}</h3>
              </li>
              <li> 
                <p><span>Username:</span> {elem.username}</p>
              </li>
              <li> 
                <p><span>Email:</span> {elem.email}</p>
              </li>
              </ul>
            })}
          <div>
        </div>
      </div>
    </div>
  )
}
