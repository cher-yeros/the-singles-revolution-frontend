"use client";

import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

export default function Portfolio() {
  const isotope = useRef<Isotope | null>(null);

  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="row text-center mt-5" data-aos="fade-up">
          <h1 className="display-3 fw-bold text-capitalize">Portfolio</h1>
          <div className="heading-line"></div>
          <p className="lead">
            Explore our work and see how we illuminate digital innovation
          </p>
        </div>

        <div
          className="row mt-1 mb-4 g-3 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* <ul
            className="col-md-12 d-flex justify-content-center"
            id="portfolio-flters"
          >
            <li
              className={`${filterKey === "*" ? "filter-active" : ""}`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </li>

            {dataFilters.map((filter) => (
              <li
                className={`${
                  filterKey === filter.category ? "filter-active" : ""
                }`}
                key={filter.label}
                onClick={handleFilterKeyChange(filter.category)}
              >
                {filter.label}
              </li>
            ))}
          </ul> */}

          <div className="col-md-12 d-flex justify-content-center gap-2 flex-wrap">
            <button
              className={`btn ${
                filterKey === "*" ? "btn-primary" : "btn-outline-primary"
              }`}
              type="button"
              onClick={handleFilterKeyChange("*")}
            >
              All
            </button>

            {dataFilters.map((filter) => (
              <button
                className={`btn ${
                  filterKey === filter.category
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                type="button"
                key={filter.label}
                onClick={handleFilterKeyChange(filter.category)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <>
          <div
            className="row filter-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* {portfolios.map((portfolio) => (
              <div
                className={`col-lg-4 col-md-6 filter-item ${portfolio.category}`}
              >
                <div className="portfolio-box shadow">
                  <img
                    src={portfolio.image}
                    alt="portfolio 1 image"
                    title="portfolio 1 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>{portfolio.title}</h4>
                      <p>{portfolio.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}

            {websites.map((portfolio) => (
              <div
                className={`col-lg-4 col-md-6 filter-item ${portfolio.category}`}
              >
                <div className="portfolio-box shadow">
                  <a href={portfolio.link} target="_blank">
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      title={portfolio.title}
                      className="img-fluid"
                    />
                  </a>

                  {/* <iframe
                    width="100%"
                    height="100%"
                    src={portfolio.link}
                    title={portfolio.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-embed"
                  ></iframe> */}
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>{portfolio.title}</h4>
                      {/* <p>{portfolio.title}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {contentCreations.map((portfolio) => (
              <div
                className={`col-lg-4 col-md-6 filter-item ${portfolio.category}`}
              >
                <div className="portfolio-box shadow">
                  {/* <img
                    src={portfolio.image}
                    alt="portfolio 1 image"
                    title="portfolio 1 picture"
                    className="img-fluid"
                  /> */}
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${portfolio.video_id}?autoplay=0&loop=1&playlist=${portfolio.video_id}`}
                    title="YouTube Shorts Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-embed"
                  ></iframe>

                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>{portfolio.title}</h4>
                      {/* <p>{portfolio.title}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      </div>
    </section>
  );
}

const dataFilters = [
  // {
  //   className: "",
  //   dataFilter: ".one",
  //   label: "All",
  //   category: "one",
  // },
  {
    className: "",
    dataFilter: ".branding-and-identity",
    label: "Branding & Identity",
    category: "branding-and-identity",
  },
  {
    className: "",
    dataFilter: ".web-development",
    label: "Web Development",
    category: "web-development",
  },
  {
    className: "",
    dataFilter: ".content-creation-and-social-media",
    label: "Content Creation & Social Media",
    category: "content-creation-and-social-media",
  },
  {
    className: "",
    dataFilter: ".digital-marketing",
    label: "Digital Marketing",
    category: "digital-marketing",
  },
];

const portfolios = [
  {
    image: "/assets/images/portfolio/portfolio-3.jpg",
    alt: "portfolio 3 image",
    title: "portfolio 3 picture",
    name: "project name goes here 3",
    category: "digital-marketing",
  },
  {
    image: "/assets/images/portfolio/portfolio-4.jpg",
    alt: "portfolio 4 image",
    title: "portfolio 4 picture",
    name: "project name goes here 4",
    category: "branding-and-identity",
  },

  {
    image: "/assets/images/portfolio/portfolio-6.jpg",
    alt: "portfolio 6 image",
    title: "portfolio 6 picture",
    name: "project name goes here 6",
    category: "digital-marketing",
  },

  {
    image: "/assets/images/portfolio/portfolio-8.jpg",
    alt: "portfolio 8 image",
    title: "portfolio 8 picture",
    name: "project name goes here 8",
    category: "branding-and-identity",
  },
];

const contentCreations = [
  {
    image: "/assets/images/portfolio/portfolio-1.jpg",
    title: "New Spot Al Di Wan Restaurant",
    // name: "project name goes here 1",
    category: "content-creation-and-social-media",
    link: "https://youtube.com/shorts/C_RcFoYu84I?si=yorC_LAGs7R_rg8T",
    video_id: "C_RcFoYu84I",
  },
  {
    image: "/assets/images/portfolio/portfolio-1.jpg",
    title: "Andegna Furniture Advertising",
    // name: "project name goes here 1",
    category: "content-creation-and-social-media",
    link: "https://youtube.com/shorts/5uKCs0UuEZo?si=j-06530IBK1RFIwA",
    video_id: "5uKCs0UuEZo",
  },
  {
    image: "/assets/images/portfolio/portfolio-1.jpg",
    title: "Andegna Furniture Addis Ababa Advertising",
    // name: "project name goes here 1",
    category: "content-creation-and-social-media",
    link: "https://youtu.be/0IU34gH6hxw?si=QrHq4L7w8CrLSZrl",
    video_id: "0IU34gH6hxw",
  },
  {
    image: "/assets/images/portfolio/portfolio-1.jpg",
    title: "Andegna Furniture",
    // name: "project name goes here 1",
    category: "content-creation-and-social-media",
    link: "https://youtu.be/9OUavLpOiCg?si=ZgFIF1ujfWldB6um",
    video_id: "9OUavLpOiCg",
  },
  {
    image: "/assets/images/portfolio/portfolio-1.jpg",
    title: "Ker Awed Iftar Package",
    // name: "project name goes here 1",
    category: "content-creation-and-social-media",
    link: "https://youtube.com/shorts/svIlxbLZF9k?si=VS6aBaIOKaEWI226",
    video_id: "svIlxbLZF9k",
  },
  {
    image: "/assets/images/portfolio/portfolio-1.jpg",
    title: "Freelance Furniture Advertising",
    // name: "project name goes here 1",
    category: "content-creation-and-social-media",
    link: "https://youtube.com/shorts/77YyveqdcXY?si=YLnoqC56e4aY0z7z",
    video_id: "77YyveqdcXY",
  },
  {
    image: "/assets/images/portfolio/portfolio-1.jpg",
    title: "Cape Hotels Freelance",
    // name: "project name goes here 1",
    category: "content-creation-and-social-media",
    link: "https://youtube.com/shorts/9yTWyJGetok?si=EEntsKyDQwP2zgtY",
    video_id: "9yTWyJGetok",
  },
  {
    image: "/assets/images/portfolio/portfolio-1.jpg",
    title: "Cape Hotels",
    // name: "project name goes here 1",
    category: "content-creation-and-social-media",
    link: "https://youtube.com/shorts/WGoRqyLg-T0?si=cePnG6yxLWZ3NjFS",
    video_id: "WGoRqyLg-T0",
  },
  {
    image: "/assets/images/portfolio/portfolio-1.jpg",
    title: "Green Furniture",
    // name: "project name goes here 1",
    category: "content-creation-and-social-media",
    link: "https://youtube.com/shorts/SZx9L4KduqQ?si=9Zk4Hkm58gIMKXwC",
    video_id: "SZx9L4KduqQ",
  },
];

const websites = [
  {
    image: "/assets/images/portfolio/anointing.png",
    title: "Anointing TV",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://anointingtv.org/",
  },
  {
    image: "/assets/images/portfolio/jps.png",
    title: "JPS TV Ethiopia",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://jpstvethiopia.com/",
  },
  {
    image: "/assets/images/portfolio/matrix.png",
    title: "Matrix 360 ERP",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://matrix360erpdev.com/",
  },
];
