import React from "react";

export default function CTA() {
  return (
    <section
      id="call-to-action"
      className="call-to-action section dark-background"
    >
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-lg-center">
          <div
            className="col-lg-5 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="image-wrapper position-relative">
              <div className="floating-card">
                <i className="bi bi-book"></i>
                <h4>Single and Ready</h4>
                <p>
                  The transformative book at the center of the movement — a
                  Gospel-rooted guide to spiritual formation and Christ-centered
                  identity.
                </p>
              </div>
              <img
                src="assets/img/about/sr4.jpg"
                alt="Single and Ready Book"
                className="img-fluid main-image"
              />
            </div>
          </div>

          <div
            className="col-lg-6 offset-lg-1 order-lg-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="content-area">
              <h2>Join the Global Discipleship Movement</h2>
              <p>
                To evangelize, disciple, and mobilize single young adults by
                putting a free copy of Single and Ready into the hands of 20,000
                young adults worldwide, sparking a global discipleship movement
                rooted in biblical identity, Spirit-led relationships, and
                Christ-centered transformation.
              </p>

              <ul className="feature-list">
                <li>
                  <i className="bi bi-check"></i>
                  <span>
                    Discover biblical identity and spiritual wholeness
                  </span>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <span>
                    Embrace singleness as a holy assignment, not a holding
                    pattern
                  </span>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <span>
                    Join 20,000 singles in the global discipleship movement
                  </span>
                </li>
              </ul>

              <div className="cta-wrapper">
                <a
                  href="https://thesinglesrevolution.com/"
                  className="btn btn-cta"
                >
                  Join the Revolution
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
