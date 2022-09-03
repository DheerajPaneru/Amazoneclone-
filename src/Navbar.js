
import React, { useState } from 'react'
import "./Navbar.css"
import "./App.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { IconButton, makeStyles } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import amazon_PNG11 from "./amazon_PNG11.png";
import nav from "./nav.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Sidebar from "./Slider"
import flag from "./flag.jpg"
import Sidewala from './Sidewala';
import {Transition} from "react-transition-group"
const Navbar = () => {
  const [bar, setbar] = useState(false);
  
  
  return (

    <>

      <div className='asd'>
        <div className='qwe'>

          <div className='gtfr'>
            <div className='amazonkaphoto234'>

              <img src={amazon_PNG11} alt="" /></div>
            <div className='frtpst'>.in</div>
          </div>
          <div className='xcf2'>
            <div className='line1'>
              <a>Hello</a>
            </div>
            <div className='line2'>
              <span
                className='bx'><LocationOnIcon sx={{ fontSize: 10 }} /></span><span>Select your address</span>
            </div>
          </div>
          <button className='xcf3'>
            <div className='WED1'>
              <label>
              <select className='kaisahoga'>
                <option vlaue="volvo">All</option>
                <option vlaue="volvo">Camera</option>
                <option vlaue="volvo">Phone</option>
                <option vlaue="volvo">Dslr</option>
                <option vlaue="volvo">Adventuressssssssssss</option>
              </select>
              </label>
            </div>
            <div className='WED2'>
              <input type="text" className='vcf'>
              </input>
            </div>
            <div className='WED3'>
              <a className='we'><SearchOutlinedIcon
                className='rt' />
              </a>
            </div>
          </button>
          <div className='xcf4'>
            <div className='flagindia'>
              <img src={flag} alt="" />
            </div>
            <div className='iconniche78'><ArrowDropDownIcon className='dsloprt' /></div>
          </div>
          <div className='xcf5' onMouseOver={() => setbar(true)} onMouseLeave={() => setbar(false)}>
            <div className='werlinee1'>
              <a className='wty'>Hello,sign in</a>
            </div>
            <div className='werlinee2'>
              <a className='wty1'>
                Account & Lists </a><a className='iconniche'><ArrowDropDownIcon className='dslop'/></a>
            </div>
            <div className='arrowupar'>
              <div className='arrowundar'></div>
            </div>
            <div className='nicheanewala' onMouseOut={() => setbar(false)} onMouseEnter={() => setbar((prev) => !prev)}>

              <div className="signkarobe">

                <div className="vcaqwop">
                  <a className="dibba"> Sign in</a>
                </div>
                <div className="bsqwop">
                  <div className="xaoprt">New Customer?</div>
                  <div className="bvqiot209"> Start here.</div>
                </div>
              </div>

              <div className="leftsidewali">
                <div className="leftlegikya">
                  <div className="leftlegikya1">your Lists</div>
                  <div className="leftlegikya12">
                    <a className="salmankhan">Create a Wish List</a>
                    <a className="salmankhan">Baby Wishlist</a>
                    <a className="salmankhan">Discover your style</a>
                    <a className="salmankhan">Explore Showroom</a>
                    <a className="salmankhan">Buy</a>
                  </div>
                </div>
              </div>
              <div className="bichkiline"></div>
              <div className="rightsidewali">
                <div className="leftlegikya">
                  <div className="leftlegikya1">your Lists</div>
                  <div className="leftlegikya12">
                    <a className="salmankhan">Create a Wish List</a>
                    <a className="salmankhan">Baby Wishlist</a>
                    <a className="salmankhan">Discover your style</a>
                    <a className="salmankhan">Explore Showroom</a>
                    <a className="salmankhan">Create a Wish List</a>
                    <a className="salmankhan">Baby Wishlist</a>
                    <a className="salmankhan">Discover your style</a>
                    <a className="salmankhan">Explore Showroom</a>


                  </div>
                </div>

              </div>














            </div>
          </div>
          <div className='xcf6'>
            <div className='werlinee1'>
              <a className='wty'>Returns</a>
            </div>
            <div className='werlinee2'>
              <a className='wty1'>& Orders</a>
            </div>
          </div>
          <div className='xcf7'>
            <div className='dfv'>

              <a className='cartimage'>

              </a>
              <a className='numbercrt'>0</a>
            </div>
            <div className='qwc'>
              <span className='yp2'>
              </span>
            </div>
          </div>


        </div>




      </div>
      <Sidebar open={bar} onClose={() => setbar(false)} />
      
      
    </>
  )
}

export default Navbar
/*<button onClick={()=>window.scroll(0,0)}> click</button>*/