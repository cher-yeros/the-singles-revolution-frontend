"use client";

import React, { useEffect } from "react";
import AOS from "aos";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero section"
      style={{ fontFamily: "var(--heading-font)" }}
    >
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div
            className="col-lg-6 order-2 order-lg-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="hero-content">
              <h1 className="hero-title">The Singles Revolution</h1>
              <p className="hero-description">
                A global Gospel movement for redeemed singleness, purposeful
                dating, and Christ-centered identity. Join 20,000 singles
                worldwide discovering biblical identity and spiritual wholeness.
              </p>
              <div className="hero-actions">
                <a href="#about" className="btn-primary">
                  Join the Revolution
                </a>
                <a
                  href="https://thesinglesrevolution.com/"
                  className="btn-secondary glightbox"
                >
                  <i className="bi bi-book"></i>
                  <span>Get Single and Ready</span>
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">20K+</span>
                  <span className="stat-label">Singles Reached</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">#JesusAtTheCenter</span>
                  <span className="stat-label">Movement Tagline</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Global</span>
                  <span className="stat-label">Discipleship Mission</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img
                  src="/assets/books_png.png"
                  className="img-fluid hero-image"
                  alt="Hero Image"
                />
                <div className="floating-elements">
                  <div className="floating-card card-1">
                    <i className="bi bi-heart"></i>
                    <span>Redeemed Singleness</span>
                  </div>
                  <div className="floating-card card-2">
                    <i className="bi bi-cross"></i>
                    <span>Christ-Centered</span>
                  </div>
                  <div className="floating-card card-3">
                    <i className="bi bi-globe"></i>
                    <span>Global Movement</span>
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
