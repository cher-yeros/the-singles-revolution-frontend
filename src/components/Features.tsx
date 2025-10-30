import React from "react";

export default function Features() {
  return (
    <section id="features" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Core Teachings</span>
        <h2>Revolutionary Identity Framework</h2>
        <p>
          Discover the four pillars of becoming "Un-Single" — living free and
          fully devoted to Christ
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="tabs-wrapper">
          <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            <li className="nav-item">
              <a
                className="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-1"
              >
                <div className="tab-icon">
                  <i className="bi bi-heart"></i>
                </div>
                <div className="tab-content">
                  <h5>Unattached</h5>
                  <span>Free from dependence</span>
                </div>
              </a>
            </li>
            {/* End tab nav item */}

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-2"
              >
                <div className="tab-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="tab-content">
                  <h5>Unhurried</h5>
                  <span>Trusting God's timing</span>
                </div>
              </a>
            </li>
            {/* End tab nav item */}

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-3"
              >
                <div className="tab-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="tab-content">
                  <h5>Unworried</h5>
                  <span>Resting in peace</span>
                </div>
              </a>
            </li>
            {/* End tab nav item */}

            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#features-tab-4"
              >
                <div className="tab-icon">
                  <i className="bi bi-house-heart"></i>
                </div>
                <div className="tab-content">
                  <h5>Unto the Lord</h5>
                  <span>Jesus at the center</span>
                </div>
              </a>
            </li>
            {/* End tab nav item */}
          </ul>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade active show" id="features-tab-1">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="content-wrapper">
                    <div className="icon-badge">
                      <i className="bi bi-heart"></i>
                    </div>
                    <h3>Unattached</h3>
                    <p>
                      Free from dependence on others for identity. Your worth is
                      not determined by relationship status, but by your
                      relationship with Christ. Live with confidence in who God
                      has made you to be.
                    </p>

                    <div className="feature-grid">
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>
                          Identity rooted in Christ, not relationship status
                        </span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>
                          Freedom from cultural pressure and expectations
                        </span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Confidence in God's perfect timing</span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>
                          Wholeness that doesn't depend on another person
                        </span>
                      </div>
                    </div>

                    <div className="stats-row">
                      <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Complete in Christ</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">Free</div>
                        <div className="stat-label">From Dependence</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">Whole</div>
                        <div className="stat-label">Identity</div>
                      </div>
                    </div>

                    <a href="#about" className="btn-primary">
                      Learn More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="visual-content">
                    <div className="main-image">
                      <img
                        src="assets/img/about/sr1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="floating-card">
                        <i className="bi bi-heart-fill"></i>
                        <div className="card-content">
                          <span>Identity</span>
                          <strong>Complete in Christ</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End tab content item */}

            <div className="tab-pane fade" id="features-tab-2">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="content-wrapper">
                    <div className="icon-badge">
                      <i className="bi bi-clock"></i>
                    </div>
                    <h3>Unhurried</h3>
                    <p>
                      Refusing the rush toward marriage as a form of validation.
                      Trust God's timing without cultural pressure. Embrace the
                      season of preparation and growth that God has designed for
                      you.
                    </p>

                    <div className="feature-grid">
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Trusting God's perfect timing for your life</span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>
                          Resisting cultural pressure to rush into relationships
                        </span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>
                          Embracing the preparation season God has designed
                        </span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Finding peace in God's sovereign plan</span>
                      </div>
                    </div>

                    <div className="stats-row">
                      <div className="stat-item">
                        <div className="stat-number">God's</div>
                        <div className="stat-label">Perfect Timing</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">No</div>
                        <div className="stat-label">Rush</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">Peace</div>
                        <div className="stat-label">In Waiting</div>
                      </div>
                    </div>

                    <a href="#about" className="btn-primary">
                      Learn More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="visual-content">
                    <div className="main-image">
                      <img
                        src="assets/img/about/sr2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="floating-card">
                        <i className="bi bi-clock-fill"></i>
                        <div className="card-content">
                          <span>Timing</span>
                          <strong>God's Perfect Plan</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End tab content item */}

            <div className="tab-pane fade" id="features-tab-3">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="content-wrapper">
                    <div className="icon-badge">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <h3>Unworried</h3>
                    <p>
                      Living in peace rather than anxiety about the future. Rest
                      in God's faithfulness and provision. Cast all your cares
                      upon Him, knowing that He holds your future in His hands.
                    </p>

                    <div className="feature-grid">
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Resting in God's faithfulness and provision</span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Casting all cares upon the Lord</span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Trusting God with your future</span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Finding peace in His sovereign care</span>
                      </div>
                    </div>

                    <div className="stats-row">
                      <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Peace in Christ</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">No</div>
                        <div className="stat-label">Anxiety</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">Trust</div>
                        <div className="stat-label">In God</div>
                      </div>
                    </div>

                    <a href="#about" className="btn-primary">
                      Learn More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="visual-content">
                    <div className="main-image">
                      <img
                        src="assets/img/about/sr3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="floating-card">
                        <i className="bi bi-shield-check"></i>
                        <div className="card-content">
                          <span>Peace</span>
                          <strong>In God's Care</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End tab content item --> */}

            <div className="tab-pane fade" id="features-tab-4">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="content-wrapper">
                    <div className="icon-badge">
                      <i className="bi bi-cross"></i>
                    </div>
                    <h3>Unto the Lord</h3>
                    <p>
                      Living with Jesus at the center of all pursuits. Every
                      decision, relationship, and life choice is filtered
                      through the lens of Christ's lordship. Your singleness
                      becomes an act of worship and devotion to Him.
                    </p>

                    <div className="feature-grid">
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Jesus at the center of all decisions</span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>
                          Every relationship filtered through Christ's lordship
                        </span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Singleness as an act of worship</span>
                      </div>
                      <div className="feature-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Undivided devotion to the Lord</span>
                      </div>
                    </div>

                    <div className="stats-row">
                      <div className="stat-item">
                        <div className="stat-number">Jesus</div>
                        <div className="stat-label">At Center</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Devotion</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">Worship</div>
                        <div className="stat-label">Lifestyle</div>
                      </div>
                    </div>

                    <a href="#about" className="btn-primary">
                      Learn More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="visual-content">
                    <div className="main-image">
                      <img
                        src="assets/img/about/sr4.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="floating-card">
                        <i className="bi bi-cross"></i>
                        <div className="card-content">
                          <span>Devotion</span>
                          <strong>Unto the Lord</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End tab content item --> */}
          </div>
        </div>
      </div>
    </section>
  );
}
