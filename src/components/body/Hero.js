import React from 'react'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'

function HeroComponent() {
  const authState = useSelector((state) => state.firebase.auth)

  return (
    <div>
      <div
        className="text-light hero d-flex justify-content-center align-items-center"
        style={{
          textAlign: 'center',
        }}
      >
        <div>
          <h2 className="text-uppercase">
            <span
              style={{ fontSize: '3rem', fontFamily: 'serif' }}
              className="text-primary"
            >
              W
            </span>
            elcome to Cryptogenus
          </h2>
          <h5>
            World giant and genus in cryptography. Invest with a little and earn
            big.
          </h5>
          {isLoaded(authState) &&
          !isEmpty(authState) &&
          authState.emailVerified ? (
            <Link to="/user">
              <Button
                color="white"
                size="lg"
                className="text-uppercase bg-primary"
              >
                dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button
                color="white"
                size="lg"
                className="text-uppercase bg-primary"
              >
                Learn More
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
