

import React from 'react'; 
export default function Footer() {
  return (
    <> 
      <footer>
        {/* Section 1: Call to Action */}
        <section className="change red_bg py-4">
          <div className="container">
            <div className="row align-items-center text-center text-lg-start">
              <div className="col-lg-9 mb-3 mb-lg-0">
                <div className="change_content">
                  <h2 className="mb-2">Let's change the world, Join us now!</h2>
                  <p>
                    Nor again is there anyone who loves or pursues or desires to 
                    obtain pain of itself, because it is pain, but occasionally 
                    circumstances occur in which toil and pain can procure great pleasure.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 text-lg-end">
                <a href="contact.html" className="btn btn-danger w-100 w-lg-auto">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

      
        <section className="footer-widget-area footer-widget-area-bg py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
                <img 
                  src="/images/logo-footer.webp" 
                  alt="Logo" 
                  className="footer-logo img-fluid"
                />
              </div>
              <div className="col-md-9">
                <p className="footer-description text-center text-md-start">
                  We are the world's largest and most trustworthy blood donation center. 
                  Working since 1973, our mission is to help patients in need of blood. 
                  We organize blood donation campaigns worldwide to raise awareness about blood donation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
