import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.scss"


export default function Navbar() {
  return (
    <div className='box'>
        <header>
            <nav>
                <li>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to="/login">LOG IN</Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to="./users">USERS</Link>
                    </div>
                </li>
                
            </nav>
        </header>
    </div>
  )
}
