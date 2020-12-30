import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
import { withdrawalAction } from '../Auths/Action'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'

function Withdrawcalc({
  amount,
  address,
  openModal,
  setOpenModal,
  setAddress,
  setamount,
  setisloading,
  setShow,
}) {
  const [newAmount, setNewAmount] = useState(1)
  const [openError, setopenError] = useState(false)

  const dispatch = useDispatch()
  const firebase = useFirebase()
  const profileInfo = useSelector((state) => state.firebase.profile)
  const transError = useSelector(
    (state) => state.projectReducer.withdrawalError,
  )

  useEffect(() => {
    Axios.get(`https://blockchain.info/tobtc?currency=USD&value=${amount}`)
      .then((res) => {
        setNewAmount(res.data)
      })
      .catch((err) => console.log(err))
  }, [amount])

  const handleCancel = () => {
    const cancel = prompt('Are you sure you want to cancel transaction')
    if (cancel) {
      setOpenModal(false)
      setAddress('')
      setamount('')
    }
  }

  const dataCheck = () => setopenError(true)
  const handleLoading = () => setisloading(false)

  const handleWithdraw = () => {
    setisloading(true)
    withdrawalAction(
      amount,
      profileInfo,
      address,
      dispatch,
      firebase,
      dataCheck,
      handleLoading,
    )

    setOpenModal(false)
    setamount('')
    setAddress('')
    setShow(false)
  }
  return (
    <>
      <Modal show={openModal} onHide={() => setOpenModal(false)} centered>
        <Modal.Header>
          <Modal.Title>Confirm Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You want to withdraw ${amount} from your account</p>
          <p>Bitcoin : {newAmount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleWithdraw}>Confirm</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        centered
        show={openError}
        onHide={() => setopenError(false)}
        contentClassName="bg-warning"
      >
        <Modal.Header closeButton={() => setopenError(false)}>
          <Modal.Title className="text-danger">Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-danger">{transError}</h6>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Withdrawcalc
