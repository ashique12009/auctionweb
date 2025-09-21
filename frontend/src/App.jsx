import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-primary" href="#">
            <i className="fas fa-gavel me-2"></i>AuctionHub
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-danger text-white px-3 ms-2" href="#live-auctions">
                  <i className="fas fa-circle me-1"></i>Live Auctions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navigation */}

      {/* <!-- Hero Section --> */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white mb-4">Discover Rare Treasures at Premium Auctions</h1>
              <p className="lead text-white mb-4">Join thousands of collectors and enthusiasts in our exclusive online auction platform. Bid on authentic art, antiques, jewelry, and collectibles from around the world.</p>
              <div className="d-flex gap-3">
                <a href="#live-auctions" className="btn btn-primary btn-lg">
                  <i className="fas fa-play me-2"></i>Join Live Auction
                </a>
                <a href="#categories" className="btn btn-outline-light btn-lg">Browse Categories</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero Section --> */}

      {/* <!-- Live Auctions Section --> */}
      <section id="live-auctions" className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">
                <span className="badge live-badge text-white me-2">LIVE</span>
                Current Auctions
              </h2>
              <p className="lead text-muted">Don't miss out on these exciting live auctions happening now</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card auction-card h-100 shadow-sm">
                <img src="/placeholder.svg?height=250&width=400" className="card-img-top" alt="Vintage Painting" />
                <div className="card-body">
                  <span className="badge bg-success mb-2">Live Now</span>
                  <h5 className="card-title">19th Century Oil Painting</h5>
                  <p className="card-text text-muted">Rare landscape painting by renowned artist</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted">Current Bid</small>
                      <h6 className="text-primary mb-0">$2,450</h6>
                    </div>
                    <div className="text-end">
                      <small className="text-muted">Time Left</small>
                      <h6 className="text-danger mb-0">2h 15m</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card auction-card h-100 shadow-sm">
                <img src="/placeholder.svg?height=250&width=400" className="card-img-top" alt="Antique Jewelry" />
                <div className="card-body">
                  <span className="badge bg-success mb-2">Live Now</span>
                  <h5 className="card-title">Victorian Diamond Ring</h5>
                  <p className="card-text text-muted">Exquisite 2.5ct diamond with certification</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted">Current Bid</small>
                      <h6 className="text-primary mb-0">$8,750</h6>
                    </div>
                    <div className="text-end">
                      <small className="text-muted">Time Left</small>
                      <h6 className="text-danger mb-0">45m</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card auction-card h-100 shadow-sm">
                <img src="/placeholder.svg?height=250&width=400" className="card-img-top" alt="Vintage Watch" />
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">Starting Soon</span>
                  <h5 className="card-title">Vintage Rolex Submariner</h5>
                  <p className="card-text text-muted">1960s model in excellent condition</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted">Starting Bid</small>
                      <h6 className="text-primary mb-0">$12,000</h6>
                    </div>
                    <div className="text-end">
                      <small className="text-muted">Starts In</small>
                      <h6 className="text-warning mb-0">1h 30m</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Live Auctions Section --> */}

      {/* <!-- Categories Section --> */}
      <section id="categories" className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Browse Categories</h2>
              <p className="lead text-muted">Explore our diverse collection of auction categories</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <img src="/placeholder.svg?height=100&width=100" className="mb-3" alt="Art" />
                  <h5 className="card-title">Fine Art</h5>
                  <p className="card-text">Paintings, sculptures, and contemporary art pieces</p>
                  <a href="#" className="btn btn-outline-primary">View Items</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <img src="/placeholder.svg?height=100&width=100" className="mb-3" alt="Jewelry" />
                  <h5 className="card-title">Jewelry</h5>
                  <p className="card-text">Rare gems, vintage pieces, and luxury accessories</p>
                  <a href="#" className="btn btn-outline-primary">View Items</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <img src="/placeholder.svg?height=100&width=100" className="mb-3" alt="Antiques" />
                  <h5 className="card-title">Antiques</h5>
                  <p className="card-text">Historical artifacts and vintage collectibles</p>
                  <a href="#" className="btn btn-outline-primary">View Items</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <img src="/placeholder.svg?height=100&width=100" className="mb-3" alt="Watches" />
                  <h5 className="card-title">Watches</h5>
                  <p className="card-text">Luxury timepieces and vintage watch collections</p>
                  <a href="#" className="btn btn-outline-primary">View Items</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Categories Section --> */}

      {/* <!-- Featured Products Section --> */}
      <section id="products" className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
              <p className="lead text-muted">Handpicked items from our premium collection</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card auction-card h-100 shadow-sm">
                <img src="/placeholder.svg?height=250&width=400" className="card-img-top" alt="Antique Vase" />
                <div className="card-body">
                  <h5 className="card-title">Ming Dynasty Vase</h5>
                  <p className="card-text text-muted">Authentic 15th century ceramic masterpiece</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h6 text-primary">Est. $15,000 - $25,000</span>
                    <small className="text-muted">Ends in 3 days</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card auction-card h-100 shadow-sm">
                <img src="/placeholder.svg?height=250&width=400" className="card-img-top" alt="Vintage Car" />
                <div className="card-body">
                  <h5 className="card-title">1965 Ferrari 275 GTB</h5>
                  <p className="card-text text-muted">Rare classNameic sports car in pristine condition</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h6 text-primary">Est. $850,000+</span>
                    <small className="text-muted">Ends in 5 days</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card auction-card h-100 shadow-sm">
                <img src="/placeholder.svg?height=250&width=400" className="card-img-top" alt="Rare Book" />
                <div className="card-body">
                  <h5 className="card-title">First Edition Shakespeare</h5>
                  <p className="card-text text-muted">1623 First Folio in exceptional condition</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h6 text-primary">Est. $2.5M - $4M</span>
                    <small className="text-muted">Ends in 1 week</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Featured Products Section --> */}

      {/* <!-- About Section --> */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">About AuctionHub</h2>
              <p className="lead mb-4">For over 25 years, AuctionHub has been the premier destination for collectors, investors, and enthusiasts seeking authentic, high-quality items through our trusted auction platform.</p>
              <div className="row g-4 mb-4">
                <div className="col-6">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">50K+</h3>
                    <p className="text-muted">Items Sold</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">15K+</h3>
                    <p className="text-muted">Happy Clients</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">98%</h3>
                    <p className="text-muted">Success Rate</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">25+</h3>
                    <p className="text-muted">Years Experience</p>
                  </div>
                </div>
              </div>
              <a href="#contact" className="btn btn-primary btn-lg">Learn More</a>
            </div>
            <div className="col-lg-6">
              <img src="/placeholder.svg?height=400&width=600" className="img-fluid rounded shadow" alt="About Us" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- Contact Section --> */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
              <p className="lead text-muted">Have questions? We're here to help you with your auction needs</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow">
                <div className="card-body p-5">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <select className="form-select" id="subject">
                          <option>General Inquiry</option>
                          <option>Bidding Support</option>
                          <option>Consignment</option>
                          <option>Technical Issue</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="5" required></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}

      {/* <!-- Footer --> */}
      <footer className="footer-dark py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="fw-bold mb-4">
                <i className="fas fa-gavel me-2 text-primary"></i>AuctionHub
              </h5>
              <p className="text-muted mb-4">Your premier destination for authentic auctions and rare collectibles. Join our community of collectors and discover extraordinary items from around the world.</p>
              <div className="d-flex gap-3">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold mb-4">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#home" className="footer-link">Home</a></li>
                <li className="mb-2"><a href="#categories" className="footer-link">Categories</a></li>
                <li className="mb-2"><a href="#products" className="footer-link">Products</a></li>
                <li className="mb-2"><a href="#live-auctions" className="footer-link">Live Auctions</a></li>
                <li className="mb-2"><a href="#about" className="footer-link">About Us</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold mb-4">Services</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link">Online Bidding</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Consignment</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Appraisals</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Authentication</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Shipping</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold mb-4">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link">Help Center</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Bidding Guide</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Terms of Service</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Privacy Policy</a></li>
                <li className="mb-2"><a href="#contact" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold mb-4">Contact Info</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                  <small>123 Auction Street<br />New York, NY 10001</small>
                </li>
                <li className="mb-2">
                  <i className="fas fa-phone me-2 text-primary"></i>
                  <small>+1 (555) 123-4567</small>
                </li>
                <li className="mb-2">
                  <i className="fas fa-envelope me-2 text-primary"></i>
                  <small>info@auctionhub.com</small>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-muted mb-0">&copy; 2024 AuctionHub. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-muted mb-0">Designed with <i className="fas fa-heart text-danger"></i> for collectors worldwide</p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </>
  )
}

export default App