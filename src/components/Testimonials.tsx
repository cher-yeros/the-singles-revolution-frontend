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
    <section id="testimonials" className="testimonials">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="container">
        <div className="row text-center text-white">
          <h1 className="display-3 fw-bold">Testimonials</h1>
          <hr style={{ width: "100px", height: "3px" }} className="mx-auto" />
          <p className="lead pt-1">what our clients are saying</p>
        </div>

        <div className="row align-items-center">
          <Swiper
            modules={[Navigation, Autoplay, A11y, Pagination]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 5000 }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 40 },
              1200: { slidesPerView: 2, spaceBetween: 20 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  {/* <!-- testimonials card  --> */}
                  <div className="testimonials__card">
                    <p className="lh-lg">
                      <i className="fas fa-quote-left"></i>
                      {testimonial.review}
                      <i className="fas fa-quote-right"></i>
                      <div className="ratings p-1">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </p>
                  </div>
                  {/* <!-- client picture  --> */}
                  <div className="testimonials__picture">
                    <img
                      src={testimonial.image}
                      alt="client-2 picture"
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  {/* <!-- client name & role  --> */}
                  <div className="testimonials__name">
                    <h3>{testimonial.name}</h3>
                    <p className="fw-light">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="swiper-button-next">Next</div>
          <div className="swiper-button-prev">Prev</div> */}
          <div className="text-center d-flex justify-content-center gap-2">
            <button className="btn btn-outline-light custom-prev" type="button">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="btn btn-outline-light custom-next" type="button">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
