import React from 'react'
import { NavLink } from 'react-router-dom'

function Aheader() {
  return (
    <div>
          <div>
               
                {/* Navbar & Hero Start */}
                <div className="container-fluid nav-bar p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                        <a href className="navbar-brand p-0">
                            <h1 className="display-5 text-secondary m-0">Dashbaord</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-bs-toggle="dropdown"><span className="dropdown-toggle">Pages</span></a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/feacture" className="dropdown-item">Feature</NavLink>
                                        <NavLink to="/countries" className="dropdown-item">Countries</NavLink>
                                        <NavLink to="/testi" className="dropdown-item">Testimonial</NavLink>
                                        <NavLink to="/training" className="dropdown-item">Training</NavLink>
                                      
                                    </div>
                                </div>
                                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                            </div>
                            <button className="btn btn-primary btn-md-square border-secondary mb-3 mb-md-3 mb-lg-0 me-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search" /></button>
                            <a href className="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">Get A Quote</a>
                        </div>
                    </nav>
                </div>
                {/* Navbar & Hero End */}
            </div>
    </div>
  )
}

export default Aheader