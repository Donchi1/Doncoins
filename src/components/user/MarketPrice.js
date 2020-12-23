import React, { useEffect, useState } from 'react'
import Nomics from 'nomics'

import { Table } from 'react-bootstrap'

const apiKey = '1f900b92d535d1f5c12f4ec3a6e2ca8'
function MarketPrice() {
  const [currencies, setCurrencies] = useState({
    cur0: {},
    cur1: {},
    cur2: {},
    cur3: {},
    cur4: {},
    cur5: {},
    cur6: {},
    cur7: {},
    cur8: {},
    cur9: {},
    cur10: {},
    cur11: {},
    cur12: {},
    cur13: {},
    cur14: {},
    cur15: {},
    cur16: {},
    cur17: {},
    cur18: {},
    cur19: {},
  })

  useEffect(() => {
    client()
  }, [])

  const nomics = new Nomics({
    apiKey: apiKey,
  })

  const client = async () => {
    const newCurrencies = await nomics.currenciesTicker({
      headers: 'Access-Control-Allow-Origin: http://localhost:8888',
    })

    console.log(newCurrencies[1])
    setCurrencies({
      cur0: newCurrencies[0],
      cur1: newCurrencies[1],
      cur2: newCurrencies[2],
      cur3: newCurrencies[3],
      cur4: newCurrencies[4],
      cur5: newCurrencies[5],
      cur6: newCurrencies[6],
      cur7: newCurrencies[7],
      cur8: newCurrencies[8],
      cur9: newCurrencies[9],
      cur10: newCurrencies[10],
      cur11: newCurrencies[11],
      cur12: newCurrencies[12],
      cur13: newCurrencies[13],
      cur14: newCurrencies[14],
      cur15: newCurrencies[15],
      cur16: newCurrencies[16],
      cur17: newCurrencies[17],
      cur18: newCurrencies[18],
      cur19: newCurrencies[19],
    })
  }

  return (
    <div>
      <Table
        className="text-light mt-3 striped borded hover text-center"
        responsive="md"
      >
        <thead className="bg-dark text-primary " style={{ fontSize: '1.3rem' }}>
          <tr>
            <th>Name</th>

            <th>price</th>
            <th>market Cap</th>
            <th>Market Supply(24h)</th>
            <th>Calculating supply</th>
            <th>Changes(24h)</th>
            <th>Max Supply</th>
            <th>Date</th>
            <th>Price date</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontSize: '1.2rem' }}>
              <img
                src={currencies.cur0.logo_url}
                alt="btc"
                width="60"
                height="60"
              />
              <span className="ml-3">{currencies.cur0.currency}</span>
            </td>
            <td>{currencies.cur0.price}</td>
            <td>{currencies.cur0.market_cap}</td>
            <td>{currencies.cur0.max_supply}</td>
            <td>{currencies.cur0.circulating_supply}</td>
            <td>{currencies.cur0.high}</td>
            <td>{currencies.cur0.max_supply}</td>
            <td>{currencies.cur0.price_timestamp}</td>
            <td>{currencies.cur0.price_date}</td>
            <td>{currencies.cur0.rank}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.2rem' }} className="ml-3">
              <img
                src={currencies.cur1.logo_url}
                alt="btc"
                width="60"
                height="60"
              />
              <span className="ml-3">{currencies.cur1.currency}</span>
            </td>
            <td>{currencies.cur1.price}</td>
            <td>{currencies.cur1.market_cap}</td>
            <td>{currencies.cur1.max_supply}</td>
            <td>{currencies.cur1.circulating_supply}</td>
            <td>{currencies.cur1.high}</td>
            <td>{currencies.cur1.max_supply}</td>
            <td>{currencies.cur1.price_timestamp}</td>
            <td>{currencies.cur1.price_date}</td>
            <td>{currencies.cur1.rank}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.2rem' }} className="ml-3">
              <img
                src={currencies.cur2.logo_url}
                alt="btc"
                width="60"
                height="60"
              />
              <span className="ml-3">{currencies.cur2.currency}</span>
            </td>
            <td>{currencies.cur2.price}</td>
            <td>{currencies.cur2.market_cap}</td>
            <td>{currencies.cur2.max_supply}</td>
            <td>{currencies.cur2.circulating_supply}</td>
            <td>{currencies.cur2.high}</td>
            <td>{currencies.cur2.max_supply}</td>
            <td>{currencies.cur2.price_timestamp}</td>
            <td>{currencies.cur2.price_date}</td>
            <td>{currencies.cur2.rank}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.2rem' }} className="ml-3">
              <img
                src={currencies.cur3.logo_url}
                alt="btc"
                width="60"
                height="60"
              />
              <span className="ml-3">{currencies.cur3.currency}</span>
            </td>
            <td>{currencies.cur3.price}</td>
            <td>{currencies.cur3.market_cap}</td>
            <td>{currencies.cur3.max_supply}</td>
            <td>{currencies.cur3.circulating_supply}</td>
            <td>{currencies.cur3.high}</td>
            <td>{currencies.cur3.max_supply}</td>
            <td>{currencies.cur3.price_timestamp}</td>
            <td>{currencies.cur3.price_date}</td>
            <td>{currencies.cur3.rank}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.2rem' }}>
              <img
                src={currencies.cur4.logo_url}
                alt="btc"
                width="60"
                height="60"
              />
              <span className="ml-3">{currencies.cur4.currency}</span>
            </td>
            <td>{currencies.cur4.price}</td>
            <td>{currencies.cur4.market_cap}</td>
            <td>{currencies.cur4.max_supply}</td>
            <td>{currencies.cur4.circulating_supply}</td>
            <td>{currencies.cur4.high}</td>
            <td>{currencies.cur4.max_supply}</td>
            <td>{currencies.cur4.price_timestamp}</td>
            <td>{currencies.cur4.price_date}</td>
            <td>{currencies.cur4.rank}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.2rem' }}>
              <img
                src={currencies.cur5.logo_url}
                alt="btc"
                width="60"
                height="60"
              />
              <span className="ml-3">{currencies.cur5.currency}</span>
            </td>
            <td>{currencies.cur5.price}</td>
            <td>{currencies.cur5.market_cap}</td>
            <td>{currencies.cur5.max_supply}</td>
            <td>{currencies.cur5.circulating_supply}</td>
            <td>{currencies.cur5.high}</td>
            <td>{currencies.cur5.max_supply}</td>
            <td>{currencies.cur5.price_timestamp}</td>
            <td>{currencies.cur5.price_date}</td>
            <td>{currencies.cur5.rank}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.2rem' }}>
              <img
                src={currencies.cur6.logo_url}
                alt="btc"
                width="60"
                height="60"
              />
              <span className="ml-3">{currencies.cur6.currency}</span>
            </td>
            <td>{currencies.cur6.price}</td>
            <td>{currencies.cur6.market_cap}</td>
            <td>{currencies.cur6.max_supply}</td>
            <td>{currencies.cur6.circulating_supply}</td>
            <td>{currencies.cur6.high}</td>
            <td>{currencies.cur6.max_supply}</td>
            <td>{currencies.cur6.price_timestamp}</td>
            <td>{currencies.cur6.price_date}</td>
            <td>{currencies.cur6.rank}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.2rem' }}>
              <img
                src={currencies.cur7.logo_url}
                alt="btc"
                width="60"
                height="60"
              />
              <span className="ml-3">{currencies.cur7.currency}</span>
            </td>
            <td>{currencies.cur7.price}</td>
            <td>{currencies.cur7.market_cap}</td>
            <td>{currencies.cur7.max_supply}</td>
            <td>{currencies.cur7.circulating_supply}</td>
            <td>{currencies.cur7.high}</td>
            <td>{currencies.cur7.max_supply}</td>
            <td>{currencies.cur7.price_timestamp}</td>
            <td>{currencies.cur7.price_date}</td>
            <td>{currencies.cur7.rank}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.2rem' }}>
              <img
                src={currencies.cur8.logo_url}
                alt="btc"
                width="80"
                height="80"
              />
              <span className="ml-3">{currencies.cur8.currency}</span>
            </td>
            <td>{currencies.cur8.price}</td>
            <td>{currencies.cur8.market_cap}</td>
            <td>{currencies.cur8.max_supply}</td>
            <td>{currencies.cur8.circulating_supply}</td>
            <td>{currencies.cur8.high}</td>
            <td>{currencies.cur8.max_supply}</td>
            <td>{currencies.cur8.price_timestamp}</td>
            <td>{currencies.cur8.price_date}</td>
            <td>{currencies.cur8.rank}</td>
          </tr>
          <tr className="align-items-center ">
            <td style={{ fontSize: '1.2rem' }}>
              <img
                src={currencies.cur9.logo_url}
                alt="btc"
                width="60"
                height="60"
              />
              <span className="ml-3">{currencies.cur9.currency}</span>
            </td>
            <td>{currencies.cur9.price}</td>
            <td>{currencies.cur9.market_cap}</td>
            <td>{currencies.cur9.max_supply}</td>
            <td>{currencies.cur9.circulating_supply}</td>
            <td>{currencies.cur9.high}</td>
            <td>{currencies.cur9.max_supply}</td>
            <td>{currencies.cur9.price_timestamp}</td>
            <td>{currencies.cur9.price_date}</td>
            <td>{currencies.cur9.rank}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default MarketPrice
