import React from 'react'

function NavBar() {
  return (
    <header className="page-header ">
      <nav className="main-menu static-top navbar-dark collapse-color navbar navbar-expand-lg fixed-top mb-1">
        <div className="container">
          <a
            className="navbar-brand animated"
            data-animation="fadeInDown"
            data-animation-delay="1s"
            href="/"
          >
            <img
              src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/logo.png"
              alt="Crypto Logo"
            />
            <span className="brand-text">
              <span className="font-weight-bold">Doncoins</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse collapse-color"
            id="navbarCollapse"
          >
            <div id="navigation" className="navbar-nav ml-auto">
              <ul className="navbar-nav mt-1">
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.1s"
                >
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.2s"
                >
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.3s"
                >
                  <a className="nav-link" href="/contacts">
                    Contact
                  </a>
                </li>
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.3s"
                >
                  <a className="nav-link" href="/teams">
                    Team
                  </a>
                </li>
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.3s"
                >
                  <a className="nav-link" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li
                  className="nav-item animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.4s"
                >
                  <a className="nav-link" href="/features">
                    Features
                  </a>
                </li>
              </ul>
              <span id="slide-line"></span>
              <form className="form-inline mt-2 mt-md-0">
                <a
                  className="btn btn-sm btn-gradient-purple btn-round btn-glow my-2 my-sm-0 animated"
                  data-animation="fadeInDown"
                  data-animation-delay="1.8s"
                  href="/login"
                >
                  Sign in
                </a>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
