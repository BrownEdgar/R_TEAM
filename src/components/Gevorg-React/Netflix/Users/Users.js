import React from 'react'
import "../Navbar/Navbar"
import "../Footer/Footer"
import "./Users.css"
//https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png
//https://mir-s3-cdn-cf.behance.net/project_modules/disp/363e3e33850498.56ba69ac3183c.png
//https://mir-s3-cdn-cf.behance.net/project_modules/disp/363e3e33850498.56ba69ac2cc3a.png
//https://mir-s3-cdn-cf.behance.net/project_modules/disp/363e3e33850498.56ba69ac33f26.png


export default function Users() {


  return (
    <div className='main-wrapper'>
        <Navbar />

        <div className='ucontainer-main'>
            <div className='ucontainer'>
                <div className='one'>
                    <figure className='back'>
                        <h3>AKASH</h3>
                        <i className='fas fa-sign-in-alt'></i>
                    </figure>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' alt=''/>
                </div>
                <div className='two'>
                    <figure className='back'>
                        <h3>CHITRANSH</h3>
                        <i className='fas fa-sign-in-alt'></i>
                    </figure>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/363e3e33850498.56ba69ac3183c.png' alt=''/>
                </div>
                <div className='three'>
                    <figure className='back'>
                        <h3>HARSHIT</h3>
                        <i className='fas fa-sign-in-alt'></i>
                    </figure>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/363e3e33850498.56ba69ac2cc3a.png' alt=''/>
                </div>
                <div className='four'>
                    <figure className='back'>
                        <h3>SANSKAAR</h3>
                        <i className='fas fa-sign-in-alt'></i>
                    </figure>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/363e3e33850498.56ba69ac33f26.png' alt=''/>
                </div>
            </div>
        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}
