import React from 'react'

const Backdrop = ({ onClose }) => {
  return (
    <div className='Backdrop' onClick={onClose}/>
  )
}

export default Backdrop