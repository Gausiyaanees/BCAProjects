import React from 'react'
import './Home.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Men from './Men'
import Women from './Women';
import Kids from './Kids';
import Silder from './Silder';
export default function Home() {
  return (
    <Router>
      <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="Men">Men</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="Women">Women</Link>
        </li>
     
        <li class="nav-item">
          <Link class="nav-link active" to="Kids">Kids</Link>
        </li>
        <li class="nav-item">
           <Link class="nav-link active" to="Silder">Silder</Link>
        </li>
      </ul>
   
    </div>
  </div>
</nav>
        
      </div>
      <Routes>
        <Route exact path="Men" element={<Men/>}></Route>
        <Route exact path="Women" element={<Women/>}></Route>
        <Route exact path="Kids" element={<Kids/>}></Route>
        <Route exact path="Silder" element={<Silder/>}></Route>

      </Routes>
    </Router>
  )
}
