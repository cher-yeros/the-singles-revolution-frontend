export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer position-relative dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">The Singles Revolution</span>
              </a>
              <p>
                A global Gospel movement for redeemed singleness, purposeful
                dating, and Christ-centered identity. Join 20,000 singles
                worldwide discovering biblical identity and spiritual wholeness.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="https://thesinglesrevolution.com/">
                  <i className="bi bi-globe"></i>
                </a>
                <a href="https://thesinglesrevolution.com/">
                  <i className="bi bi-book"></i>
                </a>
                <a href="https://thesinglesrevolution.com/">
                  <i className="bi bi-heart"></i>
                </a>
                <a href="https://thesinglesrevolution.com/">
                  <i className="bi bi-cross"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Movement</h4>
              <ul>
                <li>
                  <a href="#about">About the Movement</a>
                </li>
                <li>
                  <a href="#features">Core Teachings</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="https://thesinglesrevolution.com/">
                    Join the Revolution
                  </a>
                </li>
                <li>
                  <a href="https://thesinglesrevolution.com/">Get the Book</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="https://thesinglesrevolution.com/">
                    Single and Ready Book
                  </a>
                </li>
                <li>
                  <a href="https://thesinglesrevolution.com/">
                    Global Discussion
                  </a>
                </li>
                <li>
                  <a href="https://thesinglesrevolution.com/">
                    Submit Your Review
                  </a>
                </li>
                <li>
                  <a href="https://thesinglesrevolution.com/">Community</a>
                </li>
                <li>
                  <a href="https://thesinglesrevolution.com/">Prayer Support</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Join the Revolution</h4>
              <p>Global Discipleship Movement</p>
              <p>#JesusAtTheCenter</p>
              <p>Single? God's Calling.</p>
              <p className="mt-4">
                <strong>Mission:</strong> <span>20,000 Singles Worldwide</span>
              </p>
              <p>
                <strong>Book:</strong> <span>Single and Ready</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">The Singles Revolution</strong>
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            <strong>Declaration:</strong> "We will not waste our singleness. We
            will use it for His glory. Jesus is at the center of it all."
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button - handled by main.js */}
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
