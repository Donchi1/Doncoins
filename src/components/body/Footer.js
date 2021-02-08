import React, { useEffect, useState } from 'react'
//import  Icons from "react-bootstrap-icons"
import * as Icons from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { itemColor } from '../navigation/NavBar'
import { newsLetterAction } from '../Auths/Action'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar } from '@material-ui/core'

function Footer() {
  const [input, setinput] = useState('')
  const [getData, setgetData] = useState('')
  const [openSnack, setopenSnack] = useState(false)
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const letterSuccess = useSelector(
    (state) => state.projectReducer.subcriptionSuccess,
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    setinput('')
    newsLetterAction(getData, firebase, dispatch)
    if (letterSuccess) {
      return setopenSnack(true)
    }
  }

  const back = () => {
    if (window.scrollY > 100) {
      document.querySelector('.backtop').style.display = 'block'
    } else {
      document.querySelector('.backtop').style.display = 'none'
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', back)

    return () => {
      window.removeEventListener('scroll', back)
    }
  }, [])

  return (
    <section style={{ backgroundColor: itemColor }} className="pt-3 pb-2">
      <div className="d-flex justify-content-around flex-wrap ">
        <div className=" col-md-12 col-lg-3">
          <h1 className="text-primary pt-3 pb-3 ">Our Company</h1>
          <div className="text-light">
            <div>
              <Link to="/" className="text-light">
                <h5>Home</h5>
              </Link>
              <Link to="/services" className="text-light">
                {' '}
                <h5>Services</h5>
              </Link>
            </div>
            <div>
              <Link to="/about" className="text-light">
                {' '}
                <h5>About</h5>
              </Link>
              <Link to="/pricing" className="text-light">
                {' '}
                <h5>Investment Plans</h5>
              </Link>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={input}
                placeholder="Email"
                onChange={(e) => setinput(e.target.value)}
                className="subInput text-light"
              />
              <button
                type="submit"
                onClick={() => setgetData(input)}
                className="subBtn bg-primary text-light text-uppercase "
              >
                subscribe
              </button>
            </form>
            <p>subscribe to our news channel to get updated </p>
            <Snackbar
              onClose={() => setopenSnack(false)}
              open={openSnack}
              message={letterSuccess}
              className="text-light text-warning"
              autoHideDuration={500}
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            ></Snackbar>
          </div>
        </div>
        <div className=" col-md-12 col-lg-3">
          <h1 className="text-primary pt-3 pb-3">Help and Supports</h1>
          <div className="text-light">
            <div>
              <Link to="/contacts" className="text-light">
                {' '}
                <h5>Contact</h5>
              </Link>
              <Link to="signup" className="text-light">
                <h5>Register</h5>
              </Link>
            </div>
            <div>
              <Link to="login" className="text-light">
                <h5>Login</h5>{' '}
              </Link>
              <Link to="" className="text-light">
                <h5>Terms And Conditions</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className=" col-md-12 col-lg-3">
          <h1 className="text-primary pt-3 pb-3">Contact Us</h1>

          <div className="text-light">
            <p>Email us on contacts@cryptogenus.org</p>
            <p>+44(744)837-8394</p>

            <p>mon 8am-4pm to friday 8am-1pm</p>
            <div>
              <Icons.Facebook
                style={{ cursor: 'pointer' }}
                className=" m-2 text-primary"
              />
              <Icons.Twitter
                style={{ cursor: 'pointer' }}
                className=" m-2 text-light"
              />
              <Icons.Email
                style={{ cursor: 'pointer' }}
                className="m-2 text-secondary"
              />
              <Icons.Instagram
                style={{ cursor: 'pointer', color: 'burlywood' }}
                className="m-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-light d-flex justify-content-around flex-wrap pt-4 ">
        <div className="  col-sm-12  col-lg-3 mt-2">
          <h5>online users</h5>
          <h3>500k</h3>
        </div>
        <div className="col-sm-12 col-lg-3 mt-2">
          <h5>Daily Transactions</h5>
          <h3>50k</h3>
        </div>
        <div className=" col-sm-12 col-lg-3 mt-2">
          <h5>Monthly Payments</h5>
          <h3>$500,000</h3>
        </div>
      </div>

      <div className=" text-right mr-2 backtop">
        <Icons.ArrowUpward
          className="text-light bg-primary "
          fontSize="large"
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        />
      </div>

      <div className="text-center text-light pt-3">
        <span>©copywrite Cryptogenus 2020 all right reserved</span>
        <Navbar.Brand
          className="text-uppercase ml-5 mt-4 font-weight-bold"
          style={{
            fontSize: '2rem',
            alignItems: 'center',
          }}
        >
          Crypto<span className="text-primary">genus</span>
        </Navbar.Brand>
      </div>
    </section>
  )
}

export default Footer
