import React from "react";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div
            className="col-lg-8 mx-auto text-center mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="main-headline">
              Global Discipleship Movement Impact
            </h3>
            <p className="main-description">
              The Singles Revolution is reaching thousands of single young
              adults worldwide, transforming lives through biblical identity,
              spiritual wholeness, and Christ-centered purpose.
            </p>

            <div
              className="achievement-badge"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="achievement-content">
                <div className="achievement-icon">
                  <i className="bi bi-cross"></i>
                </div>
                <div className="achievement-details">
                  <div className="achievement-title">#JesusAtTheCenter</div>
                  <div className="achievement-subtitle">
                    A global Gospel movement for redeemed singleness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="row g-4">
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    <CountUp start={0} end={20} duration={2} suffix="K+" />
                  </div>
                  <div className="stat-label">Singles Reached</div>
                  <div className="stat-growth">
                    <i className="bi bi-arrow-up"></i>
                    <span>Global Mission</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="stat-item featured">
                <div className="stat-icon">
                  <i className="bi bi-book-fill"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    <CountUp start={0} end={100} duration={2} suffix="%" />
                  </div>
                  <div className="stat-label">Free Book Distribution</div>
                  <div className="stat-growth">
                    <i className="bi bi-gift"></i>
                    <span>Single and Ready</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-globe"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    <CountUp start={0} end={50} duration={2} suffix="+" />
                  </div>
                  <div className="stat-label">Countries Reached</div>
                  <div className="stat-growth">
                    <i className="bi bi-arrow-up"></i>
                    <span>Global Impact</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-calendar-event"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    <CountUp start={0} end={2025} duration={2} />
                  </div>
                  <div className="stat-label">Global Discussion Launch</div>
                  <div className="stat-growth">
                    <i className="bi bi-calendar"></i>
                    <span>November 15th</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
