import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function AccountManger() {
  return (
    <div>
      <div className="row pt-4">
        <div className="col-md-12 col-lg-8 text-light">
          <h4 className="ml-4 pt-3 pb-1 text-primary">
            We are the Cryptogenue company for your investments
          </h4>
          <p
            className=" text-4 ml-4 text-italics "
            style={{ fontStyle: 'italic', fontSize: '1.2rem' }}
          >
            We are here to provide a means of global investments for people of
            low and high income round the whole world. Our mission is to make
            sure no, low and high income earners make the best out of what the
            earn by investing little and earning big. We make sure your earning
            increases prior to the choosen investment plan as our name implies.
            We make sure people make proper use of the income, take advantage of
            the internet and crypography tradings.We provide you a means of
            online multicurrency investment platform base on blockchain
            tecnology. we the are a unique plateform you can invest in crypto
            and earn big.
          </p>
          <Link to="/about">
            <Button className="text-uppercase ml-4 mt-2 bg-primary">
              About-Us
            </Button>
          </Link>
        </div>
        <div className="col-md-12 col-lg-4 text-center pt-3 text-light pb-2">
          <img
            src={require('../../assets/acmanager.JPG')}
            alt="accountManager
      "
            style={{ height: '400px', width: '250px' }}
          />
          <h5>Mr Fredric Anderson</h5>
          <h5>Account Manager Cryptogenus Int</h5>
        </div>
      </div>
    </div>
  )
}

export default AccountManger
