import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="dark-section py-5">
      <div className="container py-5">
        {/* Newsletter Section */}
        <div className="row align-items-center border-bottom border-secondary mb-5 py-4">
          <div className="col-lg-3">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h4 className="mb-0 text-white">Newsletter</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.4s" }}
            >
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control me-3"
                  placeholder="Your email"
                  required
                />
              </form>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.6s" }}
            >
              <button className="btn btn-outline-light w-100">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="row">
          <div className="col-lg-6">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.8s" }}
            >
              <div className="rounded bg-white p-5">
                <h4 className="mb-4">Get In Touch</h4>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary-orange">
                    SUBMIT NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "1s" }}
            >
              <p className="section-title text-orange mb-3">CONTACT</p>
              <h2 className="display-2 mb-4 text-white">Contact Me</h2>
              <p className="text-light-gray mb-5" style={{ maxWidth: "470px" }}>
                A digital agency is a business you hire to outsource your
                digital marketing efforts, instead of handling in-house.
              </p>

              <div className="space-y-4">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="service-icon me-4"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "24px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>📍</span>
                  </div>
                  <h6 className="mb-0 text-white">
                    2247 Lunetta Street, TX 76301
                  </h6>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="service-icon me-4"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "24px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>📞</span>
                  </div>
                  <h6 className="mb-0 text-white">+1 (234) 567-89-00</h6>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="service-icon me-4"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "24px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>✉️</span>
                  </div>
                  <h6 className="mb-0 text-white">info@agency.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "1.2s" }}
            >
              <div className="bg-primary-orange rounded p-5 text-center text-white">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h2 className="display-3 mb-3">
                      Help To Build Your Dream Project
                    </h2>
                    <p className="lead mb-4">
                      A digital agency is a business you hire to outsource your
                      digital marketing efforts, instead of handling in-house.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <button className="btn btn-light btn-lg">
                      CONTACT NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
