import React from 'react'
import * as Icons from 'react-bootstrap-icons'
import { bg, itemColor } from '../navigation/NavBar'
import { Card } from 'react-bootstrap'

function Service() {
  return (
    <div className="container-fluid ">
      <h1 className=" text-center text-light pt-5  text-uppercase">Services</h1>
      <div
        className=" m-auto "
        style={{ height: '0.3rem', width: '20%', background: bg }}
      />
      <div className="row d-flex justify-content-center align-items-center text-center text-light p-4">
        <Card
          className=" align-items-center mx-2 mt-3 "
          style={{ width: '28rem', backgroundColor: itemColor }}
        >
          <Icons.Lock size={95} className=" m-4" style={{ color: '#3bccff' }} />
          <h3 className="text-primary">Security</h3>
          <p>
            we build a strong security system making <br /> sure our client data
            are secured
          </p>
        </Card>
        <Card
          className=" align-items-center mx-2 mt-3 "
          style={{ width: '28rem', backgroundColor: itemColor }}
        >
          <Icons.Bricks
            size={95}
            className=" m-4"
            style={{ color: '#3bccff' }}
          />
          <h3 className="text-primary">Build your life wealth</h3>
          <p>
            Trade with us and build in <br /> bricks your life wealth
          </p>
        </Card>
        <Card
          className=" align-items-center  mx-2 mt-3"
          style={{ width: '28rem', backgroundColor: itemColor }}
        >
          <Icons.CardHeading
            size={95}
            className="  m-4"
            style={{ color: '#3bccff' }}
          />
          <h3 className="text-primary">Payment Method</h3>
          <p>
            We pay both with Bank Transfer <br />
            and Cryto payments method
          </p>
        </Card>

        <Card
          className=" align-items-center mx-2 mt-3 "
          style={{ width: '28rem', backgroundColor: itemColor }}
        >
          <Icons.Globe
            size={95}
            className=" m-4"
            style={{ color: '#3bccff' }}
          />
          <h3 className="text-primary">Popularity</h3>
          <p>
            We have gone global because none of our <br /> clients has ever
            regreted trading with us
          </p>
        </Card>
        <Card
          className="   align-items-center  mx-2 mt-3"
          style={{ width: '28rem', backgroundColor: itemColor }}
        >
          <Icons.Phone
            size={95}
            className=" m-4"
            style={{ color: '#3bccff' }}
          />
          <h3 className="text-primary">Mobile App</h3>
          <p>
            Our mobile app is on playstore <br /> for easy trading by our
            clients
          </p>
        </Card>
        <Card
          className=" align-items-center mx-2 mt-3"
          style={{ width: '28rem', backgroundColor: itemColor }}
        >
          <Icons.Wallet2
            size={95}
            className=" m-4"
            style={{ color: '#3bccff' }}
          />
          <h3 className="text-primary"> Satisfaction</h3>
          <p>
            Trade with us with our perfect trading <br /> system and never
            regret your actions
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Service
