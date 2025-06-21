import { Link } from 'react-router-dom';
import image5 from '../assets/image 5.png';
import image15 from '../assets/image 15.png';
import image16 from '../assets/image 16.png';
import image17 from '../assets/image 17.png';
import image18 from '../assets/image 18.png';
import './ProjectSection.css';
const ProjectSection=()=>{
    return(
        <>
            <section className="projects-section">
      <h2 className="section-title">Our Projects</h2>
        <div className="projects-grid">
            <div className="top-row">
                <div className="project-item ">
                    <img src={image5}/>
                    
                </div>
                
                <div className="project-item">
                    <img src={image15}/>
                </div>
            </div>

            <div className="bottom-row">
                <div className="project-item">
                    <img src={image16}/>
                </div>

                <div className="project-item">
                    <img src={image17}/>
                </div>

                <div className="project-item">
                    <img src={image18}/>
                </div>
            </div>

        </div>
      <div className="allProjectsButton">
        <button><Link to="/projects">All Projects →</Link></button>
      </div>
    </section>
        </>
    );
};
export default ProjectSection;