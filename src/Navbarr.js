import React, { useState } from 'react'
import "./Navbar.css"

import DehazeIcon from '@mui/icons-material/Dehaze';
import movies from "./movies.jpg";
import Prime from "./Prime.jpg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Sidebar1 from './Slider1';
const Navbarr = ({open}) => {
  const [bar, setbar] = useState(false);
  return (
    <>
      <div className='fslo'>

        <div className='VSE'>

          <div className='dlo'>
            <div className='hdci'onClick={open}><DehazeIcon className='gpx' /></div>
            <div className='hge'>All</div>
          </div>
          <div className='vder'>
            <a className='rtpi0'>Best Sellers</a>
            <a className='rtpi1'>Mobiles</a>
            <a className='rtpi2'>Today's Deals</a>
            <a className='rtpi3'>Customar Service</a>
            <a className='rtpi4'>Books</a>
            <a className='rtpi5'>Electronics</a>
            <div className='rtpi6' onMouseOut={() => setbar(false)} onMouseEnter={() => setbar((prev) => !prev)} onMouseOver={() => setbar(true)}>Prime<span className='qako'><ArrowDropDownIcon className='xgyu' /></span>


              <div className='primekabuttonyu'>
                <div className='primekabuttonanadr'>


                </div>
              </div>
              <div className='primekaphoto' onMouseOver={() => setbar(true)}>
                <div className='andarkaphoto'>
                  <img src={Prime} alt="" />
                </div>
              </div>
            </div>
            <a className='rtpi7'>Fashion</a>
            <a className='rtpi8'>Computers</a>
            <a className='rtpi9'>Amazon Pay</a>
            <a className='rtpi12'>New Releases</a>
            <a className='rtpi12'>Pay</a>
          </div>
          <div className='shamshera'>
            <img src={movies} alt="" />
          </div>
        </div>
      </div>
      <Sidebar1 open={bar} onClose={() => setbar(false)} />

    </>
  )
}

export default Navbarr;