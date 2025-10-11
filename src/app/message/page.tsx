"use client";

import React from "react";

export default function MessagePage() {
  return (
    <>
      {/* Message Section - Following Services.tsx Design */}
      <section id="message" className="services section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <span className="description-title">Our Message</span>
          <h2>The Gospel of Redeemed Singleness</h2>
          <p>
            Discover the transformative message of The Singles Revolution:
            singleness is not a season to endure, but a sacred assignment to
            embrace.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="intro-content"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div
                  className="section-badge mb-3"
                  data-aos="zoom-in"
                  data-aos-delay="50"
                >
                  <i className="bi bi-heart-fill"></i>
                  <span>OUR MISSION</span>
                </div>
                <h2 className="section-heading mb-4">
                  Transforming Singles Through Christ-Centered Identity
                </h2>
                <p className="section-description mb-4">
                  We believe in equipping singles to live with purpose,
                  integrity, and undivided devotion to Jesus. Through biblical
                  teaching, spiritual formation, and Christ-centered community,
                  we help singles discover their worth and calling as beloved
                  children of God.
                </p>
                <a
                  href="#message-content"
                  className="cta-button"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Explore Our Message
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-visual"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <img
                  src="/assets/img/about/about-5.webp"
                  alt="Our Message"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="message-services" className="services section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="services-grid mt-5">
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-card">
                  <div className="card-number">
                    <span>01</span>
                  </div>
                  <div className="card-content">
                    <h5 className="service-title">
                      <a href="#">Biblical Identity</a>
                    </h5>
                    <p className="service-description">
                      We teach that your identity is found in Christ alone, not
                      in your relationship status. Through Scripture, we help
                      singles discover their worth, purpose, and calling as
                      beloved children of God.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Card --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-card">
                  <div className="card-number">
                    <span>02</span>
                  </div>
                  <div className="card-content">
                    <h5 className="service-title">
                      <a href="#">Spirit-Led Relationships</a>
                    </h5>
                    <p className="service-description">
                      We guide singles toward healthy, God-honoring
                      relationships built on prayer, wisdom, and biblical
                      principles. Our approach emphasizes spiritual maturity and
                      emotional health.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Card --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-card">
                  <div className="card-number">
                    <span>03</span>
                  </div>
                  <div className="card-content">
                    <h5 className="service-title">
                      <a href="#">Global Community</a>
                    </h5>
                    <p className="service-description">
                      We foster worldwide connections among single believers,
                      creating spaces for mentorship, prayer, and mutual
                      encouragement across cultures and continents.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Card --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-card">
                  <div className="card-number">
                    <span>04</span>
                  </div>
                  <div className="card-content">
                    <h5 className="service-title">
                      <a href="#">Christ-Centered Transformation</a>
                    </h5>
                    <p className="service-description">
                      Our ultimate goal is to see singles transformed by the
                      power of the Gospel, living lives that reflect Jesus and
                      advance His kingdom on earth.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Card --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-card">
                  <div className="card-number">
                    <span>05</span>
                  </div>
                  <div className="card-content">
                    <h5 className="service-title">
                      <a href="#">Sacred Singleness</a>
                    </h5>
                    <p className="service-description">
                      Singleness is not a waiting room for marriage, but a
                      sacred season of undivided devotion to Christ and His
                      purposes for your life.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Card --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-card">
                  <div className="card-number">
                    <span>06</span>
                  </div>
                  <div className="card-content">
                    <h5 className="service-title">
                      <a href="#">Kingdom Purpose</a>
                    </h5>
                    <p className="service-description">
                      Every single believer has a unique calling and purpose in
                      advancing God's kingdom, whether married or single,
                      serving with excellence and integrity.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Card -->  */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="message-cta" className="message-cta section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-12">
              <div className="cta-content text-center">
                <h3>Ready to Embrace This Message?</h3>
                <p className="lead">
                  Join thousands of singles worldwide who are discovering
                  biblical identity, spiritual wholeness, and Christ-centered
                  purpose through our teachings and community.
                </p>
                <div className="cta-buttons">
                  <a
                    href="https://thesinglesrevolution.com/"
                    className="btn btn-primary btn-lg me-3"
                  >
                    Get Free Book
                  </a>
                  <a
                    href="/#contact"
                    className="btn btn-outline-primary btn-lg"
                  >
                    Join Our Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
