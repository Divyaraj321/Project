import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../css/what_we_do.css'

export default function Whatwedo() {
  return (
    <>
            <Navbar/>

<section className="service ptb-115">
  <div className="container">
    <div className="row mb-5 ">
      <div className="col-12">
        <div className="common_title text-center">
          <h2>What We Do</h2>
        </div>
      </div>
    </div>
    <div className="row align-items-center g-0 service_wrap">
      <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_1">
        <div className="service_item">
          <div className="img">
            <img src="images/1.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_2">
        <div className="service_content ps-5">
          <h1>01</h1>
          <a href="/#"  >
            <h4>Blood Donation</h4>
          </a>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit
            tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
          <a href="service-details.html" className="red_btn service_btn">Read More</a>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_3">
        <div className="service_content text-end pe-5">
          <h1>02</h1>
          <a href="/#" >
            <h4>Health Check</h4>
          </a>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit
            tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
          <a href="service-details.html" className="red_btn service_btn">Read More</a>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_4">
        <div className="service_item">
          <div className="img">
            <img src="images/2.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_5">
        <div className="service_item">
          <div className="img">
            <img src="images/3.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6  col-12 order_6">
        <div className="service_content ps-5">
          <h1>03</h1>
          <a href="/#">
            <h4>Blood Bank</h4>
          </a>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit
            tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
          <a href="service-details.html" className="red_btn service_btn">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>

  <Footer/>

    </>
  )
}
