"use client";

import React from "react";
import { usePricingToggle } from "@/hooks/usePricingToggle";

export default function Pricing() {
  const { isYearly, togglePricing } = usePricingToggle();

  const pricingPlans = [
    {
      id: 1,
      name: "Free Plan",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Quam adipiscing vitae proin",
        "Nec feugiat nisl pretium",
        "Nulla at volutpat diam uteera",
        "Pharetra massa massa ultricies",
        "Massa ultricies mi quis hendrerit",
      ],
      isPopular: false,
    },
    {
      id: 2,
      name: "Business Plan",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Quam adipiscing vitae proin",
        "Nec feugiat nisl pretium",
        "Nulla at volutpat diam uteera",
        "Pharetra massa massa ultricies",
        "Massa ultricies mi quis hendrerit",
      ],
      isPopular: true,
    },
    {
      id: 3,
      name: "Developer Plan",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Quam adipiscing vitae proin",
        "Nec feugiat nisl pretium",
        "Nulla at volutpat diam uteera",
        "Pharetra massa massa ultricies",
        "Massa ultricies mi quis hendrerit",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="section-header text-center">
              <h2>Pricing</h2>
              <p>
                Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
                porro incidunt dolores placeat numquam dolores laboriosam
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing-toggle-container">
              <div className="pricing-toggle">
                <span className={`monthly ${!isYearly ? "active" : ""}`}>
                  Monthly
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isYearly}
                    onChange={togglePricing}
                  />
                  <span className="slider"></span>
                </label>
                <span className={`yearly ${isYearly ? "active" : ""}`}>
                  Yearly
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`col-lg-4 col-md-6 ${plan.isPopular ? "popular" : ""}`}
              data-aos="fade-up"
              data-aos-delay={`${plan.id * 100}`}
            >
              <div
                className={`pricing-item ${isYearly ? "yearly-active" : ""}`}
              >
                {plan.isPopular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="period">/{isYearly ? "year" : "month"}</span>
                </div>
                <ul className="features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="cta">
                  <a href="#" className="btn btn-primary">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
