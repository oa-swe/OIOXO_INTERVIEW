/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="dark-section py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.2s" }}
            >
              <img
                src="https://c.animaapp.com/mezij5e40fFcHq/img/pic-1.png"
                alt="About"
                className="img-fluid rounded"
                style={{ maxWidth: "566px" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.4s" }}
            >
              <p className="section-title text-orange mb-3">ABOUT WEBFLOW</p>
            </div>
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.6s" }}
            >
              <h2 className="display-2 mb-4 text-white">
                Website Without
                <br />
                The Dev Time
              </h2>
            </div>
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.8s" }}
            >
              <h5 className="mb-3 text-white">Provides a full service range</h5>
              <p className="text-light-gray mb-4" style={{ maxWidth: "470px" }}>
                {` Ability to put themselves in the merchant's shoes. It is meant
                to partner on the long run, and work as an extension of the
                merchant's team.`}
              </p>
            </div>
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "1s" }}
            >
              <button className="btn btn-primary-purple">ABOUT WEBFLOW</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
