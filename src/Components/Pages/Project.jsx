import NavBar from '../GlobalComponents/NavBar';
import Footer from '../GlobalComponents/Footer';
import './projectsList.css';
import image30 from '../../assets/image 30.png';
import image32 from '../../assets/image 32.png';
import image33 from '../../assets/image 33.png';


const projects = [
  {
    title: 'Sample Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta blandit odio, a pellentesque justo.',
    image: image30,
  },
  {
    title: 'Sample Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula nunc in enim feugiat.',
    image: image32,
  },
  {
    title: 'Sample Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat justo at turpis porttitor.',
    image: image33,
  },
];
const Project =()=>{
    return(
        <>
            <NavBar />
                <section className="projectsSection">
      <h2 className="sectionTitle">
        Our <br/><span>Projects</span>
      </h2>
      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <div className="projectCard" key={index}>
            <div className="projectImage">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="projectContent">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="viewMoreBtn">View More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
            <Footer />
        </>
    );
};
export default Project;




// replace with real images




