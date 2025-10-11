"use client";

import React, { useState } from "react";

export default function FAQs() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "What is The Singles Revolution?",
      answer:
        "The Singles Revolution is not a dating campaign — it is a global discipleship movement. A bold and urgent call for single young adults around the world to discover biblical identity, spiritual wholeness, and Christ-centered purpose. It redefines singleness as a holy assignment, not a holding pattern.",
    },
    {
      id: 1,
      question: "What does it mean to be 'Un-Single'?",
      answer:
        "To be 'Un-Single' means to live free and fully devoted to Christ: Unattached (free from dependence on others for identity), Unhurried (trusting God's timing without cultural pressure), Unworried (resting in peace rather than anxiety about the future), and Unto the Lord (living with Jesus at the center of all pursuits).",
    },
    {
      id: 2,
      question: "How can I get a free copy of 'Single and Ready'?",
      answer:
        "The movement aims to put a free copy of 'Single and Ready' into the hands of 20,000 young adults worldwide. Visit our website at thesinglesrevolution.com to request your free copy and join the global discipleship movement.",
    },
    {
      id: 3,
      question: "What is the mission of The Singles Revolution?",
      answer:
        "To evangelize, disciple, and mobilize single young adults by putting a free copy of 'Single and Ready' into the hands of 20,000 young adults worldwide, sparking a global discipleship movement rooted in biblical identity, Spirit-led relationships, and Christ-centered transformation.",
    },
    {
      id: 4,
      question: "When is the global discussion starting?",
      answer:
        "The global discussion 'Single? God's Calling' launches on November 15, 2025. This worldwide conversation will explore what singleness is, how singleness is useful, and what the ultimate goal of singleness is according to God's design.",
    },
    {
      id: 5,
      question: "How is this different from other dating advice?",
      answer:
        "This is not about dating techniques or finding 'the one.' The Singles Revolution focuses on active spiritual formation versus passive waiting. It shifts the question from 'When will I meet the one?' to 'Who is God forming me to become?' It's about righteousness over romance, becoming over finding.",
    },
  ];

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? -1 : id);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${
                    activeFaq === faq.id ? "faq-active" : ""
                  }`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3>{faq.question}</h3>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                  <i
                    className={`faq-toggle bi ${
                      activeFaq === faq.id
                        ? "bi-chevron-down"
                        : "bi-chevron-right"
                    }`}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
