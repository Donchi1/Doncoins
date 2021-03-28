import React from 'react'

function Empty() {
  return (
    <>
      <section className="1-column undefined  page-animated svg-wrapper ">
        <section className="container pt-5 ">
          <div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="page-banner text-center">
                  <div
                    className=" animated banner-content pt-5 text-uppercase text-bold text-light"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className=" d-flex justify-content-center align-items-center "
          style={{ height: '100vh' }}
        >
          <div className="row ">
            <div
              className="col-md-12 animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <div className="section-heading text-center">
                <h1
                  className="title text-danger"
                  style={{ fontSize: '6rem', fontFamily: 'fantasy' }}
                >
                  404
                </h1>
                <p className="sub-title">Ooops! 404 - Page Not Found</p>
              </div>
            </div>
            <div
              className="col-md-12 animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <div className="section-heading text-center">
                <a
                  href="/"
                  className="btn btn-round btn-gradient-purple text-light"
                >
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Empty
