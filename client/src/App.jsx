
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './composant/header'
import Container from './composant/container'
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

</BrowserRouter>


    </>
  )
}
export default App