
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



function App() {
    
  const [userLogin, setUserLogin] = useState(null);

  axios.get( "http://localhost:3000/user/signup")
 
    .then((res) => {
      setUserLogin(res.data)
    })

  if (userLogin === null) {
    return (
      <div >
        <img src="twitter-logo-2429-removebg-preview.png" alt="" />
        <h1 className='text-login'>Ça se passe<br></br> maintenant </h1>
        <form className='form-login'action="">
          <h2>Inscrivez-vous.</h2>
         
            <li>
              <label for="username">username</label>
              <input className="form-btn" type="submit" />
            </li>
            <li>
              <label for="password"> password</label>
              <input className="form-btn" type="submit" />
            </li>
            <li>
              <h3 className='form-h3'>Ou</h3>
              <label for ="connection">connection</label>
              <input className="form-btn" type="submit" />
            </li>
          


        </form>
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