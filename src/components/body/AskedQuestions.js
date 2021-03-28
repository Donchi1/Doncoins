import React from 'react'
import { Link } from 'react-router-dom'

function AskedQuestions() {
  return (
    <section id="faq" className="faq section-padding ">
      <div className="container">
        <div className="heading text-center">
          <div
            className="animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.3s"
          >
            <h6 className="sub-title">question</h6>
            <h2 className="title">FAQ</h2>
          </div>
          <p
            className="content-desc animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="0.4s"
          >
            Originally the term "FAQ" referred to the Frequently Asked Question
            itself, and the
            <br className="d-none d-xl-block" />
            compilation of questions and answers was known as a "FAQ list" or
            some similar expression.
          </p>
        </div>
        <div className="row">
          <div className="col">
            <nav>
              <div
                className="nav nav-pills nav-underline mb-5 animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="0.5s"
                id="myTab"
                role="tablist"
              >
                <a
                  href="#general"
                  className="nav-item nav-link active"
                  id="general-tab"
                  data-toggle="tab"
                  aria-controls="general"
                  aria-selected="true"
                  role="tab"
                >
                  General
                </a>
                <a
                  href="#ico"
                  className="nav-item nav-link"
                  id="ico-tab"
                  data-toggle="tab"
                  aria-controls="ico"
                  aria-selected="false"
                  role="tab"
                >
                  Investment
                </a>
                <a
                  href="#token"
                  className="nav-item nav-link"
                  id="token-tab"
                  data-toggle="tab"
                  aria-controls="token"
                  aria-selected="false"
                  role="tab"
                >
                  Tokens
                </a>
                <a
                  href="#client"
                  className="nav-item nav-link"
                  id="client-tab"
                  data-toggle="tab"
                  aria-controls="client"
                  aria-selected="false"
                  role="tab"
                >
                  Client
                </a>
                <a
                  href="#legal"
                  className="nav-item nav-link"
                  id="legal-tab"
                  data-toggle="tab"
                  aria-controls="legal"
                  aria-selected="false"
                  role="tab"
                >
                  Pricing
                </a>
              </div>
            </nav>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="general"
                role="tabpanel"
                aria-labelledby="general-tab"
              >
                <div
                  id="general-accordion"
                  className="collapse-icon accordion-icon-rotate"
                >
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.1s"
                  >
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span className="icon"></span>
                          Can I make payments directly from an exchange?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#general-accordion"
                    >
                      <div className="card-body">
                        You can make payment via any exchange or atm with our
                        standard address or any other provided payment method.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span className="icon"></span>
                          When will CICO be listed on exchanges?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#general-accordion"
                    >
                      <div className="card-body">
                        As soon as our coin is verified and approved as a
                        standard cryptocurrency globally, the we will make sure
                        our client have easy access from the exchanges.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span className="icon"></span>
                          what is Doncoins
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#general-accordion"
                    >
                      <div className="card-body">
                        Doncoins is a global investment platform for your easy
                        investment, where you invest and get back your fund in
                        due time without stress or fear of any nagativity.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <span className="icon"></span>
                          Who founded Doncoins
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#general-accordion"
                    >
                      <div className="card-body">
                        Docoins was found by a group of young investors in the
                        United States who know the need for investment. They
                        started gradually, investing on weekly basics after
                        their individual works. Today Doincoins is one world top
                        giant in cryptography.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <div className="card-header" id="headingFive">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          <span className="icon"></span>
                          What happens when bitcoins are lost?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#general-accordion"
                    >
                      <div className="card-body">
                        When a user loses his wallet, it has the effect of
                        removing money out of circulation. Lost bitcoins still
                        remain in the block chain just like any other bitcoins.
                        However, lost bitcoins remain dormant forever because
                        there is no way for anybody to find the private key(s)
                        that would allow them to be spent again. Because of the
                        law of supply and demand, when fewer bitcoins are
                        available, the ones that are left will be in higher
                        demand and increase in value to compensate.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <div className="card-header" id="headingSix">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          <span className="icon"></span>
                          What is bitcoin
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      aria-labelledby="headingSix"
                      data-parent="#general-accordion"
                    >
                      <div className="card-body">
                        Bitcoin is a form of digital currency which is based on
                        a created open source code held electronically. <br />
                        Bitcoin is a decentralized form of currency meaning that
                        it does not belong to any government and it is not
                        controlled by one.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <div className="card-header" id="headingSeven">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          <span className="icon"></span>
                          How are bitcoins created?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      aria-labelledby="headingSeven"
                      data-parent="#general-accordion"
                    >
                      <div className="card-body">
                        New bitcoins are generated by a competitive and
                        decentralized process called "mining". This process
                        involves that individuals are rewarded by the network
                        for their services. Bitcoin miners are processing
                        transactions and securing the network using specialized
                        hardware and are collecting new bitcoins in exchange.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.3s"
                  >
                    <div className="card-header" id="headingEight">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                        >
                          <span className="icon"></span>
                          Can I make money with Bitcoin?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="collapseEight"
                      className="collapse"
                      aria-labelledby="headingEight"
                      data-parent="#general-accordion"
                    >
                      <div className="card-body">
                        You should never expect to get rich with Bitcoin or any
                        emerging technology. It is always important to be wary
                        of anything that sounds too good to be true or disobeys
                        basic economic rules.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="ico"
                role="tabpanel"
                aria-labelledby="ico-tab"
              >
                <div
                  id="ico-accordion"
                  className="collapse-icon accordion-icon-rotate"
                >
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="icoHeadingOne">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link"
                          data-toggle="collapse"
                          data-target="#icoCollapseOne"
                          aria-expanded="true"
                          aria-controls="icoCollapseOne"
                        >
                          <span className="icon"></span>
                          Do i have to register first?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="icoCollapseOne"
                      className="collapse show"
                      aria-labelledby="icoHeadingOne"
                      data-parent="#ico-accordion"
                    >
                      <div className="card-body">
                        You have to register in our platform to start your
                        investment and your earnings.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="icoHeadingTwo">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#icoCollapseTwo"
                          aria-expanded="false"
                          aria-controls="icoCollapseTwo"
                        >
                          <span className="icon"></span>
                          How can i invest in Doincoins trading?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="icoCollapseTwo"
                      className="collapse"
                      aria-labelledby="icoHeadingTwo"
                      data-parent="#ico-accordion"
                    >
                      <div className="card-body">
                        Register in Doncoins, choose an investment plan, start
                        earning.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="icoHeadingThree">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#icoCollapseThree"
                          aria-expanded="false"
                          aria-controls="icoCollapseThree"
                        >
                          <span className="icon"></span>
                          How long will i get paid?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="icoCollapseThree"
                      className="collapse"
                      aria-labelledby="icoHeadingThree"
                      data-parent="#ico-accordion"
                    >
                      <div className="card-body">
                        It takes 24 hours to recieve your payment on a standard
                        investment plan.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="icoHeadingFour">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#icoCollapseFour"
                          aria-expanded="false"
                          aria-controls="icoCollapseFour"
                        >
                          <span className="icon"></span>
                          How do i start earning?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="icoCollapseFour"
                      className="collapse"
                      aria-labelledby="icoHeadingFour"
                      data-parent="#ico-accordion"
                    >
                      <div className="card-body">
                        Register for membership, choose an investment plan, ypur
                        earnings starts immediately
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="token"
                role="tabpanel"
                aria-labelledby="token-tab"
              >
                <div
                  id="token-accordion"
                  className="collapse-icon accordion-icon-rotate"
                >
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="tokenHeadingOne">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link"
                          data-toggle="collapse"
                          data-target="#tokenCollapseOne"
                          aria-expanded="true"
                          aria-controls="tokenCollapseOne"
                        >
                          <span className="icon"></span>
                          What is Doincoins token?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="tokenCollapseOne"
                      className="collapse show"
                      aria-labelledby="tokenHeadingOne"
                      data-parent="#token-accordion"
                    >
                      <div className="card-body">
                        Doincoins token is a fast automated means of investment.
                        Is a special type of investment, which the user buys the
                        token at a fixed price and recieves a daily auto
                        increament of fund.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="tokenHeadingTwo">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#tokenCollapseTwo"
                          aria-expanded="false"
                          aria-controls="tokenCollapseTwo"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          How can i get the Token?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="tokenCollapseTwo"
                      className="collapse"
                      aria-labelledby="tokenHeadingTwo"
                      data-parent="#token-accordion"
                    >
                      <div className="card-body">
                        A user recieves his or her token after the token
                        investment has been verified.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="tokenHeadingThree">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#tokenCollapseThree"
                          aria-expanded="false"
                          aria-controls="tokenCollapseThree"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          How long will i recieve my fund?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="tokenCollapseThree"
                      className="collapse"
                      aria-labelledby="tokenHeadingThree"
                      data-parent="#token-accordion"
                    >
                      <div className="card-body">
                        Once your have purchase our token, your auto earning
                        will start immediately or before 24hours.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="tokenHeadingFour">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#tokenCollapseFour"
                          aria-expanded="false"
                          aria-controls="tokenCollapseFour"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          How long will my payment be verified?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="tokenCollapseFour"
                      className="collapse"
                      aria-labelledby="tokenHeadingFour"
                      data-parent="#token-accordion"
                    >
                      <div className="card-body">
                        It takes less that 24hours for our team to verify your
                        purchase
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="client"
                role="tabpanel"
                aria-labelledby="client-tab"
              >
                <div
                  id="client-accordion"
                  className="collapse-icon accordion-icon-rotate"
                >
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="clientHeadingOne">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link"
                          data-toggle="collapse"
                          data-target="#clientCollapseOne"
                          aria-expanded="true"
                          aria-controls="clientCollapseOne"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          What is my benefit when i invest?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="clientCollapseOne"
                      className="collapse show"
                      aria-labelledby="clientHeadingOne"
                      data-parent="#client-accordion"
                    >
                      <div className="card-body">
                        You are entitled to a standard, easy and fast
                        withdrawals
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="clientHeadingTwo">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#clientCollapseTwo"
                          aria-expanded="false"
                          aria-controls="clientCollapseTwo"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          How long will it take to withdraw?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="clientCollapseTwo"
                      className="collapse"
                      aria-labelledby="clientHeadingTwo"
                      data-parent="#client-accordion"
                    >
                      <div className="card-body">
                        You can withdraw immidiately your purchase or investment
                        has been verified by our team.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="clientHeadingThree">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#clientCollapseThree"
                          aria-expanded="false"
                          aria-controls="clientCollapseThree"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          Can my account be hold?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="clientCollapseThree"
                      className="collapse"
                      aria-labelledby="clientHeadingThree"
                      data-parent="#client-accordion"
                    >
                      <div className="card-body">
                        Unnecessary withdrawal clicks without fund may lead to
                        account hold
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="clientHeadingThree">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#clientCollapseFour"
                          aria-expanded="false"
                          aria-controls="clientCollapseFour"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          Can my account be terminated?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="clientCollapseFour"
                      className="collapse"
                      aria-labelledby="clientHeadingFour"
                      data-parent="#client-accordion"
                    >
                      <div className="card-body">
                        Account can be terminated when a user fails to comply to
                        our community standards or when a user fails 3 times.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="clientHeadingThree">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#clientCollapseFour"
                          aria-expanded="false"
                          aria-controls="clientCollapseFour"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          Can my Account withdrawal be on hold?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="clientCollapseFour"
                      className="collapse"
                      aria-labelledby="clientHeadingFour"
                      data-parent="#client-accordion"
                    >
                      <div className="card-body">
                        User's withdrawal can be held,if a user fails to follow
                        our withdrawal processing.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="clientHeadingThree">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#clientCollapseFour"
                          aria-expanded="false"
                          aria-controls="clientCollapseFour"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          What happens to my fund when my account is terminated?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="clientCollapseFour"
                      className="collapse"
                      aria-labelledby="clientHeadingFour"
                      data-parent="#client-accordion"
                    >
                      <div className="card-body">
                        User can contact our support team via email, calls or
                        whatsapp, who will give the necessory procedure to
                        follow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="legal"
                role="tabpanel"
                aria-labelledby="legal-tab"
              >
                <div
                  id="legal-accordion"
                  className="collapse-icon accordion-icon-rotate"
                >
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="legalHeadingOne">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link"
                          data-toggle="collapse"
                          data-target="#legalCollapseOne"
                          aria-expanded="true"
                          aria-controls="legalCollapseOne"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          How can i invest on Doncoins?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="legalCollapseOne"
                      className="collapse show"
                      aria-labelledby="legalHeadingOne"
                      data-parent="#legal-accordion"
                    >
                      <div className="card-body">
                        Register, choose your prefered investment plan and start
                        earning.
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="legalHeadingTwo">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#legalCollapseTwo"
                          aria-expanded="false"
                          aria-controls="legalCollapseTwo"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          What is the payment method?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="legalCollapseTwo"
                      className="collapse"
                      aria-labelledby="legalHeadingTwo"
                      data-parent="#legal-accordion"
                    >
                      <div className="card-body">
                        We accept all cryptocurrencies and bank payments, most
                        fast and recomended option is Bitcoins,
                      </div>
                    </div>
                  </div>
                  <div
                    className="card animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    <div className="card-header" id="legalHeadingThree">
                      <h5 className="mb-0">
                        <Link
                          to="#"
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#legalCollapseThree"
                          aria-expanded="false"
                          aria-controls="legalCollapseThree"
                        >
                          <span className="fas fa-angel-down icon"></span>
                          How long can it take to make an investment?
                        </Link>
                      </h5>
                    </div>
                    <div
                      id="legalCollapseThree"
                      className="collapse"
                      aria-labelledby="legalHeadingThree"
                      data-parent="#legal-accordion"
                    >
                      <div className="card-body">
                        It takes less than 15 minutes to finish your investment
                        and start earning.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AskedQuestions
