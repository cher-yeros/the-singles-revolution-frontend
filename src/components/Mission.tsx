import React from "react";

export default function Mission() {
  return (
    <section id="mission" className="features-cards section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div
            className="col-lg-8 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="section-header">
              <span className="section-badge">OUR MISSION</span>
              <h2>Evangelize, Disciple, and Mobilize</h2>
              <p className="lead-text">
                To evangelize, disciple, and mobilize single young adults by
                putting a free copy of
                <strong> Single and Ready</strong> into the hands of{" "}
                <strong>20,000 young adults worldwide</strong>, sparking a
                global discipleship movement rooted in biblical identity,
                Spirit-led relationships, and Christ-centered transformation.
              </p>
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
                and purpose. Share the hope of Christ and the truth about love,
                identity, and marriage through strategic outreach and authentic
                relationships.
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
                <i className="bi bi-book-fill"></i>
              </div>
              <h3>Disciple Through Free Resources</h3>
              <p>
                Distribute free copies of <strong>Single and Ready</strong> to
                disciple and empower young believers. Help them discover
                biblical identity and spiritual wholeness through comprehensive
                biblical teaching.
              </p>
              <ul className="feature-list">
                <li>
                  <i className="bi bi-check-circle"></i> Free book distribution
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Biblical discipleship
                  resources
                </li>
              </ul>
              <a href="#mission-details" className="read-more">
                Get Your Copy <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

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
              <h4>Community Building</h4>
              <p className="status in-progress">Active</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="compliance-card">
              <h4>Discipleship Movement</h4>
              <p className="status planned">Growing</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="500">
            <div className="mission-declaration">
              <div className="declaration-content text-center">
                <h3>Our Declaration</h3>
                <blockquote>
                  "We will not waste our singleness. We will use it for His
                  glory. Jesus is at the center of it all."
                </blockquote>
                <p className="declaration-subtitle">
                  This is more than a book project — it's a Gospel movement
                  designed to equip, awaken, and mobilize single believers into
                  a life of holiness, maturity, and mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
