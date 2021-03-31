import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

function HistoryData() {
  const dataHistory = useSelector((state) => state.firestore.ordered)

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <div className=" title text-center text-uppercase">
                  <h4
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    Payment History
                  </h4>
                </div>
                <div>
                  <div className="text-center ">
                    <table className="table table-hover table-responsive-sm  border border-primary bg-light">
                      <thead className="thead-light">
                        <tr>
                          <th
                            scope="col"
                            className="btn-gradient-purple text-light"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="btn-gradient-purple text-light"
                          >
                            Id
                          </th>
                          <th
                            scope="col"
                            className="btn-gradient-purple text-light"
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="btn-gradient-purple text-light "
                          >
                            Date
                          </th>

                          <th
                            scope="col"
                            className="btn-gradient-purple text-light "
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      {dataHistory.paymentInDatabase &&
                        dataHistory.paymentInDatabase.map((each) => (
                          <tbody key={each.id}>
                            <tr>
                              <td>{each.firstname}</td>
                              <td>{each.idx}</td>
                              <td>${each.paymentAmount}</td>
                              <td>{moment(each.date.toDate()).calendar()}</td>
                              <td>
                                {each.statusSuccess && (
                                  <span className="border border-success text-success">
                                    success
                                  </span>
                                )}
                                {each.statusFailed && (
                                  <span className="border border-danger text-danger">
                                    Failed
                                  </span>
                                )}
                                {each.statusPending && (
                                  <span className="border border-warning text-warning">
                                    Pending
                                  </span>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        ))}
                    </table>
                  </div>
                </div>
                <div>
                  <div className=" title text-center text-uppercase">
                    <h4
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                    >
                      Withdrawal History
                    </h4>
                  </div>
                  <div className="text-center">
                    <table className="table table-hover  table-responsive-sm border border-primary bg-light">
                      <thead className="thead-light ">
                        <tr>
                          <th
                            scope="col"
                            className="btn-gradient-purple text-light "
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="btn-gradient-purple text-light"
                          >
                            Id
                          </th>
                          <th
                            scope="col"
                            className="btn-gradient-purple text-light"
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="btn-gradient-purple text-light "
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="btn-gradient-purple text-light"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      {dataHistory.withdrawalInDatabase &&
                        dataHistory.withdrawalInDatabase.map((each) => (
                          <tbody key={each.id}>
                            <tr>
                              <td>{each.withdrawerName}</td>
                              <td>{each.idx}</td>
                              <td>${each.withdrawalAmount}</td>
                              <td>{moment(each.date.toDate()).calendar()}</td>
                              <td className="text-success">
                                {each.statusSuccess && (
                                  <span className="border border-success text-success">
                                    success
                                  </span>
                                )}
                                {each.statusFailed && (
                                  <span className="border border-danger text-danger">
                                    Failed
                                  </span>
                                )}
                                {each.statusPending && (
                                  <span className="border border-warning text-warning">
                                    Pending
                                  </span>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HistoryData
