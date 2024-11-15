

import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Donationprocess from './donation_process'
import Footer from './footer'
import Counter from './counter'
import Email from './email'

import '../css/home.css'
import '../css/what_we_do.css'
import '../css/footer.css'
import '../css/counter.css'



export default function Home() {
  return (
    <>
            <Navbar/>   
            <Hero/>
            <Donationprocess/>
           <Email/>
            

          {/* About */}
          <section class="km__Who__section ptb-120">
          <div class="container">
            <div class="row align-items-center g-0 g-xxl-5 g-xl-5 g-lg-5">
              <div class="col-xl-6 col-lg-6 col-md-12">
                <div class="km__who__content">
                  <h2 class="section-title">Who We Are</h2>
                  <h5 class="section-subtitle">We are here not for income, but for outcome</h5>
                  <p class="section-description">
                    Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when untrammelled and when nothing prevents.
                  </p>
                  <a href="about.html" class="primary__btn">Explore Now</a>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-12">
                <div class="km__who__imgbx img">
                  <img src="/images/about.jpg" alt="img" class="img-fluid rounded"/>
                </div>
              </div>
            </div>
          </div>
        </section>

      <Counter/>

        {/* What We Do */}

  <section class="service ptb-115">
  <div class="container">
    <div class="row mb-5 ">
      <div class="col-12">
        <div class="common_title text-center">

          <h2>What We Do</h2>
        </div>
      </div>
    </div>
    <div class="row align-items-center g-0 service_wrap">
      <div class="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_1">
        <div class="service_item">
          <div class="img">
            <img src="images/1.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_2">
        <div class="service_content ps-5">
          <h1>01</h1>
          <a href="/#">
            <h4>Blood Donation</h4>
          </a>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit
            tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
          <a href="service-details.html" class="red_btn service_btn">Read More</a>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_3">
        <div class="service_content text-end pe-5">
          <h1>02</h1>
          <a href="/#">
            <h4>Health Check</h4>
          </a>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit
            tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
          <a href="service-details.html" class="red_btn service_btn">Read More</a>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_4">
        <div class="service_item">
          <div class="img">
            <img src="images/2.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_5">
        <div class="service_item">
          <div class="img">
            <img src="images/3.jpg" alt=""/>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6  col-12 order_6">
        <div class="service_content ps-5">
          <h1>03</h1>
          <a href="/#">
            <h4>Blood Bank</h4>
          </a>
          <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit
            tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
          <a href="service-details.html" class="red_btn service_btn">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>

    
    </>
  )
}
