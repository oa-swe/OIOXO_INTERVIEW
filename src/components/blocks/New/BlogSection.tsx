import React from "react";

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      image: "https://c.animaapp.com/mezij5e40fFcHq/img/bitmap-13.png",
      category: "Stories",
      title: "Agency is a business you hire to outsource",
      date: "5 Nov, 2021",
    },
    {
      image: "https://c.animaapp.com/mezij5e40fFcHq/img/bitmap-14.png",
      category: "Design",
      title: "Outsource your digital marketing efforts",
      date: "29 Oct, 2021",
    },
    {
      image: "https://c.animaapp.com/mezij5e40fFcHq/img/bitmap-15.png",
      category: "Marketing",
      title: "Your business with a variety of digital",
      date: "21 Oct, 2021",
    },
  ];

  return (
    <section id="blog" className="dark-section py-5">
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="section-title text-orange mb-3">OUR BLOG</p>
            </div>
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.4s" }}
            >
              <h2 className="display-2 text-white">
                Latest Blog
                <br />
                Articles
              </h2>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div
              className={`fade-in visible`}
              style={{ transitionDelay: "0.6s" }}
            >
              <button className="btn btn-outline-light">DISCOVER ALL</button>
            </div>
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div
                className={`fade-in visible`}
                style={{ transitionDelay: `${0.8 + index * 0.2}s` }}
              >
                <article className="h-100">
                  <div className="portfolio-item mb-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="text-white">
                    <h6 className="text-orange mb-2">{post.category}</h6>
                    <h5 className="mb-3">{post.title}</h5>
                    <small className="text-light-gray">{post.date}</small>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
