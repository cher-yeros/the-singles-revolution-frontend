import React from "react";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="content-wrapper">
              <div className="section-header">
                <span className="section-badge">ABOUT THE MOVEMENT</span>
                <h2>
                  Singleness is Not a Waiting Room; It's a Training Ground
                </h2>
              </div>

              <p className="lead-text">
                The Singles Revolution is not a dating campaign — it is a global
                discipleship movement. A bold and urgent call for single young
                adults around the world to discover biblical identity, spiritual
                wholeness, and Christ-centered purpose.
              </p>

              <p className="description-text">
                This revolution redefines singleness as a holy assignment, not a
                holding pattern. It calls this generation to move beyond passive
                waiting and embrace active spiritual formation through undivided
                devotion to Jesus Christ.
              </p>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">20K+</div>
                  <div className="stat-label">Singles Reached</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Global</div>
                  <div className="stat-label">Discipleship Mission</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Free</div>
                  <div className="stat-label">Book Distribution</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1 Cor 7:35</div>
                  <div className="stat-label">Scriptural Foundation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="visual-section">
              <div className="main-image-container">
                <img
                  src="assets/img/about/about-8.webp"
                  alt="Professional team collaboration"
                  className="img-fluid main-visual"
                />
                <div className="overlay-card">
                  <div className="card-content">
                    <h4>Single and Ready</h4>
                    <p>
                      The transformative book at the center of the movement — a
                      Gospel-rooted guide to spiritual formation, identity, and
                      relational purpose.
                    </p>
                    <div className="card-icon">
                      <i className="bi bi-book-fill"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="secondary-images">
                <div className="row g-3">
                  <div className="col-6">
                    <img
                      src="assets/img/about/about-11.webp"
                      alt="Team meeting"
                      className="img-fluid secondary-img"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="assets/img/about/about-5.webp"
                      alt="Office workspace"
                      className="img-fluid secondary-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="400">
            <div className="features-section">
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="feature-box">
                    <div className="feature-icon">
                      <i className="bi bi-heart"></i>
                    </div>
                    <h5>Redeemed Singleness</h5>
                    <p>
                      Singleness is not absence — it's assignment. It's the
                      divine context for intimacy with God and maturity in
                      purpose.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-box">
                    <div className="feature-icon">
                      <i className="bi bi-people"></i>
                    </div>
                    <h5>Purposeful Dating</h5>
                    <p>
                      Dating is not a cultural playground; it's kingdom
                      territory. It's about discernment, not distraction.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-box">
                    <div className="feature-icon">
                      <i className="bi bi-cross"></i>
                    </div>
                    <h5>Christ-Centered Identity</h5>
                    <p>
                      Your worth is found in who you are in Christ, not who you
                      are with. Root your identity in Jesus.
                    </p>
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
