import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container flex-grow-1">
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to='/' className="nav-link btn">Home</Link>
            </li>

            <li className="nav-item">
              <Link to='/users' className="nav-link btn">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar