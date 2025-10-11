import React from "react";

export default function BookReview() {
  return (
    <section id="book-review" className="book-review section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div
            className="col-lg-8 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="section-header">
              <span className="section-badge">BOOK REVIEW</span>
              <h2>Single and Ready</h2>
              <p className="lead-text">
                A transformative review by Chris Mobley highlighting the book's
                impact on spiritual formation and biblical identity for singles.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-5 mt-5">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="300">
            <div className="review-content">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-image">
                    <img
                      src="assets/img/person/person-m-7.webp"
                      alt="Chris Mobley"
                    />
                  </div>
                  <div className="reviewer-details">
                    <h4>Chris Mobley</h4>
                    <span>Book Reviewer</span>
                  </div>
                </div>
                <div className="review-rating">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <span>Excellent</span>
                </div>
              </div>

              <div className="review-quotes">
                <div className="quote-item">
                  <div className="quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <blockquote>
                    "The book is excellent. The core thesis is very strong and
                    established from the beginning. It's not about finding a
                    partner, but about becoming a person prepared for
                    righteousness."
                  </blockquote>
                </div>

                <div className="quote-item">
                  <div className="quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <blockquote>
                    "It changes the question from 'When will I meet the one?' to
                    'Who is God forming me to become?'"
                  </blockquote>
                </div>

                <div className="quote-item">
                  <div className="quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <blockquote>
                    "Marriage reveals the places we've refused to grow — this
                    book helps you face those places now."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
            <div className="review-highlights">
              <h3>Key Highlights</h3>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <div className="highlight-content">
                  <h5>Active Formation over Passive Waiting</h5>
                  <p>
                    "Its power is in its focus on active formation in Christ
                    versus the passive waiting that so many singles fall into."
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <div className="highlight-content">
                  <h5>Singleness as Holy Assignment</h5>
                  <p>
                    "When you're single, you date the church; when you're
                    married, you date your wife."
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <div className="highlight-content">
                  <h5>Spiritual Depth and Challenge</h5>
                  <p>
                    "It's a hard truth that perfectly prepares the reader for
                    the deep soul work ahead."
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <div className="highlight-content">
                  <h5>Sustaining Foundation</h5>
                  <p>
                    "The work done in this season of undivided devotion is
                    precisely what will sustain believers later."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="500">
            <div className="review-conclusion">
              <div className="conclusion-content">
                <h3>Reviewer's Conclusion</h3>
                <p className="conclusion-text">
                  Chris Mobley concludes that the book's theological clarity and
                  pastoral tone make it a transformative guide, especially for
                  believers willing to embrace the soul work of sanctification
                  rather than merely searching for companionship.
                </p>
                <div className="conclusion-cta">
                  <a
                    href="https://thesinglesrevolution.com/"
                    className="btn btn-primary"
                  >
                    Get Your Free Copy
                  </a>
                  <a
                    href="https://thesinglesrevolution.com/"
                    className="btn btn-outline"
                  >
                    Submit Your Review
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
