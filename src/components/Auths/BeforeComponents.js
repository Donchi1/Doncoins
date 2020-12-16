import React, { useState, useEffect } from 'react'
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { backgroundcolor } from '../navigation/NavBar'

function BeforeComponents({ children }) {
  const [loading, setloading] = useState(true)
  const authState = useSelector((state) => state.firebase.auth)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3000)
  }, [])

  if (!isLoaded(authState) || loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ minHeight: '100vh', backgroundColor: backgroundcolor }}
      >
        <div>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            <div>
              <img
                src={require('../../assets/coinGold.png')}
                width="200px"
                height="200px"
                className="componentready"
                alt="coinGold"
              />
            </div>
          </motion.div>
          <div
            className="text-uppercase font-weight-bold "
            style={{
              fontSize: '2rem',
              alignItems: 'center',
            }}
            href="/"
          >
            <span className="text-light">Crypto</span>
            <span className="text-primary">genus</span>
          </div>
        </div>
      </div>
    )
  } else {
    return <>{children}</>
  }
}

export default BeforeComponents
