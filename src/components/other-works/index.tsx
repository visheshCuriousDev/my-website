import "./other-works.css";
import { otherWorksSections } from "../../utility/constants";
import { useState } from "react";
import Work from "../work";
import { OtherWorksData } from "../../utility/data/my-projects";

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
            data-aos-delay="100">
            <ul id="works-flters">
              <li
                className={
                  selectedFilter === otherWorksSections.all
                    ? "filter-active"
                    : ""
                }
                onClick={() => filterSelect(otherWorksSections.all)}>
                All
              </li>
              <li
                className={
                  selectedFilter === otherWorksSections.article
                    ? "filter-active"
                    : ""
                }
                onClick={() => filterSelect(otherWorksSections.article)}>
                Articles
              </li>
              <li
                className={
                  selectedFilter === otherWorksSections.openSource
                    ? "filter-active"
                    : ""
                }
                onClick={() => filterSelect(otherWorksSections.openSource)}>
                Opensource
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row works-container"
          data-aos="fade-up"
          data-aos-delay="200">
          { selectedFilter === otherWorksSections.all ||
            selectedFilter === otherWorksSections.openSource ? 
            <>
              {OtherWorksData.opensource.map(opensource => 
                <div key={opensource.title} className="col-lg-4 col-md-4 works-item filter-article">
                  <Work workData={opensource}/>
                </div>
              )}
            </> : ""
          }
          { selectedFilter === otherWorksSections.all ||
            selectedFilter === otherWorksSections.article ? 
            <>
              {OtherWorksData.article.map(article => 
                <div key={article.title} className="col-lg-4 col-md-4 works-item filter-article">
                  <Work workData={article}/>
                </div>
              )}
            </> : ""
          }
          { selectedFilter === otherWorksSections.all ? 
            <>
              {OtherWorksData.all.map(all => 
                <div key={all.title} className="col-lg-4 col-md-4 works-item filter-article">
                  <Work workData={all}/>
                </div>
              )}
            </> : ""
          }
        </div>
      </div>
    </section>
  );
};

export default OtherWorks;
