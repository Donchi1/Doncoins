import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Dialog, Link } from '@material-ui/core'
import testimony1 from '../../assets/video/mantest1.mp4'
import testimony from '../../assets/video/mantest.mp4'
import testimony2 from '../../assets/video/womantest.mp4'

function Testimonials() {
  const [openVideo, setOpenVideo] = useState({
    video1: false,
    video2: false,
    video3: false,
  })
  return (
    <>
      <section className="blog-part site-bg ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow fadeInUp">
              <div className="section-heading text-center pb-65">
                <label className="sub-heading">Testimomials</label>
                <h2 className="heading-title userTextColor">
                  Our Testimonials
                </h2>
                <p className="heading-des">
                  Ultimatecoins has really changed the life of many. Checkout
                  our what our clients has to say
                </p>
              </div>
            </div>
          </div>
          <div className="blog-slider owl-carousel">
            <div className="blog-box wow fadeInUp">
              <div className="blog-img mb-15 work-box">
                <img
                  src={require('../../assets/test1.jpg')}
                  alt="Work Process"
                />
                <Link
                  to="#"
                  className="play-icon text-center"
                  onClick={() =>
                    setOpenVideo({ ...openVideo, video1: !openVideo.video1 })
                  }
                >
                  <span>
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </span>
                </Link>
              </div>
              <Dialog
                open={openVideo.video1}
                onClose={() => setOpenVideo({ ...openVideo, video1: false })}
                maxWidth="xl"
              >
                <ReactPlayer
                  controls
                  playing
                  url={testimony}
                  style={{ border: 'none', outline: 'none' }}
                />
              </Dialog>
              <div className="blog-des-box">
                <p className="blog-date">
                  Am so please trading unreagretably with Ultimatecoins meeting
                  them was never a coincident and am so happy trading with then
                  because they have increased my fund and changed my life
                  totally.
                </p>
              </div>
            </div>
            <div className="blog-box wow fadeInUp">
              <div className="blog-img mb-15 work-box">
                <img
                  src={require('../../assets/test2.jpg')}
                  alt="Work Process"
                />
                <Link
                  to="#"
                  className="play-icon text-center"
                  onClick={() =>
                    setOpenVideo({ ...openVideo, video2: !openVideo.video2 })
                  }
                >
                  <span>
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </span>
                </Link>
              </div>
              <Dialog
                open={openVideo.video2}
                onClose={() => setOpenVideo({ ...openVideo, video2: false })}
                maxWidth="xl"
              >
                <ReactPlayer
                  controls
                  playing
                  url={testimony2}
                  style={{ border: 'none', outline: 'none' }}
                />
              </Dialog>
              <div className="blog-des-box">
                <p className="blog-date">
                  Am so please trading unreagretably with Ultimatecoins meeting
                  them was never a coincident and am so happy trading with then
                  because they have increased my fund and changed my life
                  totally.
                </p>
              </div>
            </div>
            <div className="blog-box wow fadeInRight">
              <div className="blog-img mb-15 work-box">
                <img
                  src={require('../../assets/test3.jpg')}
                  alt="Work Process"
                />
                <Link
                  to="#"
                  className="play-icon text-center"
                  onClick={() =>
                    setOpenVideo({ ...openVideo, video3: !openVideo.video3 })
                  }
                >
                  <span>
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </span>
                </Link>
              </div>
              <Dialog
                open={openVideo.video3}
                onClose={() => setOpenVideo({ ...openVideo, video3: false })}
                maxWidth="xl"
              >
                <ReactPlayer
                  controls
                  playing
                  url={testimony1}
                  style={{ border: 'none', outline: 'none' }}
                />
              </Dialog>
              <div className="blog-des-box">
                <p className="blog-date">
                  Getting in touch with this company made me understand the
                  meaning of team work.I invested very little but there team
                  guided me to make the best out of this platform, and am so
                  happy to be an investor here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
