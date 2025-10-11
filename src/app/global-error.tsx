"use client";

import React, { useEffect } from "react";
import AOS from "aos";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        <title>The Singles Revolution - Error</title>

        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
          integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        />
      </head>
      <body>
        <main className="main">
          {/* Global Error Section */}
          <section className="global-error-section section d-flex align-items-center min-vh-100">
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
                    <div className="error-icon">
                      <i className="bi bi-exclamation-octagon"></i>
                      <div className="floating-elements">
                        <div className="floating-card card-1">
                          <i className="bi bi-heart"></i>
                          <span>Faith</span>
                        </div>
                        <div className="floating-card card-2">
                          <i className="bi bi-cross"></i>
                          <span>Trust</span>
                        </div>
                        <div className="floating-card card-3">
                          <i className="bi bi-globe"></i>
                          <span>Hope</span>
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
                      System Error
                    </h1>
                    <p className="error-description">
                      We're experiencing a critical system error. But take heart
                      - even in the darkest moments, God's light shines
                      brightest. This temporary setback cannot diminish the
                      eternal hope we have in Christ.
                    </p>
                    <p className="error-subtitle">
                      "The Lord is close to the brokenhearted and saves those
                      who are crushed in spirit." - Psalm 34:18
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div
                    className="error-actions mt-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <button onClick={reset} className="btn-primary me-3">
                      <i className="bi bi-arrow-clockwise"></i>
                      <span>Try Again</span>
                    </button>
                    <a href="/" className="btn-secondary">
                      <i className="bi bi-house"></i>
                      <span>Return Home</span>
                    </a>
                  </div>

                  {/* Technical Details (Development Only) */}
                  {process.env.NODE_ENV === "development" && (
                    <div
                      className="error-details mt-5"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <details className="card border-0 shadow-sm">
                        <summary className="card-header bg-light cursor-pointer">
                          <h6 className="mb-0">
                            <i className="bi bi-bug me-2"></i>
                            Technical Details (Development)
                          </h6>
                        </summary>
                        <div className="card-body">
                          <pre className="text-start small text-muted">
                            {error.message}
                            {error.digest && `\nDigest: ${error.digest}`}
                          </pre>
                        </div>
                      </details>
                    </div>
                  )}

                  {/* Emergency Contact */}
                  <div
                    className="error-contact mt-5"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="card border-0 shadow-sm">
                      <div className="card-body text-center">
                        <i
                          className="bi bi-telephone-fill text-primary mb-3"
                          style={{ fontSize: "2rem" }}
                        ></i>
                        <h5 className="card-title">Need Immediate Help?</h5>
                        <p className="card-text">
                          If you're experiencing a crisis or need spiritual
                          support, don't hesitate to reach out to our community.
                        </p>
                        <div className="contact-buttons">
                          <a
                            href="https://thesinglesrevolution.com/"
                            className="btn btn-outline-primary me-2"
                          >
                            <i className="bi bi-globe me-1"></i>
                            Visit Our Website
                          </a>
                          <a
                            href="https://thesinglesrevolution.com/"
                            className="btn btn-outline-success"
                          >
                            <i className="bi bi-chat-dots me-1"></i>
                            Community Support
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Encouragement Message */}
                  <div
                    className="error-encouragement mt-5"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <div className="card border-0 shadow-sm">
                      <div className="card-body text-center">
                        <i
                          className="bi bi-heart-fill text-danger mb-3"
                          style={{ fontSize: "2rem" }}
                        ></i>
                        <h5 className="card-title">Remember</h5>
                        <p className="card-text">
                          Even when systems fail, God's love remains constant.
                          Your singleness is not a glitch in the system - it's a
                          divine feature. Join thousands discovering their
                          purpose through Christ-centered living.
                        </p>
                        <a
                          href="https://thesinglesrevolution.com/"
                          className="btn btn-outline-primary"
                        >
                          Join the Revolution
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

        <style jsx global>{`
          :root {
            --default-font: "Roboto", system-ui, -apple-system, "Segoe UI",
              Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans",
              sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
              "Segoe UI Symbol", "Noto Color Emoji";
            --heading-font: "Ubuntu", sans-serif;
            --nav-font: "Rubik", sans-serif;
            --background-color: #ffffff;
            --default-color: #3b5353;
            --heading-color: #193838;
            --accent-color: #00a19e;
            --surface-color: #ffffff;
            --contrast-color: #ffffff;
          }

          body {
            color: var(--default-color);
            background-color: var(--background-color);
            font-family: var(--default-font);
            margin: 0;
            padding: 0;
          }

          .global-error-section {
            background: linear-gradient(
              135deg,
              var(--background-color) 0%,
              #f8f9fa 100%
            );
            padding: 80px 0;
          }

          .error-icon {
            position: relative;
            display: inline-block;
            margin-bottom: 2rem;
          }

          .error-icon i {
            font-size: 6rem;
            color: #dc3545;
            text-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
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
            cursor: pointer;
          }

          .btn-primary:hover {
            background: color-mix(
              in srgb,
              var(--accent-color),
              transparent 15%
            );
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

          .error-contact .card,
          .error-encouragement .card {
            background: var(--surface-color);
            border-radius: 12px;
          }

          .error-contact .card-title,
          .error-encouragement .card-title {
            color: var(--heading-color);
            font-weight: 600;
          }

          .error-contact .card-text,
          .error-encouragement .card-text {
            color: var(--default-color);
            line-height: 1.6;
          }

          .cursor-pointer {
            cursor: pointer;
          }

          .error-details details {
            border-radius: 8px;
          }

          .error-details summary {
            border-radius: 8px 8px 0 0;
          }

          .error-details pre {
            white-space: pre-wrap;
            word-break: break-word;
            margin: 0;
          }

          @media (max-width: 768px) {
            .error-icon i {
              font-size: 4rem;
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

            .contact-buttons {
              flex-direction: column;
              gap: 0.5rem;
            }

            .contact-buttons .btn {
              width: 100%;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
