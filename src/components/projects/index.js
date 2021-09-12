import './projects.css'
import {useEffect, useState} from 'react';
const ProjectList = require('../../utility/data/my-projects.json');

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        setSelectedProject(ProjectList[parseInt((ProjectList.length / 2) - 1)]);
    }, [])

    const changeProject = (project) => {
        setSelectedProject(project);
    }

    return (
        <div className="project-list-container">
            <div className="official-projects">
                <h3> Official Projects </h3>
                <div className="project-list-circle">
                    <ul className="project-circle">
                        {ProjectList.map(project => {
                            return (
                                <li onClick={() => changeProject(project)}> {project.name} </li>
                            )
                        })}
                    </ul>
                    {/* If nay project is sselected */}
                    {selectedProject ? 
                        <div className="project-details">
                            <div className="name"> {selectedProject.name} </div>
                            <div className="sideline">
                                <div className="duration"> - {selectedProject.duration} </div>
                                <div className="tags">
                                    {selectedProject.tags && selectedProject.tags.map(tag => {
                                        return (
                                            <label className="tag"> #{tag} </label>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="description"> {selectedProject.description} </div>
                            <ul className="highlights">
                                {selectedProject.highlights && selectedProject.highlights.map(desc => {
                                    return (
                                        <li> {desc} </li>
                                    )
                                })}
                            </ul>
                        </div>
                     : ''}
                </div>
            </div>
        </div>
    )
}

export default Projects;
