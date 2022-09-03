import React, { useState } from 'react'
import "./Navbar.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Echo from './Echo';
const Sidewala = ({ navopen }) => {

const [open,setopen]=useState(false);

const [alex ,setalexa]=useState(false);
    const openbarhoga=()=>{

        setalexa((prevstate)=>!prevstate)
    }

    return (
        <>
            <div className={navopen ? "sidewalaanahai sidebar--open" : "sidewalaanahai"}>
                <div className='peopleface'>
                    <a className='nampata'> Hello,sign in</a>
                </div>
                <div className='iteems1y'>
                    <div className='andarwalehai13'>
                        <a className='trendinwala1'>Trending</a>
                        <a className='trendinwala2'>Best Sellers</a>
                        <a className='trendinwala2'>New Release</a>
                        <a className='trendinwala2'> Movers and Shakers</a>
                    </div>
                </div>
                <div className='iteems2'>
                    <div className='andarwalehai13'>
                        <a className='trendinwala1'>Trending</a>
                        <div className={open?"andarwale64 openhoga":"andarwale64"}>

                            <div className='trendinwala2'>Best Sellers<a className='wiuyt' onClick={()=>setopen(!open)}><KeyboardArrowDownIcon className='kahiaurjanewala' /></a>
                            </div>                      <div className='sidebarcontent1'>
                                hello
                            </div>
                        </div>
                        <a className='trendinwala2'>New Release</a>
                        <a className='trendinwala2'>Movers and Shakers</a>
                    </div>
                </div>
                <div className='iteems3'>
                <div className='andarwalehai13'>
                        <a className='trendinwala1'>Digital And Devices</a>
                        

                            <div className='trendinwala2'>Echo & Alexa<a className='wiuyt'><KeyboardArrowDownIcon className='kahiaurjanewala1' onClick={()=>openbarhoga()}></KeyboardArrowDownIcon></a></div>
                           
                        
<div className='trendinwala2'>Tv Fire<a className='wiuyt'><KeyboardArrowDownIcon className='kahiaurjanewala1'/></a></div>
                        <a className='trendinwala2'>Amazon Prime Video</a>
                    </div>
  
                </div>
                <div className='iteems4'></div>
                <div className='iteems5'></div>
                
                <Echo alex={alex} closehone={openbarhoga}/>
            </div>
            
            
            </>
    )
}
export default Sidewala