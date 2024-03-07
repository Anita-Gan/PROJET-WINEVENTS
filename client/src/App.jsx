
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './composant/header'
import Container from './composant/container'
import Container2 from './composant/container2'
import './composant/container.css'
import './composant/header.css'
import './App.css'

function App() {
  
  return (
    <>
<BrowserRouter>
<div className='header'> 
<Header/>
<Routes>

<Route/>
<Route/>
<Route/>
<Route/>

</Routes>
</div>

<Container/>
<div>
<Container2/>
</div>

</BrowserRouter>


    </>
  )
}
export default App