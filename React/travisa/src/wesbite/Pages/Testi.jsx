import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import PageHeader from '../Coman/PageHeader'

function Testi() {
    return (
        <div>
            <Header />
            <div>
                <PageHeader title="Our Testimonial" name="Testimonial" />
                {/* Modal Search Start */}
                <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h4 className="modal-title text-secondary mb-0" id="exampleModalLabel">Search by keyword</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body d-flex align-items-center">
                                <div className="input-group w-75 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Start */}
                <div className="container-fluid testimonial overflow-hidden py-5">
                    <div className="container py-5">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">OUR CLIENTS RIVIEWS</h5>
                            </div>
                            <h1 className="display-5 mb-4">What Our Clients Say</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        </div>
                        <div className="owl-carousel testimonial-carousel wow zoomInDown" data-wow-delay="0.2s">
                            <div className="testimonial-item">
                                <div className="testimonial-content p-4 mb-5">
                                    <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="img" />
                                    </div>
                                    <div className="my-auto">
                                        <h5>Person Name</h5>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-content p-4 mb-5">
                                    <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="img" />
                                    </div>
                                    <div className="my-auto">
                                        <h5>Person Name</h5>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-content p-4 mb-5">
                                    <p className="fs-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                        <i className="fas fa-star text-secondary" />
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="rounded-circle me-4" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" alt="img" />
                                    </div>
                                    <div className="my-auto">
                                        <h5>Person Name</h5>
                                        <p className="mb-0">Profession</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>
            <Footer />

        </div>
    )
}

export default Testi