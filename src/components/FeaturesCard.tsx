import React from "react";

export default function FeaturesCard() {
  return (
    <section id="features-cards" className="features-cards section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {/* <!-- First row with two larger cards --> */}
          <div className="col-lg-6" data-aos="flip-left" data-aos-delay="100">
            <div className="feature-card">
              <div className="icon-box">
                <i className="bi bi-shield-lock"></i>
              </div>
              <h3>Strategic Business Intelligence</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Aenean commodo ligula eget dolor.
              </p>
              <ul className="feature-list">
                <li>
                  <i className="bi bi-check-circle"></i> Real-time data
                  analytics
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Automated reporting
                  systems
                </li>
              </ul>
              <a href="#" className="read-more">
                Business Solutions <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6" data-aos="flip-left" data-aos-delay="200">
            <div className="feature-card">
              <div className="icon-box">
                <i className="bi bi-shield"></i>
              </div>
              <h3>Enterprise Security Framework</h3>
              <p>
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              </p>
              <ul className="feature-list">
                <li>
                  <i className="bi bi-check-circle"></i> Advanced encryption
                  protocols
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Multi-factor
                  authentication
                </li>
              </ul>
              <a href="#" className="read-more">
                Security Details <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* <!-- Second row with four smaller cards --> */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="compliance-card">
              <h4>Cloud Integration</h4>
              <p className="status in-progress">In Development</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="compliance-card">
              <h4>Data Management</h4>
              <p className="status compliant">Implemented</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="compliance-card">
              <h4>Process Automation</h4>
              <p className="status compliant">Implemented</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="compliance-card">
              <h4>AI Solutions</h4>
              <p className="status planned">Scheduled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
