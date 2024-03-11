
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './composant/header'
import Container from './composant/container'
import Container2 from './composant/container2'
import Container3 from './composant/container3'
import Container4 from './composant/container4'
import Footer from './composant/footer'
import Apropos from './composant/apropos'
import Services from './composant/sevices'
import Noslieux from './composant/noslieux'
// import Contact from './composant/contact'
import './composant/apropos.css'
import './composant/footer.css'
import './composant/container4.css'
import './composant/container.css'
import './composant/container3.css'
import './composant/header.css'
import './App.css'

function App() {
  
  return (
    <>
<BrowserRouter>
<div className='header'> 
<Header/>
<Routes>

<Route path="/apropos" element={<Apropos />} />
<Route path='/services' element={<Services/>} />
<Route path='/noslieux' element={<Noslieux/>} />
{/* <Route path='/contact' element={<Contact/>} /> */}

</Routes>
</div>

<Container/>
<div>
<Container2/>
</div>
<div>
  <Container3/>
</div>
<div>
  <Container4/>
</div>
<div>
  <Footer></Footer>
</div>
</BrowserRouter>


    </>
  )
}
export default App