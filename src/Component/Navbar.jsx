import React from 'react'
import {Link} from 'react-router-dom'
import '../Component/Style/Style.css'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg py-4">
            <div className="container">
                <Link className="navbar-brand fw-bold text-uppercase" to="all">Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className='fas fa-bars'></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link mx-lg-4" aria-current="page" to="all">All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-lg-4" to="store">Store</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-lg-4" to="categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-lg-4" to="others">Others</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-lg-4" to="contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <i className="fab mx-3 ms-0 fa-facebook-f"></i>
                            <i className="fab mx-3 fa-instagram"></i>
                            <i className="fab mx-3 fa-twitter"></i>
                        </li>
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
