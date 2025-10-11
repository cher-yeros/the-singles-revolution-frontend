export default function Contact() {
  return (
    <section id="contact" className="contact section light-background">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Join the Movement</span>
        <h2>Connect with The Singles Revolution</h2>
        <p>
          Ready to join the global discipleship movement? Get in touch with us
          to learn more about biblical identity, spiritual wholeness, and
          Christ-centered purpose.
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="200">
              <div className="section-category mb-3">JOIN THE REVOLUTION</div>
              <h2 className="display-5 mb-4">Single? God's Calling.</h2>
              <p className="lead mb-4">
                This is your invitation to become part of a bold and urgent
                mission to reach the next generation of single young adults with
                the hope of the gospel and the truth about love, identity, and
                marriage.
              </p>

              <div className="contact-info mt-5">
                <div
                  className="info-item d-flex mb-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-globe me-3"></i>
                  <span>thesinglesrevolution.com</span>
                </div>

                <div
                  className="info-item d-flex mb-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-book me-3"></i>
                  <span>Single and Ready - Free Book</span>
                </div>

                <div
                  className="info-item d-flex mb-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="bi bi-calendar-event me-3"></i>
                  <span>Global Discussion: November 15, 2025</span>
                </div>

                <a
                  href="https://thesinglesrevolution.com/"
                  className="map-link d-inline-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Join the Revolution
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="contact-form card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-body p-4 p-lg-5">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="row gy-4">
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required={true}
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <select className="form-control" name="subject" required>
                        <option value="">Select Your Interest</option>
                        <option value="free-book">
                          Request Free Copy of Single and Ready
                        </option>
                        <option value="join-movement">
                          Join the Global Discipleship Movement
                        </option>
                        <option value="global-discussion">
                          Global Discussion - November 15, 2025
                        </option>
                        <option value="submit-review">
                          Submit Your Book Review
                        </option>
                        <option value="prayer-support">Prayer Support</option>
                        <option value="general-inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Tell us about your journey and how we can support you in your season of singleness..."
                        required={true}
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Thank you for joining The Singles Revolution! We'll be
                        in touch soon.
                      </div>

                      <button type="submit" className="btn btn-submit w-100">
                        Join the Revolution
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
