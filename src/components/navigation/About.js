import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../body/Footer'
import ReuseHero from './ReuseHero'
import Teams from '../body/Teams'
import { bg, backgroundcolor } from './NavBar'

function About() {
  return (
    <div style={{ backgroundColor: backgroundcolor }}>
      <ReuseHero currentClass="about" />
      <section className="d-flex justify-content-around flex-wrap">
        <div className=" col-md-12 col-lg-4 mb-3">
          <h2 className="text-center text-light pt-2  ">
            OUR <span className="text-primary">HISTORY</span>
          </h2>
          <p className="text-light text-2">
            We are here to provide a means of global investments for people of
            low and high income round the whole world. Our mission is to make
            sure no, low and high income earners make the best out of what the
            earn by investing little and earning big. We make sure your earning
            increases prior to the choosen investment plan as our name implies.
            We make sure people make proper use of the income, take advantage of
            the internet and crypography tradings. We are here to provide a
            means of global investments for people of low and high income round
            the whole world. Our mission is to make sure no, low and high income
            earners make the best out of what the earn by investing little and
            earning big. We make sure your earning increases prior to the
            choosen investment plan as our name implies. We make sure people
            make proper use of the income, take advantage of the internet and
            crypography tradings. We are here to provide a means of global
            investments for people of low and high income round the whole world.
            Our mission is to make sure no, low and high income earners make the
            best out of what the earn by investing little and earning big. We
            make sure your earning increases prior to the choosen investment
            plan as our name implies. We make sure people make proper use of the
            income, take advantage of the internet and crypography tradings.
          </p>
        </div>
        <div className="  col-md-12 col-lg-4 mb-3 ">
          <h2 className="text-center text-light pt-2">
            OUR <span className="text-primary">PASSION </span>
          </h2>
          <p className="text-light">
            We are dedicated to our clients, prividing them a stable and
            reliable means of financial stability is our major focus. We give
            our client an opportunity to get a standard profit in due time as
            per there investment status we make sure our clients or investor
            never regrets joining or investing with our platform.
            <span className="text-primary">
              WE ARE THE GENUS IN THE CRYPO INVESTMENT MARKET
            </span>
          </p>
        </div>
        <div className="  col-md-12 col-lg-4 mb-3 ">
          <h2 className="text-center text-light pt-2">
            OUR<span className="text-primary"> MISSION</span>
          </h2>
          <p className="text-light">
            We are here to provide a means of global investments for people of
            low and high income round the whole world. Our mission is to make
            sure no, low and high income earners make the best out of what the
            earn by investing little and earning big. We make sure your earning
            increases prior to the choosen investment plan as our name implies.
            We make sure people make proper use of the income, take advantage of
            the internet and crypography tradings.
          </p>
        </div>
      </section>
      <div className="text-center  pb-3 ">
        <h1 className=" text-light pt-2 pb-2">
          <span className="text-primary">CLICK THE REGISTER BUTTON</span> TO
          PLUS YOUR COIN IN DUE SEASSON
        </h1>
        <Link to="/signup">
          <Button size="lg" className="text-light bg-primary">
            REGISTER{' '}
          </Button>
        </Link>
      </div>
      <Teams />
      <Footer />
    </div>
  )
}

export default About
