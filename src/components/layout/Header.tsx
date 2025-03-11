"use client";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
      <div className="container">
        <a className="navbar-brand" href="">
          <img src="/assets/images/logo.png" alt="logo image" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                contact
              </a>
            </li>
          </ul>
          <a
            href="tel:+251985519439"
            type="button"
            className="rounded-pill btn-rounded"
          >
            +251 951 519 439
            <span>
              <i className="fas fa-phone-alt"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
