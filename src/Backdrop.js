import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const Backdrop = ({navopen,closebar}) => {
  return (
    <>
    <div className={navopen ?"ayegasabsephle aye--open":"ayegasabsephle"}>

<div className='crosssign' onClick={closebar}>
<CloseIcon className="cdio"/>

</div>

    </div>
    
    
    
    
    
    
    </>
  )
}

export default Backdrop