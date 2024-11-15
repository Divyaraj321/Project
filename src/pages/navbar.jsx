import React, { useState } from 'react'
import "../css/navbar.css"
import { NavLink, useLocation } from 'react-router-dom'

import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar() {

    const [donorpopup, setdonorpopup] = useState(false)
    const [logpopup, setlogpopup] = useState(false)
    const location=useLocation()
    const URlparam=new URLSearchParams(location.search)
    const token=URlparam.get('token')
    console.log(token);
    
    console.log('donor',donorpopup)

    const donor_popup  = ()=>{
         setdonorpopup(true)
         setlogpopup(false)
    }

    const login_popup =()=>{
        setlogpopup(true)
        setdonorpopup(false)
    }

    const closeDonorPopup = ()=>{
        setdonorpopup(false)
    }

    const closeLogPopup =  ()=>{
         setlogpopup(false)
    }

    const namBox = useRef();
    const mailBox = useRef();
    const phoneBox = useRef();
    const genBox = useRef();
    const bdBox = useRef();

    const dregister=(event)=>{

         event.preventDefault();
          const info ={
            name : namBox.current.value,
            mobile : phoneBox.current.value,
            email : mailBox.current.value,
            gender : genBox.current.value,
            bloodGroup : bdBox.current.value,
          }
          fetch("http://localhost:8989/noauth/register",{
            method : "POST",
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(info)
         }).then(res=>res.json()).then(result=>{
            if(result.status)
                {
                  event.target.reset()
                  toast.success(result.msg)
                }
                else{
                    toast.error(result.msg)
                }
         })    
    }

  const EailBox = useRef();
  const passBox = useRef();

  const logregister=(event)=>{

      
        const info ={
          email : EailBox.current.value,
          password : passBox.current.value
        }
        console.log(info)
        fetch("http://localhost:8989/noauth/login",{
          method : "POST",
          headers :{
              'Content-Type' : 'application/json'
          },
          body : JSON.stringify(info)
          
       }).then(res=>res.json()).then(result=>{
          if(result.status)
              {
                event.target.reset()
                toast.success(result.msg)
              }
              else{
                  toast.error(result.msg)
              }
       }) 
       
       event.preventDefault();   
  }

  return (
   <>
    <Toaster/>
    <div className="box">

    <nav className="navbar navbar-expand-lg bg-light shadow-sm ">

      <div className="container">

        <span className="navbar-brand">
          <img src="../images/sitelogo.png" alt="Logo" className="logo"/>
        </span>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <ul className="navbar-nav me-5">
            <li className="nav-item">
              <NavLink  className={({ isActive }) =>  isActive ? "nav-link" : "nav-link active" } to="/"  >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>  isActive ? "nav-link" : "nav-link active" } to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) =>  isActive ? "nav-link" : "nav-link active" } to="/what_we_do" >What We Do</NavLink>
            </li>
            </ul>
          
            <div className="d-flex">
               <button onClick={donor_popup} className='login01 btn  btn-dark me-2'>Donor</button>
            </div>

           
           <div className="d-flex">
            <button onClick={login_popup} className="login01 btn btn-danger me-2" style={{ marginLeft: '2rem'}}>Login</button>
           </div>

        </div>

      </div>
    </nav>

  </div>


  {donorpopup && (

                <div className="modal fade show" id="donorModal" tabIndex="-1" aria-labelledby="donorModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="donorModalLabel">Become a Donor</h5>
                                <button type="button" className="btn-close" onClick={closeDonorPopup} aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <form id="donorForm" onSubmit={dregister}>
                                    <div className="mb-3">
                                        <label htmlFor="donorName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="donorName" placeholder="Enter your name" ref={namBox} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="donorMobile" className="form-label">Mobile</label>
                                        <input type="number" className="form-control" id="donorMobile" placeholder="Enter your mobile number" ref={phoneBox} maxLength={"10"} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="donorMobile" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="donoremail" placeholder="Enter your email" ref={mailBox} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="donorGender" className="form-label">Gender</label>
                                        <select className="form-select" id="donorGender"  ref={genBox} >
                                            <option selected>Select your gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="donorBloodGroup" className="form-label">Blood Group</label>
                                        <select className="form-select" id="donorBloodGroup" ref={bdBox}>
                                            <option selected>Select your blood group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={closeDonorPopup}>Close</button>
                                        <button type="submit" className="btn btn-primary">Next</button>
                                    </div>
                                </form>
                                <div className="text-center mt-3">
                                    <span>Already have an account? <a className="nav-link" href="/#" onClick={login_popup}> <p style={{ color: 'red' }}>Sign in</p> </a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
  {

    logpopup && (
    <div className="modal show" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={closeLogPopup}></button>
          </div>
          <div className="modal-body">
            <form id="loginForm" onSubmit={logregister}>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" ref={EailBox} />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" ref={passBox}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeLogPopup}>Close</button>
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center mt-3">
              <span>Don't have an account? <a className="nav-link" href="/#" onClick={donor_popup}><p style={{ color: 'red' }}>Sign up</p></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

  

  </> 

  )
}
