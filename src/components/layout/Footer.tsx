export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* <!-- CONTENT FOR THE MOBILE NUMBER  --> */}
          <div className="col-md-3 col-lg-3 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                viewBox="0 0 24 24"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a
                href="tel:+251 985 519 439"
                className="contact-box__info--title"
              >
                +251 985 519 439
              </a>
              <p className="contact-box__info--subtitle">Telephone</p>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="24"
                // height="24"
                viewBox="0 0 24 24"
                fill="none"
                // stroke="currentColor"
                // stroke-width="2"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a
                href="https://t.me/ifnetDigitalHub"
                className="contact-box__info--title"
                target="_blank"
              >
                @ifnetDigitalHub
              </a>
              <p className="contact-box__info--subtitle">Telegram</p>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="24"
                // height="24"
                viewBox="0 0 24 24"
                fill="none"
                // stroke="currentColor"
                // stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a
                href="mailto:ifnetdigitalhub@gmail.com"
                className="contact-box__info--title"
                target="_blank"
              >
                ifnetdigitalhub@gmail.com
              </a>
              <p className="contact-box__info--subtitle">Email</p>
            </div>
          </div>

          {/* <!-- CONTENT FOR LOCATION  --> */}
          <div className="col-md-3 col-lg-3 contact-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-2"
                viewBox="0 0 24 24"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="18" y2="6.01" />
                <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                <line x1="9" y1="4" x2="9" y2="17" />
                <line x1="15" y1="15" x2="15" y2="20" />
              </svg>
            </div>
            <div className="contact-box__info">
              <a href="#" className="contact-box__info--title">
                Addis Ababa, Ethiopia
              </a>
              <p className="contact-box__info--subtitle">Address</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- START THE SOCIAL MEDIA CONTENT  --> */}
      {/* <div className="footer-sm" style={{ backgroundColor: "#212121" }}>
        <div className="container">
          <div className="row py-4 text-center text-white">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              connect with us on social media
            </div>
            <div className="col-lg-7 col-md-6">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- START THE CONTENT FOR THE CAMPANY INFO --> */}
      <div className="container mt-5">
        <div className="row text-white justify-content-center mt-3 pb-3">
          <div className="col-12 col-sm-6 col-lg-6 mx-auto">
            <h5 className="text-capitalize fw-bold">Ifnet Digital Hub</h5>
            <hr
              className="bg-white d-inline-block mb-4"
              style={{ width: "60px", height: "2px" }}
            />
            <p className="lh-lg">
              At Ifnet, we introduce "The New & Better Way", a smarter approach
              to branding, marketing, and digital transformation. We help
              businesses of all sizes establish a strong digital presence,
              streamline operations, and reach the right audience with
              cutting-edge technology and strategies.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">Services</h5>
            <hr
              className="bg-white d-inline-block mb-4"
              style={{ width: "60px", height: "2px" }}
            />
            <ul className="list-inline campany-list">
              <li>
                <a href="#">Branding & Identity</a>
              </li>
              <li>
                <a href="#">Website & Mobile App Development</a>
              </li>
              <li>
                <a href="#">Content Creation & Social Media Management</a>
              </li>
              <li>
                <a href="#">Digital Marketing & Growth Strategies</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">useful links</h5>
            <hr
              className="bg-white d-inline-block mb-4"
              style={{ width: "60px", height: "2px" }}
            />
            <ul className="list-inline campany-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">contact</h5>
            <hr
              className="bg-white d-inline-block mb-4"
              style={{ width: "60px", height: "2px" }}
            />
            <ul className="list-inline campany-list">
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* <!-- START THE COPYRIGHT INFO  --> */}
      <div className="footer-bottom pt-5 pb-5">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-12">
              <div className="footer-bottom__copyright">
                © Copyright 2025 <br /> <a href="#">Ifnet Digital Hub</a> <br />{" "}
                All Rights Reserved.
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
