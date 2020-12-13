import React from 'react'
import { Carousel } from 'react-bootstrap'

function Testimonials() {
  return (
    <>
      <Carousel className=" pt-4" controls={false} indicators={false}>
        <Carousel.Item className="pt-3">
          <section>
            <div className=" text-center d-flex justify-content-around flex-wrap align-items-center pt-3 pb-3">
              <div className="pb-5">
                <img
                  src={require('../../assets/testlady3.jpg')}
                  alt="testimony"
                  width="400px"
                  height="400px"
                  className="rounded-circle"
                />
              </div>
              <div style={{ width: '50%' }}>
                <h3 className="text-light">Lois Luke</h3>
                <h2 className="text-light">Ceo Ecoms Global Consultant </h2>
                <h2 className="text-light">United Kingdom</h2>
                <p className="text-center text-light pb-5">
                  Earning with out investing is another problem of our present
                  age cryptogenus has made me understand the need to invest.
                  They really changed my life, i wish all will join this life
                  changing platform .
                </p>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item className="pt-3">
          <section>
            <div className=" text-center d-flex flex-wrap justify-content-around align-items-center pt-3 pb-3">
              <div className="pb-5">
                <img
                  src={require('../../assets/testlady1.jpg')}
                  alt="testimony"
                  width="400px"
                  height="400px"
                  className="rounded-circle"
                />
              </div>
              <div style={{ width: '50%' }}>
                <h3 className="text-light"> Lucas Harry</h3>
                <h2 className="text-light">
                  Medical Doctor Emik Medical Center
                </h2>
                <h2 className="text-light">United Kingdom</h2>
                <p className="text-center text-light pb-5 ">
                  Am so please trading unreagretably with cryptogenus meeting
                  them was never a coincidents and am so happy trading with then
                  because they have increased my fund and changed my life
                  totaly.
                </p>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item className="pt-3">
          <section>
            <div>
              <div className=" text-center d-flex flex-wrap justify-content-around align-items-center pt-3 pb-3">
                <div className="pb-5 ">
                  <img
                    src={require('../../assets/testlady.jpg')}
                    alt="testimony"
                    width="400px"
                    height="400px"
                    className="rounded-circle"
                  />
                </div>
                <div style={{ width: '50%' }}>
                  <h3 className="text-light">Sophi Elvis</h3>
                  <h2
                    className="text-light
                  "
                  >
                    Manager juilice ceramics{' '}
                  </h2>
                  <h2 className="text-light">United States</h2>
                  <p className="text-center text-light pb-5">
                    Getting in touch with this company made me understand the
                    meaning of team work.I invested very little but there team
                    guided to make the best out of this platform, and am so
                    happy to be an investor here.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item className="pt-3">
          <section>
            <div className=" text-center d-flex flex-wrap justify-content-around align-items-center pt-3 pb-3">
              <div className="pb-5">
                <img
                  src={require('../../assets/testguy.jpg')}
                  alt="testimony"
                  width="400px"
                  height="400px"
                  className="rounded-circle"
                />
              </div>
              <div style={{ width: '50%' }}>
                <h3 className="text-light">Leo kelvin</h3>
                <h2 className="text-light">Ceo Dolfine Gas Ltd</h2>
                <h2 className="text-light">Australia</h2>
                <p className="text-center text-light pb-5 ">
                  Am so please trading unreagretably with cryptogenus meeting
                  them is never a coincients and am so happy trading with then
                  am so please trading unreagretably with coinplus meeting them
                  is never a coincients and am so happy trading with thenm
                </p>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item className="pt-3">
          <section>
            <div className=" text-center d-flex flex-wrap justify-content-around align-items-center pt-3 pb-3">
              <div className="pb-5">
                <img
                  src={require('../../assets/testguy1.jpg')}
                  alt="testimony"
                  width="400px"
                  height="400px"
                  className="rounded-circle"
                />
              </div>
              <div style={{ width: '50%' }}>
                <h3 className="text-light">Don Jack</h3>
                <h2 className="text-light">Manager donland estates </h2>
                <h2 className="text-light">United States</h2>
                <p className="text-center text-light pb-5 ">
                  In the last few year i don"t know what investment means till i
                  got intouch with this company. With the the help of there team
                  members i was able to learn all that helped me during my
                  investment to dificulty. Thanks to cryptogenus that has really
                  changed my life.
                </p>
              </div>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Testimonials
