import "./work.css";
import { OtherWorksPrototype } from "../../utility/data/my-projects";

const Work = ({workData}: {workData: OtherWorksPrototype}) => {

    const openLink = () => {
        window.open(workData.link, "_blank");
    }

    return (
        <div className="work-box" onClick={() => openLink()}>
            <div className="work-content">
                {
                    workData.image.map((img, index) => 
                        <img className={`work-img ${index === 0 ? "zero" : ""}`} src={img} alt="" />
                    )
                }
                <h5 className="work-title">{workData.title}</h5>
                <p className="work-desc">{workData.desc}</p>
                { workData.tags?.map(work => 
                    <span key={work} className="work-tag">#{work} &nbsp;</span>
                  )
                }
            </div>
            <span className="hover-text">Click to open</span>
        </div>
    );
}

export default Work;
