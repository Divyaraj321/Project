import React from 'react'
import toast from "react-hot-toast";

export default function Hero(){
  return (
    <>

    <div className="hero01  text-white text-center py-5"  style={{ backgroundImage: "url('/images/banner5.jpg')",backgroundSize: 'cover',height:'23rem'}}>
    <h1>Donate Blood, Save Lives</h1>
    <p className="p">Your donation can give someone a second chance at life.</p>
    <main className="main01">
      <div className="container mt-5" >
        <form className="row g-2">
          <div className="col-sm">
            <input type="text" className="name form-control" placeholder="Name" required/>
          </div>
          <div className="col-sm">
            <input type="number" className="name form-control" placeholder="Mobile" maxLength="10"/>
          </div>
          <div className="col-sm">
            <select className="name form-control">
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="col-auto">
            <button type="submit" className="req_blood btn btn-danger" style={{fontWeight:'bold',fontFamily:'sans-serif', marginLeft: '20px'}}>Req Blood</button>
          </div>
        </form>
      </div>
    </main>
  </div>

    </>
  )
}
