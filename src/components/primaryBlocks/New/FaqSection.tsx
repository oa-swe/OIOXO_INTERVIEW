"use client";
import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqItems = [
    {
      question: "A digital agency is a business",
      answer:
        "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
    },
    {
      question: "Hire to outsource your digital",
      answer:
        "We provide comprehensive digital marketing solutions including SEO, social media marketing, content creation, and web development services.",
    },
    {
      question: "Marketing efforts",
      answer:
        "Our marketing efforts focus on driving results through data-driven strategies and creative campaigns that resonate with your target audience.",
    },
    {
      question: "Can provide your business",
      answer:
        "We can provide your business with increased online visibility, better customer engagement, and measurable growth in your digital presence.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="section-title text-orange mb-3">FAQ</p>
            </div>
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.4s" }}
            >
              <h2 className="display-3 mb-4">
                Frequently Asked
                <br />
                Questions
              </h2>
            </div>
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.6s" }}
            >
              <p className="text-gray mb-4" style={{ maxWidth: "470px" }}>
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house.
              </p>
            </div>
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.8s" }}
            >
              <button className="btn btn-link text-dark text-decoration-none p-0">
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "1s" }}
            >
              <div className="accordion" id="faqAccordion">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="accordion-item mb-3"
                    style={{
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                    }}
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${openFAQ !== index ? "collapsed" : ""}`}
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        style={{
                          backgroundColor:
                            openFAQ === index ? "white" : "transparent",
                          border: "none",
                          boxShadow:
                            openFAQ === index
                              ? "0 20px 40px rgba(57, 20, 0, 0.1)"
                              : "none",
                        }}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${openFAQ === index ? "show" : ""}`}
                    >
                      <div className="accordion-body text-gray">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
