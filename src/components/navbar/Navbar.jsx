import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const [active,setActive]=useState(false);
  const [open, setOpen]=useState(false);

  const {pathname} =useLocation();

  const isActive = ()=>{
window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll",isActive);
    return ()=>{
      window.removeEventListener("scroll",isActive);
    }
  })

  const currentUser = {
    id:1, 
    username:"john Doe",
    isSeller:true
  }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
            <Link to="/" className='link'>
            <span className='text'>Fiverr</span>
            </Link>
              
             
              <span className='dot'>.</span>
            </div>
            <div className="links"> 
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span> 
            <span>Sign in</span>
            { !currentUser?.isSeller && <span>Become a Seller</span>} {/* Agar current seller present hai to show nahi karega */}
            { !currentUser && <button>Join</button>}  {/* Agar user join hai to show nahi karega*/}
             
             {currentUser  && (
              <div className="user" onClick={()=>setOpen(!open)}>
                <img src="" alt="" />
                <span>{currentUser?.username}</span>
                {open && <div className="options">
                  {
                    currentUser?.isSeller && (
                      <>
                      <Link className='link'to="/mygigs">Gigs</Link>
                      <Link className='link'to="/addGigs">Add New Gig</Link>
                      </>
                    )
                  }
                  <Link className='link'to="/orders">Order</Link>
                  <Link className='link'to="/messages">Messages</Link>
                  <Link className='link'to="/">Logout</Link>
                </div>}
              </div>
             ) }

            </div>
        </div>
        { (active || pathname !=="/") &&(
         <>
         <hr />
        <div className="menu">
          <Link className='link menuLink' to="/">Graphics & Design</Link>
          <Link className='link' to="/">Video & Animation</Link>
          <Link className='link' to="/">Writting & Translation</Link>
          <Link className='link' to="/">AI Services</Link>
          <Link className='link' to="/">Degital Marketing</Link>
          <Link className='link' to="/">Music & Audio</Link>
          <Link className='link' to="/">Programming & Tech</Link>
          <Link className='link' to="/">Business</Link>
          <Link className='link' to="/">LifeStyle</Link>
 
        </div>
         </>
        )}
        
    </div>
  )
}

export default Navbar