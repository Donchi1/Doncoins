import React, { useState } from 'react'
import * as Icons from 'react-bootstrap-icons'
import { Card } from 'react-bootstrap'
import { itemColor } from '../navigation/NavBar'

function AskedQuestions() {
  const [dropDown1, setdropDown1] = useState(false)
  const [dropDown2, setdropDown2] = useState(false)
  const [dropDown3, setdropDown3] = useState(false)
  const [dropDown4, setdropDown4] = useState(false)
  const [dropDown5, setdropDown5] = useState(false)
  const [dropDown6, setdropDown6] = useState(false)
  return (
    <section className="container-fluid p-5 pt-4 ">
      <h1 className="text-center p-4 display-4 text-light">
        Frequently Asked Questions
      </h1>

      <Card style={{ backgroundColor: itemColor }}>
        <div>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h3 style={{ fontStyle: 'italic' }} className="text-light">
                what is Cryptogenus
              </h3>
              <Icons.Plus
                style={{
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  color: 'white',
                }}
                onClick={() => setdropDown1(!dropDown1)}
              />
            </div>
            {dropDown1 && (
              <Card
                className="p-3  text-light"
                style={{
                  backgroundColor: 'black',
                  border: `1px solid #33ccff`,
                }}
              >
                <Card.Text>
                  <div>
                    <p>
                      Cryptogenus is an Investment Platform were you invest
                      unregretably. We started as a group of young investors,
                      investing in <br /> Cryptography. Today we are one of the
                      known investment platforms in the world.
                    </p>
                  </div>
                </Card.Text>
              </Card>
            )}
          </Card.Header>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-light" style={{ fontStyle: 'italic' }}>
                why i must choose Cryptogenus
              </h3>
              <Icons.Plus
                style={{
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  color: 'white',
                }}
                onClick={() => setdropDown2(!dropDown2)}
              />
            </div>
            {dropDown2 && (
              <Card
                className="p-3  text-light"
                style={{
                  backgroundColor: 'black',
                  border: `1px solid #33ccff`,
                }}
              >
                <Card.Text>
                  <div>
                    <p>
                      You need to invest with us because we are legit, experts,
                      stable, reliable and ever ready to make our clients happy
                      and satisfied. Helping indivituals or group of persons to
                      make the best out of there income is our main focus.
                    </p>
                  </div>
                </Card.Text>
              </Card>
            )}
          </Card.Header>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-light" style={{ fontStyle: 'italic' }}>
                who recieves payments
              </h3>
              <Icons.Plus
                style={{
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  color: 'white',
                }}
                onClick={() => setdropDown3(!dropDown3)}
              />
            </div>
            {dropDown3 && (
              <Card
                className="p-3  text-light"
                style={{
                  backgroundColor: 'black',
                  border: `1px solid #33ccff`,
                }}
              >
                <Card.Text>
                  <div>
                    <p>
                      Anyone that invest with us is aligible to get his or her
                      payments in due time
                    </p>
                  </div>
                </Card.Text>
              </Card>
            )}
          </Card.Header>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-light" style={{ fontStyle: 'italic' }}>
                how long will i get paid
              </h3>
              <Icons.Plus
                style={{
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  color: 'white',
                }}
                onClick={() => setdropDown4(!dropDown4)}
              />
            </div>
            {dropDown4 && (
              <Card
                className="p-3  text-light"
                style={{
                  backgroundColor: 'black',
                  border: `1px solid #33ccff`,
                }}
              >
                <Card.Text>
                  <div>
                    <p>
                      it take less than 2hours after your payment has been
                      recieve on standard investment plans{' '}
                    </p>
                  </div>
                </Card.Text>
              </Card>
            )}
          </Card.Header>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-light" style={{ fontStyle: 'italic' }}>
                who established cryptogenus
              </h3>
              <Icons.Plus
                style={{
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  color: 'white',
                }}
                onClick={() => setdropDown5(!dropDown5)}
              />
            </div>
            {dropDown5 && (
              <Card
                className="p-3  text-light"
                style={{
                  backgroundColor: 'black',
                  border: `1px solid #33ccff`,
                }}
              >
                <Card.Text>
                  <div>
                    <p>
                      Cryptogenus was establish by a group of young investors
                      based in Uk who started with a small business and started{' '}
                      <br /> thinking on how to enbroden there business. As
                      investors, they knew the need to invest and get additional
                      income. They started a small investment platform through
                      banks named <strong>ADDUP</strong> to get an addition
                      wealth in return. The emerge of Cryptography made them
                      expand there view and vision into online Investment and a
                      change of name. Today Cryptogenus is one top giant in
                      Cryptography through Blockchain technology and forex
                      trading.
                    </p>
                  </div>
                </Card.Text>
              </Card>
            )}
          </Card.Header>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-light" style={{ fontStyle: 'italic' }}>
                what is bitcoin
              </h3>
              <Icons.Plus
                style={{
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  color: 'white',
                }}
                onClick={() => setdropDown6(!dropDown6)}
              />
            </div>
            {dropDown6 && (
              <Card
                className="p-3 text-light "
                style={{
                  backgroundColor: 'black',
                  border: `1px solid #33ccff`,
                }}
              >
                <Card.Text>
                  <div>
                    <p>
                      Bitcoin is a form of digital currency which is based on a
                      created open source code held electronically. <br />
                      Bitcoin is a decentralized form of currency meaning that
                      it does not belong to any government and it is not
                      controlled by one.
                    </p>
                  </div>
                </Card.Text>
              </Card>
            )}
          </Card.Header>
        </div>
      </Card>
    </section>
  )
}

export default AskedQuestions
