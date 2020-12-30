import React from 'react'

function Loading() {
  return (
    <div className="loading">
      <div
        className="spinner-border d-flex justify-content-center align-items-center text-primary "
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      >
        <span className="sr-only text-center">loading ...</span>
      </div>
    </div>
  )
}

export default Loading
