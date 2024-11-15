import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Toaster } from 'react-hot-toast'


export default function About() {
  return (
    <>
           
           <Toaster
            position="top-left"
            reverseorder={false}
           />
          <Navbar/>
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

        <Footer/>

    </>
  )
}
