import React, { useState } from 'react'
import "./Navbar.scss"
import { ArrowDropDown, Notifications, Search} from "@mateial-ui/icons";
//npm i @material-ui/icons petqa ustanovka anel bayc chi toxum errora talis
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className='left'>
                <img src='https://cdn.dribbble.com/users/9378043/screenshots/16832559/media/10b207c918d604662e088308d16b366d.png'
                alt='netflix-logo'/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
              <Search className="icon" />
              <span>ABC</span>
              <Notifications  className="icon" />
              <img src='https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-1280x720.jpg' 
              alt=''
              />
              <div className='profile'>
                <ArrowDropDown className="icon"/>
                <div className='options'>
                  <span>Settings</span>
                  <span>Logout</span>
                </div>
              </div>
            </div>
        </div>
    </div>
    
  )
}
