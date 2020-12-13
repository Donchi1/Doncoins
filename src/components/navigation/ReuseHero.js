import React from 'react'

function ReuseHero({ title, span, currentClass }) {
  return (
    <div
      className={currentClass}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className="text-center text-light pt-3 bold text-uppercase">
        {title} <span className="gradcolor">{span}</span>
      </h1>
    </div>
  )
}

export default ReuseHero
