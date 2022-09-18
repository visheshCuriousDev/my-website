import React from "react";

const OtherWorks = () => {
  return (
    <section id="works" className="works section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>works</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="works-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row works-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 works-item filter-app">
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default OtherWorks;
