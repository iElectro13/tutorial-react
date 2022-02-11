import React from 'react'

const Modal = ({ onClose }) => {


  return (
    <div className="Modal">
        <h3>Estás seguro?</h3>
        <button onClick={onClose}>Delete</button>
        <button onClick={onClose}>Cancel</button>
    </div>
  )
}

export default Modal