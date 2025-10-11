"use client";

import React from "react";
import Mission from "@/components/Mission";

export default function MissionPage() {
  return (
    <>
      {/* Hero Section for Mission Page */}
      <section id="mission-hero" className="hero d-flex align-items-center">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2 data-aos="fade-up">Our Mission</h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Discover the heart behind The Singles Revolution and our
                commitment to evangelizing, discipling, and mobilizing single
                young adults worldwide.
              </p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#mission" className="btn-get-started">
                  Explore Our Mission
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img
                src="/assets/img/about/about-11.webp"
                className="img-fluid"
                alt="Our Mission"
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Component */}
      <Mission />

      {/* Additional Mission Content */}
      <section id="mission-details" className="features-cards section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-header">
                <span className="section-badge">MISSION DETAILS</span>
                <h2>How We Fulfill Our Mission</h2>
                <p className="lead-text">
                  Our mission is carried out through strategic initiatives and
                  partnerships that reach single young adults globally with the
                  Gospel message and biblical teaching.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            {/* First row with two larger cards */}
            <div className="col-lg-6" data-aos="flip-left" data-aos-delay="100">
              <div className="feature-card">
                <div className="icon-box">
                  <i className="bi bi-book"></i>
                </div>
                <h3>Free Book Distribution</h3>
                <p>
                  We distribute free copies of <strong>Single and Ready</strong>{" "}
                  to 20,000 young adults worldwide, making biblical teaching
                  accessible to all without any financial barriers.
                </p>
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle"></i> Global reach
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> No cost barriers
                  </li>
                </ul>
                <a href="#contact" className="read-more">
                  Request Your Copy <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6" data-aos="flip-left" data-aos-delay="200">
              <div className="feature-card">
                <div className="icon-box">
                  <i className="bi bi-people"></i>
                </div>
                <h3>Community Building</h3>
                <p>
                  We create spaces for mentorship, prayer, and mutual
                  encouragement among single believers across cultures and
                  continents, fostering authentic Christian community.
                </p>
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle"></i> Mentorship programs
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Prayer networks
                  </li>
                </ul>
                <a href="#contact" className="read-more">
                  Join Community <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Second row with four smaller cards */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="compliance-card">
                <h4>Global Reach</h4>
                <p className="status compliant">20,000+ Singles</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="compliance-card">
                <h4>Free Distribution</h4>
                <p className="status compliant">100% No Cost</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="compliance-card">
                <h4>Online Teachings</h4>
                <p className="status in-progress">Active</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="compliance-card">
                <h4>Spiritual Formation</h4>
                <p className="status planned">Growing</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12" data-aos="fade-up" data-aos-delay="500">
              <div className="mission-impact">
                <div className="impact-content text-center">
                  <h3>Our Impact Goal</h3>
                  <p className="lead">
                    By reaching 20,000 single young adults with{" "}
                    <strong>Single and Ready</strong>, we aim to spark a global
                    discipleship movement that transforms how singles view their
                    identity, relationships, and calling in Christ.
                  </p>
                  <div className="impact-stats">
                    <div className="row g-4">
                      <div className="col-md-3">
                        <div className="stat-item">
                          <span className="stat-number">20K+</span>
                          <span className="stat-label">Books Distributed</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="stat-item">
                          <span className="stat-number">Global</span>
                          <span className="stat-label">Reach</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="stat-item">
                          <span className="stat-number">100%</span>
                          <span className="stat-label">Free</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="stat-item">
                          <span className="stat-number">∞</span>
                          <span className="stat-label">Impact</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
