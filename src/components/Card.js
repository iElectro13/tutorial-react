import React from 'react'

const Card = ({ title, text="No tiene texto", onOpen}) => {


  return (
    <div className="Card">
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={onOpen}>Delete</button>
    </div>
  )
}

export default Card