export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row text-center" data-aos="fade-up">
          <h1 className="display-3 fw-bold">Our Services</h1>
          <div className="heading-line mb-1"></div>
        </div>
        {/* <!-- START THE DESCRIPTION CONTENT  --> */}
        <div className="row pt-2 pb-2 mt-0 mb-3" data-aos="fade-up">
          <div className="col-md-6 border-right">
            <div className="bg-white p-3">
              <h2 className="fw-bold text-capitalize text-center">
                We provide "The New & Better Way" to Grow Your Business and
                Maximize Your Profit!
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-4 text-start">
              <p className="">
                The world is changing, and so is the way businesses grow. Ifnet
                introduces <strong>"The New & Better Way"</strong> —a
                digital-first approach that helps businesses thrive, compete,
                and maximize their profits. <br /> Today, success belongs to
                those who embrace digital transformation. From{" "}
                <strong> Branding & Identity</strong> to{" "}
                <strong>Digital Marketing</strong> ,{" "}
                <strong> Website Development</strong> to{" "}
                <strong>Social Media Management</strong>
                and <strong> Content Creation</strong>, we empower businesses
                with the tools they need to stay ahead.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- START THE CONTENT FOR THE SERVICES  --> */}
      <div className="container">
        {/* <!-- Branding & Identity --> */}

        <div className="row" data-aos="fade-up">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 order-1 order-md-1 order-first">
            <div className="services__content">
              <div className="icon d-block fas fa-palette "></div>
              <h3 className="display-3--title mt-1">Branding & Identity</h3>
              <p className="lh-lg">
                Your brand is more than just a logo—it’s how the world perceives
                your business. We create unique, impactful, and memorable brand
                identities that help you stand out. From logo design to complete
                brand guidelines, we ensure your brand is consistent,
                professional, and compelling.
              </p>
              <button
                type="button"
                className="rounded-pill btn-rounded border-primary"
              >
                Learn more
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end order-2 order-md-2 order-last"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="services__pic">
              <img
                src="/assets/images/services/brand_identity.jpg"
                alt="Branding & Identity"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* <!-- Website & Mobile App Development  --> */}

        <div className="row" data-aos="fade-up">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start order-1 order-md-2 order-last"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="services__pic">
              <img
                src="/assets/images/services/development.jpg"
                alt="Web & Mobile App Development"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 order-2 order-md-1 order-first">
            <div className="services__content">
              <div className="icon d-block fas fa-code"></div>
              <h3 className="display-3--title mt-1">
                Website & Mobile App Development
              </h3>
              <p className="lh-lg">
                A strong online presence starts with a high-performing website
                and a user-friendly mobile app. We design and develop modern,
                responsive, and conversion-driven platforms tailored to your
                business needs. Whether it's an e-commerce store, a corporate
                website, or a mobile app for services like booking, delivery, or
                customer engagement, we bring your vision to life with seamless
                functionality and intuitive design.
              </p>
              <button
                type="button"
                className="rounded-pill btn-rounded border-primary"
              >
                Learn more
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* <!--  Content Creation & Social Media Management  --> */}
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 order-1 order-md-1 order-first">
            <div className="services__content">
              <div className="icon d-block fas fa-video"></div>
              <h3 className="display-3--title mt-1">
                Content Creation & Social Media Management
              </h3>
              <p className="lh-lg">
                Engaging content is key to digital success. We help businesses
                create, manage, and optimize their social media presence with
                high-quality visuals, videos, and written content. Our
                strategies build trust, increase engagement, and drive sales by
                keeping your audience connected to your brand.
              </p>
              <button
                type="button"
                className="rounded-pill btn-rounded border-primary"
              >
                Learn more
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end order-2 order-md-2 order-last"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="services__pic">
              <img
                src="/assets/images/services/content_creation.jpg"
                alt="Contact Creation"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* <!--  Digital Marketing & Growth Strategies  --> */}
        <div className="row" data-aos="fade-up">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start order-1 order-md-2 order-last"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="services__pic">
              <img
                src="/assets/images/services/digital_marketing.jpg"
                alt="Digital Marketing"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 order-2 order-md-1 order-first">
            <div className="services__content">
              <div className="icon d-block fas fa-bullhorn "></div>
              <h3 className="display-3--title mt-1">
                {" "}
                Digital Marketing & Growth Strategies
              </h3>
              <p className="lh-lg">
                Marketing isn’t just about being online—it’s about reaching the
                right people at the right time. We provide SEO, paid advertising
                (Google & social media ads), email marketing, and data-driven
                strategies to grow your business. Our approach is designed to
                maximize visibility, attract customers, and boost revenue.
              </p>
              <button
                type="button"
                className="rounded-pill btn-rounded border-primary"
              >
                Learn more
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
