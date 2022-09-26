import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Style.css'

export default function Footer() {
  return (
    <>
    <footer className='py-5'>
        <div className="container">
            <div className="row after-bottom">
                <div className="col-lg-4 col-md-6">
                    <div className="footer-content">
                        <h2 className='fw-bold green mb-4'>Shop</h2>
                        <div className='mt-5'>
                            <ul className='p-0'>
                                <li>
                                    <i className="fa-solid fa-globe me-2 mb-3"></i>
                                    123 Consectetur at ligula 10660
                                </li>
                                <li>
                                    <Link className="nav-icons" aria-current="page" to="home">
                                        <i className='fas fa-phone me-2 mb-3'></i> 010-020-0340
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-icons" aria-current="page" to="home">
                                    <i className="fas fa-envelope me-2 mb-3"></i> info@company.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="footer-content">
                        <h2 className='mb-4'>Products</h2>
                        <div className='mt-5'>
                            <ul className='p-0'>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="store">Clothes</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="store">Furniture</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="store">Woman's Shirt</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="store">Men's Shirt</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="store">Electronics</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="footer-content">
                        <h2 className='mb-4'>Further Info</h2>
                        <div className='mt-5'>
                            <ul className='p-0'>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="all">All</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="store">Store</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="categories">Category</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="others">Others</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <ul className='p-0 d-flex justify-content-center'>
                        <li>
                            <a href="#home" className='href'> <i className='fab fa-facebook-f me-3'></i> </a>
                            <a href="#home" className='href'> <i className='fab fa-instagram me-3'></i> </a>
                            <a href="#home" className='href'> <i className='fab fa-twitter me-3'></i> </a>
                            <a href="#home" className='href'> <i className='fab fa-linkedin me-3'></i> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <section className='bg-dark py-4'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className='text-white custom'>
                        <p>Copyright &copy; 2022 Company Name | Designed by
                            <Link to="home"> TemplateMo</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}