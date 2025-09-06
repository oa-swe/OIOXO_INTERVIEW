import React from "react";

const FeaturesSection = () => {
  return (
    <section
      id="fox"
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        id="bat"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          id="owl"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0 -0.75rem",
          }}
        >
          {/* Left Column */}
          <div
            id="cat"
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "0 0.75rem",
              boxSizing: "border-box",
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}
          >
            <div
              id="dog"
              style={{
                opacity: 1,
                transition: "opacity 0.5s ease",
                transitionDelay: "0.2s",
              }}
            >
              <p
                id="ant"
                style={{
                  color: "#FF7425",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                FEATURES
              </p>
            </div>
            <div
              id="bee"
              style={{
                opacity: 1,
                transition: "opacity 0.5s ease",
                transitionDelay: "0.4s",
              }}
            >
              <h2
                id="cow"
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "700",
                  lineHeight: "1.1",
                  marginBottom: "1.5rem",
                  color: "white",
                }}
              >
                Custom
                <br />
                Web Design
              </h2>
            </div>
            <div
              id="pig"
              style={{
                opacity: 1,
                transition: "opacity 0.5s ease",
                transitionDelay: "0.6s",
              }}
            >
              <button
                id="rat"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "inherit",
                  fontFamily: "inherit",
                }}
              >
                Read More
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div
            id="emu"
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "0 0.75rem",
              boxSizing: "border-box",
            }}
          >
            <div
              id="jay"
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "0 -0.5rem",
                height: "100%",
              }}
            >
              {/* Top Left Card */}
              <div
                id="ram"
                style={{
                  flex: "0 0 50%",
                  maxWidth: "50%",
                  padding: "1rem 2rem",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                  background: "white",
                  borderRadius: "1em",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  height: "100%",
                  opacity: 1,
                  transition: "opacity 0.5s ease",
                  transitionDelay: "0.8s",
                }}
              >
                <div
                  id="koi"
                  style={{
                    background: "orange",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "red",
                    borderRadius: "2em",
                    display: "flex",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    id="eel"
                    src="https://c.animaapp.com/mezij5e40fFcHq/img/combined-shape-4.svg"
                    alt="Professional"
                    width="32"
                    height="32"
                  />
                </div>
                <h4
                  id="ape"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "0.75rem",
                    color: "#1E1E2E",
                  }}
                >
                  Professional
                </h4>
                <p
                  id="gnu"
                  style={{
                    color: "#6B7280",
                    margin: 0,
                    lineHeight: "1.5",
                  }}
                >
                  Full service range including technical skills, design.
                </p>
              </div>

              {/* Top Right Card */}
              <div
                id="cod"
                style={{
                  flex: "0 0 50%",
                  maxWidth: "50%",
                  padding: "1rem 0.5rem",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "flex-end",
                  borderRadius: "1em",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  height: "100%",
                }}
              >
                <div
                  id="fly"
                  style={{
                    opacity: 1,
                    transition: "opacity 0.5s ease",
                    transitionDelay: "1s",
                  }}
                >
                  <div
                    id="moth"
                    style={{
                      padding: "1.5rem",
                      border: "1px solid #3a3c56",
                      borderRadius: "6px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <h4
                      id="lynx"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        marginBottom: "0.75rem",
                        color: "white",
                      }}
                    >
                      Accessibility
                    </h4>
                    <p
                      id="newt"
                      style={{
                        color: "#D1D5DB",
                        margin: 0,
                        lineHeight: "1.5",
                      }}
                    >
                      Business understanding, ability to put themselves.
                    </p>
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

export default FeaturesSection;
