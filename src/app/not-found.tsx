"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";

export default function NotFound() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <main className="main">
      {/* Error Section */}
      <section className="error-section section d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-8 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Error Visual */}
              <div
                className="error-visual mb-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="error-number">
                  <span className="error-404">404</span>
                  <div className="floating-elements">
                    <div className="floating-card card-1">
                      <i className="bi bi-heart"></i>
                      <span>Lost?</span>
                    </div>
                    <div className="floating-card card-2">
                      <i className="bi bi-cross"></i>
                      <span>Found!</span>
                    </div>
                    <div className="floating-card card-3">
                      <i className="bi bi-globe"></i>
                      <span>Home</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Content */}
              <div
                className="error-content"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h1
                  className="error-title"
                  style={{ fontFamily: "var(--heading-font)" }}
                >
                  Page Not Found
                </h1>
                <p className="error-description">
                  Oops! The page you're looking for seems to have wandered off.
                  But don't worry - just like in our journey of faith, sometimes
                  we need to redirect our path to find what we're truly looking
                  for.
                </p>
                <p className="error-subtitle">
                  "For I know the plans I have for you," declares the Lord,
                  "plans to prosper you and not to harm you, to give you hope
                  and a future." - Jeremiah 29:11
                </p>
              </div>

              {/* Action Buttons */}
              <div
                className="error-actions mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Link href="/" className="btn-primary me-3">
                  <i className="bi bi-house"></i>
                  <span>Return Home</span>
                </Link>
                <Link href="/mission" className="btn-secondary">
                  <i className="bi bi-compass"></i>
                  <span>Find Your Mission</span>
                </Link>
              </div>

              {/* Helpful Links */}
              <div
                className="error-links mt-5"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h4 className="mb-3">Maybe you were looking for:</h4>
                <div className="row justify-content-center">
                  <div className="col-md-4 mb-3">
                    <Link href="/mission" className="error-link-item">
                      <i className="bi bi-target"></i>
                      <span>Our Mission</span>
                    </Link>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Link href="/message" className="error-link-item">
                      <i className="bi bi-chat-dots"></i>
                      <span>Message</span>
                    </Link>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Link
                      href="https://thesinglesrevolution.com/"
                      className="error-link-item"
                    >
                      <i className="bi bi-book"></i>
                      <span>Get the Book</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Encouragement Message */}
              <div
                className="error-encouragement mt-5"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="card border-0 shadow-sm">
                  <div className="card-body text-center">
                    <i
                      className="bi bi-heart-fill text-danger mb-3"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h5 className="card-title">Remember</h5>
                    <p className="card-text">
                      Even when we feel lost, God has a plan. Your singleness is
                      not a mistake - it's a divine assignment. Join 20,000
                      singles worldwide discovering their purpose in Christ.
                    </p>
                    <Link
                      href="https://thesinglesrevolution.com/"
                      className="btn btn-outline-primary"
                    >
                      Join the Revolution
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .error-section {
          background: linear-gradient(
            135deg,
            var(--background-color) 0%,
            #f8f9fa 100%
          );
          padding: 80px 0;
        }

        .error-number {
          position: relative;
          display: inline-block;
          margin-bottom: 2rem;
        }

        .error-404 {
          font-size: 8rem;
          font-weight: 900;
          color: var(--accent-color);
          font-family: var(--heading-font);
          text-shadow: 0 4px 8px rgba(0, 161, 158, 0.2);
          line-height: 1;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-card {
          position: absolute;
          background: var(--surface-color);
          padding: 8px 16px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--heading-color);
          animation: float 3s ease-in-out infinite;
        }

        .floating-card.card-1 {
          top: 20%;
          right: -10%;
          animation-delay: 0s;
        }

        .floating-card.card-2 {
          bottom: 20%;
          left: -10%;
          animation-delay: 1s;
        }

        .floating-card.card-3 {
          top: 50%;
          right: -20%;
          animation-delay: 2s;
        }

        .floating-card i {
          margin-right: 6px;
          color: var(--accent-color);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .error-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--heading-color);
          margin-bottom: 1rem;
        }

        .error-description {
          font-size: 1.125rem;
          color: var(--default-color);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .error-subtitle {
          font-style: italic;
          color: var(--accent-color);
          font-size: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;
          background: rgba(0, 161, 158, 0.1);
          border-radius: 8px;
          border-left: 4px solid var(--accent-color);
        }

        .btn-primary {
          background: var(--accent-color);
          color: var(--contrast-color);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-primary:hover {
          background: color-mix(in srgb, var(--accent-color), transparent 15%);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 161, 158, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: var(--accent-color);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
          border: 2px solid var(--accent-color);
        }

        .btn-secondary:hover {
          background: var(--accent-color);
          color: var(--contrast-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 161, 158, 0.3);
        }

        .btn-primary i,
        .btn-secondary i {
          margin-right: 8px;
        }

        .error-links h4 {
          color: var(--heading-color);
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .error-link-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 20px;
          background: var(--surface-color);
          border-radius: 8px;
          text-decoration: none;
          color: var(--default-color);
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .error-link-item:hover {
          background: var(--accent-color);
          color: var(--contrast-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 161, 158, 0.2);
        }

        .error-link-item i {
          margin-right: 8px;
          font-size: 1.125rem;
        }

        .error-encouragement .card {
          background: var(--surface-color);
          border-radius: 12px;
        }

        .error-encouragement .card-title {
          color: var(--heading-color);
          font-weight: 600;
        }

        .error-encouragement .card-text {
          color: var(--default-color);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .error-404 {
            font-size: 6rem;
          }

          .error-title {
            font-size: 2rem;
          }

          .floating-card {
            display: none;
          }

          .error-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
