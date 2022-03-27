import React from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import './Navbar.css'
import Logo from '../../assets/tshirtshop.png'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg d-none d-sm-block">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse header-navbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Hi <span className='text-danger fw-bolder'>Login </span></Link>
                            </li>
                            <li className="nav-item">
                                <span className='nav-link text-dark'>Or</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/signup"><span className='text-danger fw-bolder'>Sign Up</span></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bolder" to="/dailydeals">Daily Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bolder" to="/sell">Sell</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bolder" to="/help">Help & Contact</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link fw-bolder" href="/">$ GBP</a>
                            </li>
                            <li className="nav-item ml-4">
                                <a className="nav-link fw-bolder" href="/"><FaShoppingBag /> Your bag: $200</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/men"><img src={Logo} alt='' /></Link>
                    <button className="navbar-toggler text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse wrapper text-sm-left text-left" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item d-lg-none d-lg-block">
                                <Link className="nav-link text-danger fw-bolder active" to="/login">Login</Link>
                            </li>
                            <li className="nav-item d-lg-none d-lg-block">
                                <Link className="nav-link text-danger fw-bolder" to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/women">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/kids">Kids</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shoes">Shoes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/brands">Brands</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item mt-2">
                                <form className="d-flex">
                                    <div className="form"> 
                                        <input type="text" className="form-control form-input" placeholder="Search anything..." /> 
                                    </div>
                                </form>
                            </li>

                            <li className="nav-item" style={{ fontSize: "1.5rem" }}>
                                <Link className="nav-link fw-bolder" to="/"><FaShoppingBag /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header