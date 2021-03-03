import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header
      className="transition  header-align wow fadeInUp"
      style={{ position: 'sticky' }}
    >
      <div
        className="container-fluid darkblue py-2"
        style={{ position: 'absolute', top: 0 }}
      >
        <div className="row flex-align">
          <div className="col-lg-4 col-md-3 col-8">
            <div className="logo">
              <a href="/">
                <h3 className="sub-heading  little-add ml-3">
                  <span style={{ fontSize: '3rem' }}>U</span>
                  ltimateCoins
                </h3>
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-md-9 col-4 text-right">
            <div className="menu-toggle">
              <span></span>
            </div>
            <div className="menu">
              <ul className="d-inline-block">
                <li>
                  <a href="/" className="nav-color">
                    Home
                  </a>
                </li>
                <li className="mega-menu">
                  <span className="opener plus"></span>
                  <Link to="#" className="nav-color">
                    Pages
                  </Link>
                  <ul className="transition">
                    <li>
                      <a href="/about" className="userTextColor">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/pricing" className="userTextColor">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/contacts" className="userTextColor">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="/faq" className="userTextColor">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/features" className="nav-color">
                    Feature
                  </a>
                </li>

                <li>
                  <a href="/teams" className="nav-color">
                    Team
                  </a>
                </li>
              </ul>
              <div className="signin d-inline-block">
                <a href="/login" className="btn history-info">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
