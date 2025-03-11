export default function Contact() {
  return (
    <section id="contact" className="get-started">
      <div className="container">
        <div className="row text-center" data-aos="fade-up">
          <h1 className="display-3 fw-bold text-capitalize">Get started</h1>
          <div className="heading-line"></div>
          <p className="lh-lg">
            Connect with us to ignite your digital transformation journey.
          </p>
        </div>

        {/* <!-- START THE CTA CONTENT  --> */}
        <div className="row text-white">
          <div className="col-12 col-lg-6 gradient shadow p-3">
            <div className="cta-info w-100">
              <h4 className="display-4 fw-bold">
                100% Satisfaction Guaranteed
              </h4>
              <p className="lh-lg">
                At Ifnet, your success is our top priority. We’re dedicated to
                delivering tailor-made digital solutions that not only meet your
                needs but exceed your expectations.
              </p>
              <h3 className="display-3--brief">What will be the next step?</h3>
              <ul className="cta-info__list">
                <li>We'll prepare the proposal.</li>
                <li>we'll discuss it together.</li>
                <li>let's start the discussion.</li>
                <li>We'll kick-off your project.</li>
              </ul>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 bg-white shadow p-3"
            // data-aos="fade-up"
            // data-aos-delay="200"
          >
            <div className="form w-100 pb-2">
              <h4 className="display-3--title mb-5">start your project</h4>
              <form
                action="https://formspree.io/f/xwplkoqa"
                method="POST"
                className="row"
              >
                <div className="col-lg-6 col-md mb-3">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="First Name"
                    id="inputFirstName"
                    className="shadow form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-6 col-md mb-3">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Last Name"
                    id="inputLastName"
                    className="shadow form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    id="inputEmail"
                    className="shadow form-control form-control-lg"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <textarea
                    name="message"
                    placeholder="Message"
                    id="message"
                    rows={8}
                    className="shadow form-control form-control-lg"
                  ></textarea>
                </div>
                <div className="text-center d-grid mt-1">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill pt-3 pb-3"
                  >
                    submit
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
