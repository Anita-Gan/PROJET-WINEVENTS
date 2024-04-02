
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './composant/header'
// import Container from './composant/container'
// import Container2 from './composant/container2'
// import Container3 from './composant/container3'
// import Container4 from './composant/container4'
import Footer from './composant/footer'
import Apropos from './menu/apropos'
import Services from './menu/sevices'
import Noslieux from './menu/noslieux'
// import Image from './composant/image'
import Container5 from './composant/container5'
import Contact from './menu/contact'
import 'client/src/composant/image.css'
import 'client/src/menu/apropos.css'
import 'client/src/composant/footer.css'
import './composant/container4.css'
import './composant/container.css'
import './composant/container3.css'
import './composant/header.css'
import 'client/src/menu/noslieux.css'
import 'client/src/composant/conseiller.css'
import './App.css'
import 'client/src/composant/container5.css'
import '/src/menu/contact.css'
import './menu/service.css'
import Accueil from './menu/accueil'
import axios from "axios"
import { useState } from 'react'



function App() {
    
  const [userSignup, setUserSignup] = useState(null);

  axios.post( "http://localhost:3000/user/signup")
 
    .then((res) => {
      setUserSignup(res.data)
    })

  if (userSignup === null) {
    return (
      <div className='signup'> 
       
      <div className='signup-form'>
      {/* <img src="/images/WinEvents.png" alt="" /> */}
     
        <form className='form-login'action="">
        <h1 className='signup-text'>Bienvenu sur notre site</h1>
          <h2>Inscrivez-vous.</h2>
         
            <li>
              <label for="name">Username</label>
              <input placeholder='Username' className='signup-input'/>
            </li>
            <li>
              <label for="email">Email</label>
              <input placeholder='Email' className='signup-input'/>
            </li>
            <li>
              <label for="password"> Password</label>
              <input placeholder='Password' className='signup-input'/>
            </li>
            <li>
              <label for ="connection">ou</label>
              <input value="Connection"/>
            </li>
          


        </form>
      </div>
      </div>
    )
  }

  return (
    <>
      <BrowserRouter>

        <div className='header'>
          <Header />
        </div>
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path='/services' element={<Services />} />
          <Route path='/noslieux' element={<Noslieux />} />
          <Route path='/contact' element={<Contact/>} />

        </Routes>
       
      </BrowserRouter>
      

    </>
  )
}
export default App