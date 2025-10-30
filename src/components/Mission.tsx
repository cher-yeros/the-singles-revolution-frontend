import React from "react";

export default function Mission() {
  return (
    <>
      {/*
      // HERO SECTION (example structure, can be restored as needed)
      <section id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <h1>Our Mission</h1>
              <p>Empowering single young adults worldwide.</p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#mission" className="btn-get-started">
                  Explore Our Mission
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img
                src="/assets/img/about/about-11.webp"
                className="img-fluid"
                alt="Our Mission"
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>
      */}

      {/* MISSION DETAILS & CARDS SECTION */}
      <section id="mission-details" className="features-cards section">
        <div className="container section-title" data-aos="fade-up">
          <span className="description-title">Our Mission</span>
          <h2>Rooted in Christ. Mobilized for Impact.</h2>
          <p>
            We exist to spark a global discipleship movement among single young
            adults. See our core mission in action below:
          </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-header">
                <h2>How We Fulfill Our Mission</h2>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            {/* First row with two larger cards */}
            <div className="col-lg-6" data-aos="flip-left" data-aos-delay="100">
              <div className="feature-card">
                <div className="icon-box">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <h3>Evangelize Single Young Adults</h3>
                <p>
                  Reach single young adults with the Gospel message of identity
                  and purpose. Share the hope of Christ and the truth about
                  love, identity, and marriage through strategic outreach and
                  authentic relationships.
                </p>
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle"></i> Gospel-centered
                    evangelism
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Identity and purpose
                    teaching
                  </li>
                </ul>
                <a href="#mission-details" className="read-more">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="flip-left" data-aos-delay="200">
              <div className="feature-card">
                <div className="icon-box">
                  <i className="bi bi-book"></i>
                </div>
                <h3>Free Book Distribution</h3>
                {/* Mission statement moved here, highlighted for visual impact */}
                <blockquote
                  style={{
                    background: "#f5f5fa",
                    borderLeft: "5px solid #8257e5",
                    margin: "1.5rem 0",
                    padding: "1rem 1.2rem",
                    fontStyle: "italic",
                  }}
                >
                  To evangelize, disciple, and mobilize single young adults by
                  putting a free copy of <em>Single and Ready</em> into the
                  hands of 20,000 young adults around the world, sparking a
                  global discipleship movement rooted in biblical identity,
                  Spirit-led relationships, and Christ-centered transformation.
                </blockquote>
                <p>
                  We distribute free copies of <strong>Single and Ready</strong>{" "}
                  to 20,000 young adults worldwide, making biblical teaching
                  accessible to all without any financial barriers.
                </p>
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle"></i> Global reach
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> No cost barriers
                  </li>
                </ul>
                <a href="#contact" className="read-more">
                  Request Your Copy <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            {/* Add more cards as needed */}

            {/* Second row with four smaller cards */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="compliance-card">
                <h4>Global Reach</h4>
                <p className="status compliant">20,000+ Singles</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="compliance-card">
                <h4>Free Distribution</h4>
                <p className="status compliant">100% No Cost</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="compliance-card">
                <h4>Online Teachings</h4>
                <p className="status in-progress">Active</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="compliance-card">
                <h4>Spiritual Formation</h4>
                <p className="status planned">Growing</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div
                className="section-header text-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {/* <span className="section-badge">IMPACT GOAL</span> */}
                <h2>Our Impact Goal</h2>
                <p>
                  By reaching 20,000 single young adults with{" "}
                  <strong>Single and Ready</strong>, we aim to spark a global
                  discipleship movement that transforms how singles view their
                  identity, relationships, and calling.
                </p>
              </div>
              {/* <div
                className="row g-4 justify-content-center mt-4 impact-stats"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="col-sm-6 col-md-3">
                  <div className="compliance-card">
                    <h4>
                      <i className="bi bi-journal-richtext"></i> Books
                      Distributed
                    </h4>
                    <p className="status compliant">20,000+</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="compliance-card">
                    <h4>
                      <i className="bi bi-globe"></i> Reach
                    </h4>
                    <p className="status compliant">Global</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="compliance-card">
                    <h4>
                      <i className="bi bi-gift"></i> Free
                    </h4>
                    <p className="status planned">100%</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="compliance-card">
                    <h4>
                      <i className="bi bi-graph-up-arrow"></i> Impact
                    </h4>
                    <p className="status planned">Growing</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
