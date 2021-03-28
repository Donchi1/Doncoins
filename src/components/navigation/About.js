import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../body/Footer'
import Testimonials from '../body/Testimonials'

import NavBar from './NavBar'

function About() {
  return (
    <>
      <NavBar />
      <section className=" 1-column undefined  page-animated svg-wrapper ">
        <section className="container pt-5  " style={{ height: '30vh' }}>
          <div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="page-banner text-center">
                  <h2 className="banner-content pt-5 title text-uppercase text-bold ">
                    About Us
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="account-register" className="flexbox-container">
          <section>
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 text-center flex-align justify-center order-r-2 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.3s"
                >
                  <div className="work-box w-100">
                    <div className="work-box-bg"></div>
                    <img
                      src="https://pixinvent.com/demo/crypto-ico-admin/app-assets/images/pages/account-login.png"
                      class="card-account-img width-200"
                      alt="card-account-img"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 flex-align order-r-1 mb-r-30 ">
                  <div className="work-box">
                    <h3
                      className="work-process-title pb-25 nav-color btn-gradient-purple animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      We’ve built a platform to for your stable crypto
                      investments.
                    </h3>
                    <p
                      className="work-des pb-20 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      We are establish to reach out to people who really wants
                      to make wealth with the little they have.
                    </p>

                    <ul className="check-list">
                      <li
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.3s"
                      >
                        <span>
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </span>{' '}
                        <p>We are legit, stable and realiable</p>
                      </li>
                      <li
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.3s"
                      >
                        <span>
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </span>{' '}
                        <p>We are compitent to our services</p>
                      </li>
                      <li
                        className="animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="0.3s"
                      >
                        <span>
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </span>{' '}
                        <p>We are satisfied with our word to our clients</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-main  ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 flex-align mb-r-30 wow fadeInLeft">
                  <div className="work-box">
                    <h3
                      className="work-process-title pb-25 animated nav-color btn-gradient-purple"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.3s"
                    >
                      Our Mission
                    </h3>
                    <p
                      className="about-des pb-20 animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.3s"
                    >
                      Get ready your wealth for your future establishment{' '}
                    </p>

                    <p
                      className="work-des animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      We are here to provide a means of global investments for
                      people of low and high income round the whole world.We
                      stand out as one standard platform for your crypto
                      investments, Our mission is to make sure there is growth
                      and standard savings for all people who has the mindset of
                      investment. We provide that stable platform where you
                      invest in crypto and get your standard increament for your
                      life establishment. Trade with Doncoins today for a better
                      tomorrow.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 text-center flex-align justify-center wow fadeInRight">
                  <div className="work-box">
                    <img
                      src="https://themes.templatescoder.com/crypton/html/demo/1-0/01-Dark-Theme/images/about-1.jpg"
                      alt="Work Process"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-main ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 text-center flex-align justify-center order-r-2 wow fadeInLeft">
                  <div
                    className="work-box animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    <img
                      src="https://themes.templatescoder.com/crypton/html/demo/1-0/01-Dark-Theme/images/about-2.png"
                      alt="Work Process"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 flex-align mb-r-30 order-r-1 wow fadeInRight">
                  <div className="work-box">
                    <h3
                      className="work-process-title pb-25 nav-color btn-gradient-purple animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.4s"
                    >
                      Why are so many people investing Digital currencies like
                      BitCoin
                    </h3>

                    <p
                      className="work-des animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.5s"
                    >
                      Bitcoin is different than any currency you’ve used before,
                      so it’s very important to understand some key points. You
                      can use them to send or receive any amount of money, with
                      anyone, anywhere in the world, at very low cost. Bitcoin
                      payments are impossible to block and safety. Bitcoin is
                      different than any currency you’ve used before, so it’s
                      very important to understand some key points. You can use
                      them to send or receive any amount of money, with anyone,
                      anywhere in the world, at very low cost. Bitcoin payments
                      are impossible to block and safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section id="team" className="team section-padding ">
            <div className="container">
              <div className="heading text-center">
                <div
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.3s"
                >
                  <h6 className="sub-title">Creative</h6>
                  <h2 className="title">Team</h2>
                </div>
                <p
                  className="content-desc animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
                >
                  A cryptocurrency (or crypto currency) is a digital asset
                  designed to work as a medium
                  <br className="d-none d-xl-block" />
                  of exchange that uses cryptography to secure its transactions.
                </p>
              </div>
              <div className="row team-intro justify-content-center text-center">
                <div
                  className="col-12 col-md-4 col-lg-2 team-width animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                >
                  <span>18</span>
                  <p>
                    Creative and
                    <br />
                    Dedicated People
                  </p>
                </div>
                <div
                  className="col-12 col-md-4 col-lg-2 team-width animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.6s"
                >
                  <span>125</span>
                  <p>Years of combined experience</p>
                </div>
                <div
                  className="col-12 col-md-4 col-lg-2 team-width animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.7s"
                >
                  <span>10</span>
                  <p>Years of blockchain experience</p>
                </div>
              </div>
              <div className="team-profile mt-5">
                <div className="row mb-5">
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="flipInX"
                    data-animation-delay="0.8s"
                  >
                    <div className="d-flex team-member">
                      <div
                        className="team-img float-left mr-3"
                        data-toggle="modal"
                        data-target="#teamUser9"
                      >
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-9.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Logan S. Perez</div>
                        <div className="role">Machine Learning Engineer</div>
                        <div className="social-profile mt-3">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="flipInX"
                    data-animation-delay="0.9s"
                  >
                    <div className="d-flex team-member">
                      <div
                        className="team-img float-left mr-3"
                        data-toggle="modal"
                        data-target="#teamUser6"
                      >
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-6.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Susan J. Newsom</div>
                        <div className="role">Graphic Designer</div>
                        <div className="social-profile mt-3">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="flipInX"
                    data-animation-delay="1.0s"
                  >
                    <div className="d-flex team-member">
                      <div
                        className="team-img float-left mr-3"
                        data-toggle="modal"
                        data-target="#teamUser2"
                      >
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-2.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Mary J. Wardle</div>
                        <div className="role">Marketing Manager</div>
                        <div className="social-profile mt-3">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="flipInX"
                    data-animation-delay="1.1s"
                    data-toggle="modal"
                    data-target="#teamUser10"
                  >
                    <div className="d-flex team-member">
                      <div className="team-img float-left mr-3">
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-10.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Nicholas M. Sharpe</div>
                        <div className="role">UI / UX Designer</div>
                        <div className="social-profile mt-3">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="flipInX"
                    data-animation-delay="1.2s"
                    data-toggle="modal"
                    data-target="#teamUser4"
                  >
                    <div className="d-flex team-member">
                      <div className="team-img float-left mr-3">
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-4.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Cecelia T. Carter</div>
                        <div className="role">Accountant</div>
                        <div className="social-profile mt-3">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="flipInX"
                    data-animation-delay="1.3s"
                    data-toggle="modal"
                    data-target="#teamUser13"
                  >
                    <div className="d-flex team-member">
                      <div className="team-img float-left mr-3">
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-13.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Terry T. Robinette</div>
                        <div className="role">Developer</div>
                        <div className="social-profile mt-3">
                          <Link
                            to="/"
                            title="Linkedin"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-linkedin"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Twitter"
                            className="font-medium grey-accent2 mr-2"
                          >
                            <i className="fa fa-twitter-alt"></i>
                          </Link>
                          <Link
                            to="/"
                            title="Github"
                            className="font-medium grey-accent2"
                          >
                            <i className="fa fa-github"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/ Team */}
          {/* Advisors */}
          <section id="advisor" className="advisor team section-padding">
            <div className="container">
              <div className="heading text-center">
                <div
                  className="animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.3s"
                >
                  <h6 className="sub-title">helpful</h6>
                  <h2 className="title">Advisors</h2>
                </div>
                <p
                  className="content-desc animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
                >
                  Digital currency is a money balance recorded electronically on
                  <br className="d-none d-xl-block" />a stored-value card or
                  other device. Another form of electronic money is network
                  money.
                </p>
              </div>
              <div className="team-profile mt-5">
                <div className="row mb-5">
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="jello"
                    data-animation-delay="0.5s"
                  >
                    <div className="d-flex">
                      <div
                        className="team-img float-left mr-3"
                        data-toggle="modal"
                        data-target="#teamUser1"
                      >
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-1.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="team-icon">
                        <i className="fa fa-linkedin"></i>
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Nadia Sidko</div>
                        <div className="role">Blockchain Entrepreneur</div>
                        <div className="crypto-profile">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-1.png"
                            alt="Team User"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="jello"
                    data-animation-delay="0.6s"
                  >
                    <div className="d-flex">
                      <div
                        className="team-img float-left mr-3"
                        data-toggle="modal"
                        data-target="#teamUser8"
                      >
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-8.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="team-icon">
                        <i className="fa fa-linkedin"></i>
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Pavel Volek</div>
                        <div className="role">Entrepreneur and Investor</div>
                        <div className="crypto-profile">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-2.png"
                            alt="Team User"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="jello"
                    data-animation-delay="0.7s"
                    data-toggle="modal"
                    data-target="#teamUser3"
                  >
                    <div className="d-flex">
                      <div className="team-img float-left mr-3">
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-3.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="team-icon">
                        <i className="fa fa-linkedin"></i>
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Alyona Blakytna</div>
                        <div className="role">Fin-Tech Entrepreneur</div>
                        <div className="crypto-profile">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-3.png"
                            alt="Team User"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="jello"
                    data-animation-delay="0.8s"
                    data-toggle="modal"
                    data-target="#teamUser11"
                  >
                    <div className="d-flex">
                      <div className="team-img float-left mr-3">
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-11.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="team-icon">
                        <i className="fa fa-linkedin"></i>
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Martin Solarik</div>
                        <div className="role">Fin-Tech Investor</div>
                        <div className="crypto-profile">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-4.png"
                            alt="Team User"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="jello"
                    data-animation-delay="0.9s"
                    data-toggle="modal"
                    data-target="#teamUser7"
                  >
                    <div className="d-flex">
                      <div className="team-img float-left mr-3">
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-7.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="team-icon">
                        <i className="fa fa-linkedin"></i>
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Kate Fisenko</div>
                        <div className="role">Fin-Tech Investor</div>
                        <div className="crypto-profile">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-5.png"
                            alt="Team User"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-12 col-md-6 col-lg-4 mb-5 animated"
                    data-animation="jello"
                    data-animation-delay="1.0s"
                    data-toggle="modal"
                    data-target="#teamUser12"
                  >
                    <div className="d-flex">
                      <div className="team-img float-left mr-3">
                        <img
                          src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-12.png"
                          alt="team-profile-1"
                          className="rounded-circle"
                          width="128"
                        />
                      </div>
                      <div className="team-icon">
                        <i className="fa fa-linkedin"></i>
                      </div>
                      <div className="profile align-self-center">
                        <div className="name">Michal Krajnansky</div>
                        <div className="role">Blockchain Entrepreneur</div>
                        <div className="crypto-profile">
                          <img
                            src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/company-logo-1.png"
                            alt="Team User"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/ Advisors */}
          <Testimonials />
          <section className="exchange-listing" id="exchange-listing">
            <div className="container-fluid bg-color">
              <div className="container">
                <div className="row listing list-unstyled">
                  <div
                    className="col d-none d-lg-block text-center animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <img
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/icon-arrow.png"
                      alt="icon-arrow"
                    />
                    <p className="mt-1">
                      Exchange listing
                      <br />
                      to be announced
                    </p>
                  </div>
                  <div
                    className="col text-center animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <h2>4.3/5</h2>
                    <img
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/ico-track.png"
                      alt="ico-track"
                    />
                  </div>
                  <div
                    className="col text-center animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.4s"
                  >
                    <h2>4.8/5</h2>
                    <img
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/ico-bench.png"
                      alt="ico-bench"
                    />
                  </div>
                  <div
                    className="col text-center animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.5s"
                  >
                    <h2>3.9/5</h2>
                    <img
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/ico-ranker.png"
                      alt="ico-ranker"
                    />
                  </div>
                  <div
                    className="col text-center animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.6s"
                  >
                    <h2>4.1/5</h2>
                    <img
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/ico-bazaar.png"
                      alt="ico-bazaar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </section>
      <div>
        <div
          className="modal ico-modal fade"
          id="ico-modal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    id="video"
                    title="video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal team-modal fade"
          id="teamUser9"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="teamUser9Title"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <div className="row p-4">
                  <div className="col-12 col-md-5">
                    <img
                      className="img-fluid rounded"
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-9-lg.jpg"
                      alt="Logan S. Perez"
                    />
                  </div>
                  <div className="col-12 col-md-7 mt-sm-3">
                    <h5 id="teamUser9Title">Logan S. Perez</h5>
                    <small className="text-muted mb-0 ">
                      Machine Learning Engineer
                    </small>
                    <div className="social-profile">
                      <Link
                        to="/"
                        title="Linkedin"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-linkedin"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Twitter"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-twitter-alt"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Github"
                        className="font-medium grey-accent2"
                      >
                        <i className="fa fa-github"></i>
                      </Link>
                    </div>
                    <div className="my-4">
                      <p>Experienced algorithmic machine learning engineer</p>
                      <p>
                        An active and creative engineer with 18 years of
                        experience in machine learning. He creates secure,
                        user-friendly experiences for clients through digital
                        applications.
                      </p>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">SQL</small>{' '}
                      <small className="float-right">80%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '85%' }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Python</small>{' '}
                      <small className="float-right">90%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">NLP</small>{' '}
                      <small className="float-right">85%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser6 */}
      <div
        className="modal team-modal fade"
        id="teamUser6"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser6Title"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-6-lg.jpg"
                    alt="Susan J. Newsom"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser6Title">Susan J. Newsom</h5>
                  <small className="text-muted mb-0 ">Graphic Designer</small>
                  <div className="social-profile">
                    <Link
                      to="/"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Twitter"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-twitter-alt"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Github"
                      className="font-medium grey-accent2"
                    >
                      <i className="fa fa-github"></i>
                    </Link>
                  </div>
                  <div className="my-4">
                    <p>Experienced graphic designer.</p>
                    <p>
                      A stable, experienced graphic designer for the last 12
                      years.She creates the graphics for published, printed or
                      electronic media for advertising. She makes sure
                      accessible and memorable information is made available to
                      our clients.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">InDesign</small>{' '}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Photoshop</small>{' '}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Illustrator</small>{' '}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '75%' }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser2 */}
      <div
        className="modal team-modal fade"
        id="teamUser2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser2Title"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-2-lg.jpg"
                    alt="Mary J. Wardle"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser2Title">Mary J. Wardle</h5>
                  <small className="text-muted mb-0 ">Marketing manager</small>
                  <div className="social-profile">
                    <Link
                      to="/"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Twitter"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-twitter-alt"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Github"
                      className="font-medium grey-accent2"
                    >
                      <i className="fa fa-github"></i>
                    </Link>
                  </div>
                  <div className="my-4">
                    <p>Experienced crypto Maketing manager</p>
                    <p>
                      An experienced marketing manager for the last 10 years.
                      She estimates the demand for cryptocurrencies and
                      blockchainand compare values. Monitoring trends and
                      creating strategies to make our clients maximize there
                      profit.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{' '}
                    <small className="float-right">75%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Marketing</small>{' '}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Business</small>{' '}
                    <small className="float-right">75%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '75%' }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser10 */}
      <div
        className="modal team-modal fade"
        id="teamUser10"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser10Title"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-10-lg.jpg"
                    alt="Nicholas M. Sharpe"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser10Title">Nicholas M. Sharpe</h5>
                  <small className="text-muted mb-0 ">UI / UX Designer</small>
                  <div className="social-profile">
                    <Link
                      to="/"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Twitter"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-twitter-alt"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Github"
                      className="font-medium grey-accent2"
                    >
                      <i className="fa fa-github"></i>
                    </Link>
                  </div>
                  <div className="my-4">
                    <p>Experienced crypto trader and a Ui Designer.</p>
                    <p>
                      Nicholas an experienced Ui and Ux designer for more than
                      15year. He has used his skills to make a stable and
                      beatiful designs in our company. He is fast and reliable
                      in reaching to our clients in UI related issues.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{' '}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Photoshop</small>{' '}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Microsoft office</small>{' '}
                    <small className="float-right">75%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '75%' }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser4 */}
      <div
        className="modal team-modal fade"
        id="teamUser4"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser4Title"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-4-lg.jpg"
                    alt="Cecelia T. Carter"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser4Title">Cecelia T. Carter</h5>
                  <small className="text-muted mb-0 ">Accountant</small>
                  <div className="social-profile">
                    <Link
                      to="/"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link
                      to="/"
                      Linktitle="Twitter"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-twitter-alt"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Github"
                      className="font-medium grey-accent2"
                    >
                      <i className="fa fa-github"></i>
                    </Link>
                  </div>
                  <div className="my-4">
                    <p>
                      Experienced algorithmic crypto trader and an accountant.
                    </p>
                    <p>
                      Cecelia an enthuaistic,passionate and hard working young
                      man with a 10years experience in in financial company. He
                      has used his skilled to create stable crypto routes and
                      stable means crypto trading in cryptogold platform
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{' '}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Accounting</small>{' '}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Data analysis</small>{' '}
                    <small className="float-right">75%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: ' 75%' }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser13 */}
      <div
        className="modal team-modal fade"
        id="teamUser13"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser13Title"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-13-lg.jpg"
                    alt="Terry T. Robinette"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser13Title">Terry T. Robinette</h5>
                  <small className="text-muted mb-0 ">Developer</small>
                  <div className="social-profile">
                    <Link
                      to="/"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Twitter"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-twitter-alt"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Github"
                      className="font-medium grey-accent2"
                    >
                      <i className="fa fa-github"></i>
                    </Link>
                  </div>
                  <div className="my-4">
                    <p>
                      Experienced algorithmic crypto trader and a daveloper.
                    </p>
                    <p>
                      An Experienced and skilled developer with 10 years
                      experience in python and c++ programming languages, using
                      his developing skills to make out the best for our team.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{' '}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Python</small>{' '}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">C++</small>{' '}
                    <small className="float-right">75%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '75%' }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Advisors Team Modal Pop-ups */}
      {/* Team user popup - teamUser1 */}
      <div
        className="modal team-modal fade"
        id="teamUser1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser1Title"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-1-lg.jpg"
                    alt="Nadia Sidko"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser1Title">Nadia Sidko</h5>
                  <small className="text-muted mb-0 ">
                    Blockchain Entrepreneur
                  </small>
                  <div className="social-profile">
                    <Link
                      to="/"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Twitter"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-twitter-alt"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Github"
                      className="font-medium grey-accent2"
                    >
                      <i className="fa fa-github"></i>
                    </Link>
                  </div>
                  <div className="my-4">
                    <p>
                      Experienced algorithmic crypto trader and a blockchain
                      entrepreneur.
                    </p>
                    <p>
                      I’m focusing on the logic behind the combination of
                      blockchain analysis. An investor, contributor and adviser
                      to this great crypto investment platform doncoins.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{' '}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Contributions</small>{' '}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Investments</small>{' '}
                    <small className="float-right">75%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '75%' }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser8 */}
      <div
        className="modal team-modal fade"
        id="teamUser8"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="teamUser8Title"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-12 col-md-5">
                  <img
                    className="img-fluid rounded"
                    src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-8-lg.jpg"
                    alt="Pavel Volek"
                  />
                </div>
                <div className="col-12 col-md-7 mt-sm-3">
                  <h5 id="teamUser8Title">Pavel Volek</h5>
                  <small className="text-muted mb-0 ">
                    Entrepreneur and Investor
                  </small>
                  <div className="social-profile">
                    <Link
                      to="/"
                      title="Linkedin"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Twitter"
                      className="font-medium grey-accent2 mr-2"
                    >
                      <i className="fa fa-twitter-alt"></i>
                    </Link>
                    <Link
                      to="/"
                      title="Github"
                      className="font-medium grey-accent2"
                    >
                      <i className="fa fa-github"></i>
                    </Link>
                  </div>
                  <div className="my-4">
                    <p>
                      Experienced algorithmic crypto trader and a stable
                      entrepreneur.
                    </p>
                    <p>
                      The ceo and owner of min-now ltd a golds mining company. A
                      real time entrepreneur and a real time investor in
                      cryptography. He is an adviser, contributor and an
                      investor, investing both time and money to make doincoins
                      best crypto trading platform.
                    </p>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Blockchain</small>{' '}
                    <small className="float-right">85%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Contributions</small>{' '}
                    <small className="float-right">90%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mb-0">
                    <small className="text-uppercase">Investments</small>{' '}
                    <small className="float-right">75%</small>
                  </h6>
                  <div className="progress box-shadow-1 mb-4">
                    <div
                      className="progress-bar progress-orange"
                      role="progressbar"
                      style={{ width: '75%' }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team user popup - teamUser3 */}
      <>
        <div
          className="modal team-modal fade"
          id="teamUser3"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="teamUser3Title"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <div className="row p-4">
                  <div className="col-12 col-md-5">
                    <img
                      className="img-fluid rounded"
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-3-lg.jpg"
                      alt="Alyona Blakytna"
                    />
                  </div>
                  <div className="col-12 col-md-7 mt-sm-3">
                    <h5 id="teamUser3Title">Alyona Blakytna</h5>
                    <small className="text-muted mb-0 ">
                      Fin-Tech Entrepreneur
                    </small>
                    <div className="social-profile">
                      <Link
                        to="/"
                        title="Linkedin"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-linkedin"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Twitter"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-twitter-alt"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Github"
                        className="font-medium grey-accent2"
                      >
                        <i className="fa fa-github"></i>
                      </Link>
                    </div>
                    <div className="my-4">
                      <p>
                        Experienced algorithmic crypto trader and a Fin-tec
                        entrepreneur.
                      </p>
                      <p>
                        The ceo and owner of Alico gas ltd, experienced crypto
                        investor and a real time crypto evangelist. An investor,
                        contributor, adviser that invest both time and money for
                        the growth and standard ofour company Doincoins.
                      </p>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Blockchain</small>{' '}
                      <small className="float-right">85%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '85%' }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Contributions</small>{' '}
                      <small className="float-right">90%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Investments</small>{' '}
                      <small className="float-right">75%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal team-modal fade"
          id="teamUser11"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="teamUser11Title"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <div className="row p-4">
                  <div className="col-12 col-md-5">
                    <img
                      className="img-fluid rounded"
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-11-lg.jpg"
                      alt="Martin Solarik"
                    />
                  </div>
                  <div className="col-12 col-md-7 mt-sm-3">
                    <h5 id="teamUser11Title">Martin Solarik</h5>
                    <small className="text-muted mb-0 ">
                      Fin-Tech Investor
                    </small>
                    <div className="social-profile">
                      <Link
                        to="/"
                        title="Linkedin"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-linkedin"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Twitter"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-twitter-alt"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Github"
                        className="font-medium grey-accent2"
                      >
                        <i className="fa fa-github"></i>
                      </Link>
                    </div>
                    <div className="my-4">
                      <p>
                        Experienced algorithmic crypto trader and a fin-tec
                        investor.
                      </p>
                      <p>
                        The best way to get maximum wealth is to work as a
                        team.Martin is a stable and a trusted adviser and
                        investor to our company. A devoted young man in
                        businesses. He has contributed both time and money to
                        make doincoins one top, stable crypto investment company
                        of the world.
                      </p>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Blockchain</small>{' '}
                      <small className="float-right">85%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '85%' }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Contributions</small>{' '}
                      <small className="float-right">90%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Investments</small>{' '}
                      <small className="float-right">75%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal team-modal fade"
          id="teamUser7"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="teamUser7Title"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <div className="row p-4">
                  <div className="col-12 col-md-5">
                    <img
                      className="img-fluid rounded"
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-7-lg.jpg"
                      alt="Kate Fisenko"
                    />
                  </div>
                  <div className="col-12 col-md-7 mt-sm-3">
                    <h5 id="teamUser7Title">Kate Fisenko</h5>
                    <small className="text-muted mb-0 ">
                      Fin-Tech Investor
                    </small>
                    <div className="social-profile">
                      <Link
                        to="/"
                        title="Linkedin"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-linkedin"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Twitter"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-twitter-alt"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Github"
                        className="font-medium grey-accent2"
                      >
                        <i className="fa fa-github"></i>
                      </Link>
                    </div>
                    <div className="my-4">
                      <p>
                        Experienced algorithmic crypto trader and a fin-tec
                        investor.
                      </p>
                      <p>
                        The owner of the leading tec company in US. An adviser,
                        investor, a trader and a real time entrepreneur. She has
                        contributed time, energy and money for the growth and
                        stability of Doncoins.
                      </p>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Blockchain</small>{' '}
                      <small className="float-right">85%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '85%' }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Cryto Tec</small>{' '}
                      <small className="float-right">90%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Investments</small>{' '}
                      <small className="float-right">75%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal team-modal fade"
          id="teamUser12"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="teamUser12Title"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <div className="row p-4">
                  <div className="col-12 col-md-5">
                    <img
                      className="img-fluid rounded"
                      src="https://pixinvent.com/demo/crypto-ico/theme-assets/images-3d-animation/user-12-lg.jpg"
                      alt="Michal Krajnansky"
                    />
                  </div>
                  <div className="col-12 col-md-7 mt-sm-3">
                    <h5 id="teamUser12Title">Michal Krajnansky</h5>
                    <small className="text-muted mb-0 ">
                      Blockchain Entrepreneur
                    </small>
                    <div className="social-profile">
                      <Link
                        to="/"
                        title="Linkedin"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-linkedin"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Twitter"
                        className="font-medium grey-accent2 mr-2"
                      >
                        <i className="fa fa-twitter-alt"></i>
                      </Link>
                      <Link
                        to="/"
                        title="Github"
                        className="font-medium grey-accent2"
                      >
                        <i className="fa fa-github"></i>
                      </Link>
                    </div>
                    <div className="my-4">
                      <p>
                        Experienced algorithmic crypto trader and a standard
                        blockchain entrepreneur.
                      </p>
                      <p>
                        I’m focusing on the logic behind the stability of
                        blockchain analysis, a standard and able blockchain
                        entrepreneur, an investor and an adviser.He is a real
                        time entrepreneur contribution time and energy for the
                        stability and growth of this company.
                      </p>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Blockchain</small>{' '}
                      <small className="float-right">85%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '85%' }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">Python</small>{' '}
                      <small className="float-right">90%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <h6 className="mb-0">
                      <small className="text-uppercase">C++</small>{' '}
                      <small className="float-right">75%</small>
                    </h6>
                    <div className="progress box-shadow-1 mb-4">
                      <div
                        className="progress-bar progress-orange"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default About
