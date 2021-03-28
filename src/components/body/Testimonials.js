import React from 'react'
import { Carousel } from 'react-bootstrap'

function Testimonials() {
  return (
    <section className="pt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 offset-lg-2">
            <div className="title_default_dark title_border text-center ">
              <h2
                className="animated title mb-4"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.3s"
              >
                Testimonial
              </h2>
            </div>
          </div>
        </div>
        <div className="row small_space">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <div className="testimonial_wrap  animated text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/testmonial_client1.jpg"
                    data-animation="fadeInUpShorter"
                    className="rounded-circle"
                    data-animation-delay="0.3s"
                    alt="testmonial_client1"
                  />
                  <h5
                    className="animated btn-gradient-purple nav-color "
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    Kerri Reece
                  </h5>
                  <span
                    className="animated text-light text-center"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    CEO Company
                  </span>
                  <p
                    className="animated text-center"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    You should not expect anything more. This is a fantastic
                    program, punctual paying, thanks a lot. I recommend this
                    hyip!
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial_wrap  item animated text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/testmonial_client2.jpg"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                    className="rounded-circle"
                    alt="testmonial_client2"
                  />
                  <h5
                    className="animated btn-gradient-purple nav-color"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    Alvaro Martin
                  </h5>
                  <span
                    className="animated text-light"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    CEO Company
                  </span>
                  <p
                    className="animated text-center"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    This is a realistic program for anyone looking for site to
                    invest. Paid to me regularly, keep up good work.This is a
                    realistic program for anyone looking{' '}
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial_wrap  animated text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/testmonial_client3.jpg"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                    className="rounded-circle"
                    alt="testmonial_client3"
                  />
                  <h5
                    className="animated btn-gradient-purple nav-color"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    Jessica Bell
                  </h5>
                  <span
                    className="animated text-light"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    Head Of Sale
                  </span>
                  <p
                    className="animated text-center"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    This is a realistic program for anyone looking for site to
                    invest. Paid to me regularly, keep up good work.This is a
                    realistic program for anyone looking{' '}
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
