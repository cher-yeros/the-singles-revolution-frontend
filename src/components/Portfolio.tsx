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

            {designs.map((portfolio) => (
              <div
                className={`col-lg-4 col-md-6 filter-item ${portfolio.category}`}
              >
                <div
                  className="portfolio-box shadow"
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* <a href={portfolio.link} target="_blank"> */}
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    title={portfolio.title}
                    className="img-fluid"
                    style={{
                      height: "auto",
                      position: "absolute",
                      left: 0,
                      opacity: 0.5,
                      filter: "blur(10px)",
                      zIndex: 10,
                    }}
                  />
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    title={portfolio.title}
                    className="img-fluid"
                    style={{
                      width: "auto",
                      zIndex: 20,
                    }}
                  />
                  {/* </a> */}

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

            {websites.map((portfolio) => (
              <div
                className={`col-lg-4 col-md-6 filter-item ${portfolio.category}`}
              >
                <div
                  className="portfolio-box shadow"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <a
                    href={portfolio.link}
                    target="_blank"
                    style={{
                      // position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      title={portfolio.title}
                      className="img-fluid"
                      style={{
                        width: "auto",
                        position: "absolute",
                        left: 0,
                        opacity: 0.5,
                        filter: "blur(10px)",
                        zIndex: 10,
                      }}
                    />

                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      title={portfolio.title}
                      className="img-fluid"
                      style={{
                        height: "auto",
                        zIndex: 20,
                      }}
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
    label: "Branding & Design",
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

const designs = [
  {
    image: "/assets/images/portfolio/design/royal_f.jpg",
    title: "Royal Furniture",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/meraki.jpg",
    title: "Meraki Technology & Engineering PLC",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/eyomer1.jpg",
    title: "Eyomer Hotel",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/eyomer2.jpg",
    title: "Eyomer Hotel",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/eyomer.jpg",
    title: "Eyomer Hotel",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image:
      "/assets/images/portfolio/design/papa_garden-resort__logo_cover-image-09.jpg",
    title: "Papa Resort Logo",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image:
      "/assets/images/portfolio/design/papa_garden-resort__logo_cover-image-09.jpg",
    title: "Papa Resort Logo",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/enganing_o1.jpg",
    title: "Hulu Play Engaining",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/greenmart_o21@1.5x.jpg",
    title: "Hulu Play Green Mart",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/hello_bus_o2.jpg",
    title: "Hulu Play Hello Bus",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image:
      "/assets/images/portfolio/design/herbal_melly_social_media_post_design.jpg",
    title: "Herbal Melly",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },

  {
    image: "/assets/images/portfolio/design/sharen_o3.jpg",
    title: "Sharen Furniture",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/sheren_3o.jpg",
    title: "Sharen Furniture",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/sheren_3o4.jpg",
    title: "Sharen Furniture",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/sheren_5o2.jpg",
    title: "Sharen Furniture",
    // name: "project name goes here 8",
    category: "branding-and-identity",
  },
  {
    image: "/assets/images/portfolio/design/Yebuna_poster_1.jpg",
    title: "Ye-Buna",
    // name: "project name goes here 8",
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
    image: "/assets/images/portfolio/forward.png",
    title: "Forward Logistics Technology",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://forward-logistics-landing.vercel.app/",
  },
  {
    image: "/assets/images/portfolio/finaloop.png",
    title: "Finaloop AI",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://www.finaloopai.com/",
  },
  {
    image: "/assets/images/portfolio/eth_scie_tech.png",
    title: "Ethio-Sci Tech Engineering Group PLC",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://ethio-sci-tech-client-r9iy.vercel.app/",
  },
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
    image: "/assets/images/portfolio/ifnet.png",
    title: "Ifnet Digital Hub",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://ifnet-digital-hub.vercel.app/",
  },
  {
    image: "/assets/images/portfolio/man.png",
    title: "Manyazewal Eshetu Gibi",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://manyazewal-eshetu.vercel.app/podcast",
  },
  {
    image: "/assets/images/portfolio/str_africa.png",
    title: "STR Africa",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://str-africa.vercel.app/",
  },
  {
    image: "/assets/images/portfolio/grace_furniture.png",
    title: "Grace Furniture",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://grace-furniture.vercel.app/",
  },
  {
    image: "/assets/images/portfolio/matrix.png",
    title: "Matrix 360 ERP",
    // desc: "project name goes here 1",
    category: "web-development",
    link: "https://matrix360erpdev.com/",
  },
  {
    image: "/assets/images/portfolio/bethel_tv.png",
    title: "Bethel TV",
    category: "web-development",
    link: "https://bethel-tv.netlify.app/",
  },
  {
    image: "/assets/images/portfolio/alemneh.png",
    title: "Memory of Alemneh Jenberu",
    category: "web-development",
    link: "https://memory-of-alemneh-jenberu.netlify.app/",
  },
  {
    image: "/assets/images/portfolio/skill_connect.png",
    title: "Skill Connect Ethiopia",
    category: "web-development",
    link: "https://skill-connect-ethiopia.netlify.app/",
  },
  {
    image: "/assets/images/portfolio/url_shortener.png",
    title: "Custom URL Shortener",
    category: "web-development",
    link: "https://custom-url-shortener.netlify.app/",
  },
  {
    image: "/assets/images/portfolio/dynamic_cert.png",
    title: "Dynamic Web Certificates",
    category: "web-development",
    link: "https://dynamic-web-certificates.netlify.app/",
  },
  {
    image: "/assets/images/portfolio/ethio_sci_tech.png",
    title: "Ethio Science & Tech",
    category: "web-development",
    link: "https://ethio-scie-tech.netlify.app/",
  },
];

// https://bethel-tv.netlify.app/
// https://memory-of-alemneh-jenberu.netlify.app/
// https://skill-connect-ethiopia.netlify.app/
// https://custom-url-shortener.netlify.app/
// https://dynamic-web-certificates.netlify.app/
// https://dynamic-web-certificates.netlify.app/
// https://ethio-scie-tech.netlify.app/
