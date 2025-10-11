export default function Services() {
  return (
    <section id="services" className="services section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Services</span>
        <h2>Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
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
                <i className="bi bi-star-fill"></i>
                <span>WHAT WE DO</span>
              </div>
              <h2 className="section-heading mb-4">
                Transforming Ideas into Outstanding Results
              </h2>
              <p className="section-description mb-4">
                We believe in crafting exceptional experiences that drive
                meaningful growth for your business. Our dedicated team combines
                creativity with technical excellence to deliver solutions that
                make a difference.
              </p>
              <a
                href="#"
                className="cta-button"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Explore Our Work
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
                src="assets/img/services/services-1.webp"
                alt="Services"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

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
                    <a href="#">Custom Application Development</a>
                  </h5>
                  <p className="service-description">
                    Building robust applications tailored to your specific needs
                    using modern frameworks and cutting-edge technologies.
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
                    <a href="#">Strategic Planning</a>
                  </h5>
                  <p className="service-description">
                    Comprehensive roadmaps that align technology solutions with
                    your business objectives and market opportunities.
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
                    <a href="#">Identity Design</a>
                  </h5>
                  <p className="service-description">
                    Creating compelling visual narratives that resonate with
                    your audience and strengthen brand recognition across all
                    touchpoints.
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
                    <a href="#">Digital Marketing</a>
                  </h5>
                  <p className="service-description">
                    Maximizing your online presence through targeted campaigns
                    that drive engagement and convert visitors into loyal
                    customers.
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
                    <a href="#">User Experience Design</a>
                  </h5>
                  <p className="service-description">
                    Crafting intuitive interfaces that prioritize user needs
                    while delivering seamless interactions across desktop and
                    mobile platforms.
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
                    <a href="#">Data Intelligence</a>
                  </h5>
                  <p className="service-description">
                    Transforming raw data into actionable insights that inform
                    strategic decisions and optimize business performance
                    effectively.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- End Service Card -->  */}
          </div>
        </div>
      </div>
    </section>
  );
}
