import React from 'react';
import "../css/navbar.css";

const Navbar = ()=>{
    return(<>
    <h1 className="primary text-center mt-5 mb-3">Blessings By Trupti</h1>
        <h4 className="text-center mb-3">GIFT & WRAP STORE</h4>
   <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-4">
          <a className="nav-link active" aria-current="page" href="!#">BESTSELLERS</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GIFTS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="!#">Action</a></li>
            <li><a className="dropdown-item" href="!#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="!#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" href="!#">MAKE YOUR OWN BOX</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" href="!#">DIWALI HAMPERS</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" href="!#">GIFTING IDEAS</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" href="!#">CONTACT US</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link" href="!#">BLOCK ORDER</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>);
}
export default Navbar;