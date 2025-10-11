"use client";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Larson",
      role: "Entrepreneur",
      image: "/assets/images/testimonials/client-5.jpg",
      review:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
    {
      name: "Saul Goodman",
      role: "CEO & Founder",
      image: "/assets/images/testimonials/client-1.jpg",
      review:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      image: "/assets/images/testimonials/client-2.jpg",
      review:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      image: "/assets/images/testimonials/client-3.jpg",
      review:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      image: "/assets/images/testimonials/client-4.jpg",
      review:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Voices of Transformation</span>
        <h2>What Readers Are Saying</h2>
        <p>
          Real testimonies from singles who have discovered biblical identity
          and spiritual wholeness
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">
        <div className="testimonial-masonry">
          <div className="testimonial-item" data-aos="fade-up">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                "WOW! I finished reading the book and it was sooo good! I
                definitely want to read it again."
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person-f-7.webp" alt="Ruby" />
                </div>
                <div className="client-details">
                  <h3>Ruby</h3>
                  <span className="position">Reader</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item highlight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                "The book is excellent. The core thesis is very strong and
                established from the beginning. It's not about finding a
                partner, but about becoming a person prepared for
                righteousness."
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img
                    src="assets/img/person/person-m-7.webp"
                    alt="Chris Mobley"
                  />
                </div>
                <div className="client-details">
                  <h3>Chris Mobley</h3>
                  <span className="position">Book Reviewer</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                "Marriage reveals the places we've refused to grow — this book
                helps you face those places now."
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img
                    src="assets/img/person/person-f-8.webp"
                    alt="Chris Mobley"
                  />
                </div>
                <div className="client-details">
                  <h3>Chris Mobley</h3>
                  <span className="position">Reviewer</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                "It changes the question from 'When will I meet the one?' to
                'Who is God forming me to become?'"
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img
                    src="assets/img/person/person-m-8.webp"
                    alt="Chris Mobley"
                  />
                </div>
                <div className="client-details">
                  <h3>Chris Mobley</h3>
                  <span className="position">Reviewer</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item highlight"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                "The work done in this season of undivided devotion is precisely
                what will sustain believers later."
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img
                    src="assets/img/person/person-f-9.webp"
                    alt="Chris Mobley"
                  />
                </div>
                <div className="client-details">
                  <h3>Chris Mobley</h3>
                  <span className="position">Reviewer</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                "Singleness isn't wasted — it's preparation for kingdom impact."
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img
                    src="assets/img/person/person-m-13.webp"
                    alt="Movement Motto"
                  />
                </div>
                <div className="client-details">
                  <h3>Singles Revolution</h3>
                  <span className="position">Movement Motto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
