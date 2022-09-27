import "./works.css";
import { otherWorksSections } from "../../utility/constants";
import { useState } from "react";

const OtherWorks = () => {
  let [selectedFilter, setSelectedFilter] = useState(otherWorksSections.all);
  const filterSelect = (filterType: string) => {
    setSelectedFilter(filterType);
  };

  return (
    <section id="works" className="works section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Other works</h2>
          <p>
            Additional works other than professional project
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul id="works-flters">
              <li
                className={
                  selectedFilter === otherWorksSections.all
                    ? "filter-active"
                    : ""
                }
                onClick={() => filterSelect(otherWorksSections.all)}
              >
                All
              </li>
              <li
                data-filter=".filter-app"
                className={
                  selectedFilter === otherWorksSections.app
                    ? "filter-active"
                    : ""
                }
                onClick={() => filterSelect(otherWorksSections.app)}
              >
                App
              </li>
              <li
                data-filter=".filter-card"
                className={
                  selectedFilter === otherWorksSections.card
                    ? "filter-active"
                    : ""
                }
                onClick={() => filterSelect(otherWorksSections.card)}
              >
                Card
              </li>
              <li
                data-filter=".filter-web"
                className={
                  selectedFilter === otherWorksSections.web
                    ? "filter-active"
                    : ""
                }
                onClick={() => filterSelect(otherWorksSections.web)}
              >
                Web
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row works-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          { selectedFilter === otherWorksSections.all ? 
            <div className="col-lg-4 col-md-6 works-item filter-all">
              All
            </div> : ""
          }
          { selectedFilter === otherWorksSections.app ? 
            <div className="col-lg-4 col-md-6 works-item filter-app">
              app
            </div> : ""
          }
          { selectedFilter === otherWorksSections.card ? 
            <div className="col-lg-4 col-md-6 works-item filter-card">
              card
            </div> : ""
          }
          { selectedFilter === otherWorksSections.web ? 
            <div className="col-lg-4 col-md-6 works-item filter-web">
              web
            </div> : ""
          }
        </div>
      </div>
    </section>
  );
};

export default OtherWorks;
