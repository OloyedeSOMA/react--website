import { Link } from 'react-router-dom';
import image5 from '../assets/image 5.png';
import image15 from '../assets/image 15.png';
import image16 from '../assets/image 16.png';
import image17 from '../assets/image 17.png';
import image18 from '../assets/image 18.png';
import './MissionSection.css';


const MissionSection = () => {
  return (
    <>
        <div id="mission-section">
        <h2 className="mission-title">Main Focus/Mission Statement</h2>
        <div className="mission-items">
            <div className="mission-item">
            <span className="mission-number">1</span>
            <p className="mission-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Sed efficitur, lectus et facilisis placerat.
            </p>
            </div>
            <div className="mission-item">
            <span className="mission-number">2</span>
            <p className="mission-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
            </p>
            </div>
        </div>
        </div>

        
    <section className="projects-section">
      <h2 className="section-title">Our Projects</h2>
        <div className="projects-grid">
            <div className="top-row">
                <div className="project-item">
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

export default MissionSection;
