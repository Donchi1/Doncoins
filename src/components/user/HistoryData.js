import React from 'react'
import { Link } from 'react-router-dom'
import UserNav from './UserNav'

function HistoryData() {
  return (
    <div>
      <UserNav />
      <section
        className="section_breadcrumb blue_light_bg"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="https://bestwebcreator.com/cryptocash/demo/assets/images/home_banner_bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.1s"
                >
                  History
                </h1>
                <ul
                  className="breadcrumb bg-transparent justify-content-center animation m-0 p-0"
                  data-animation="fadeInUp"
                  data-animation-delay="1.3s"
                >
                  <li>
                    <a href="/user">Dashboard</a>{' '}
                  </li>
                  <li>
                    <span>History</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="authorize_box">
                <div className="title_default_dark title_border text-center">
                  <h4
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    History
                  </h4>
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    All transaction updates
                  </p>
                </div>
                <div className="field_form authorize_form">
                  <div className="text-center ">
                    <table className="table table-hover table-responsive-sm ph-2 ">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Payments</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Date</th>
                          <th scope="col">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>30</td>
                          <td>$3000</td>
                          <td>1/02/3020</td>
                          <td>02:20:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="field_form authorize_form ">
                  <div className="text-center">
                    <table className="table table-hover table-responsive-sm">
                      <thead className="thead-light">
                        <tr>
                          <th>Withdrawals</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>30</td>
                          <td>$3000</td>
                          <td>1/02/3020</td>
                          <td>02:20:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START SECTION CALL TO ACTION- */}
      <section className="blue_light_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="action-content res_md_mb_20">
                <h3
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Let Us Help You to Find a Solution That Meets Your Needs
                </h3>
                <p
                  className="m-0 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  we are always there to handle your issues
                </p>
              </div>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a
                href="/contacts"
                className="btn btn-default btn-radius animation"
                data-animation="fadeInUp"
                data-animation-delay="0.45"
              >
                Contact Us <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bottom_footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                Copyright &copy; cryptoGold {new Date().getFullYear()} All
                Rights Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list_none footer_menu">
                <li>
                  <Link to="/payments">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/payments">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryData
