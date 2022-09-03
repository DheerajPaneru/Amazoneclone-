import React from 'react'
import"./Navbar.css"
  const Sidebar = ({open,onClose}) => {
    if(!open) return null;
  
  return (
    <>
    <div className='qwecfgh' onMouseOver={onClose}></div>
    
    </>
  )
}

export default Sidebar