import React from 'react'

import NavBar from './NavBar'

function Empty() {
  return (
    <>
      <NavBar />
      <section className="sub-page-banner site-bg parallax" id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-banner text-center wow fadeInUp">
                <h1 className="sub-banner-title userTextColor">404</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>404</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-bg ptb-100">
        <div className="row">
          <div className="col-md-12 wow fadeInUp animated">
            <div className="section-heading text-center">
              <h2 className="heading-title">404</h2>
              <p className="heading-des">Ooops! 404 - Page Not Found</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Empty
