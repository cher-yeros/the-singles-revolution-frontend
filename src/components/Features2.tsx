import React from "react";

export default function Features2() {
  return (
    <section id="features-2" className="features-2 section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="150">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-app-indicator"></i>
              </div>
              <h3>Intuitive Dashboard Interface</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam.
              </p>
              <ul className="feature-benefits">
                <li>
                  <i className="bi bi-check-circle-fill"></i> Real-time data
                  visualization
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> Customizable
                  widgets
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> Interactive
                  reports
                </li>
              </ul>
              <div className="feature-image">
                <img
                  src="assets/img/features/features-1.webp"
                  alt="Dashboard Interface"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-card highlighted">
              <div className="feature-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h3>Advanced Analytics Tools</h3>
              <p>
                Mauris blandit aliquet elit eget tincidunt nibh pulvinar a cras
                ultricies ligula sed magna dictum porta mauris blandit aliquet
                elit eget tincidunt.
              </p>
              <ul className="feature-benefits">
                <li>
                  <i className="bi bi-check-circle-fill"></i> Predictive
                  analysis
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> Custom reporting
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> Data exploration
                </li>
              </ul>
              <div className="feature-image">
                <img
                  src="assets/img/features/features-2.webp"
                  alt="Analytics Tools"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="250">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3>Enterprise-Grade Security</h3>
              <p>
                Nulla porttitor accumsan tincidunt praesent sapien massa
                convallis a pellentesque nec egestas non nisi proin eget tortor
                risus donec sollicitudin.
              </p>
              <ul className="feature-benefits">
                <li>
                  <i className="bi bi-check-circle-fill"></i> End-to-end
                  encryption
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> Advanced access
                  control
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> Compliance
                  monitoring
                </li>
              </ul>
              <div className="feature-image">
                <img
                  src="assets/img/features/features-3.webp"
                  alt="Security Features"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="feature-testimonial"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="zoom-in">
              <div className="testimonial-image">
                <img
                  src="assets/img/features/features-4.webp"
                  alt="Testimonial"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="bi bi-quote"></i>
                </div>
                <p>
                  Curabitur arcu erat accumsan id imperdiet et porttitor at sem.
                  Vivamus magna justo lacinia eget consectetur sed convallis at
                  tellus. Curabitur aliquet quam id dui posuere blandit.
                </p>
                <div className="testimonial-author">
                  <h4>Jennifer Austin</h4>
                  <span>Product Director at TechCorp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
