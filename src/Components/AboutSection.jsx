import image2 from '../assets/image 2.png';
import image3 from '../assets/image 3.png';
import image4 from '../assets/image 4.png';
import './AboutSection.css';
const AboutSection=()=>{
    return(
        <>
            <div id="aboutContainer">
                <div className="aboutGrid">
                    <img src={image2} />
                    <img src={image3} />
                    <img className="last" src={image4} />
                </div>
                <div className="aboutText">
                    <h2>About</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="aboutButton">
                        <button>READ MORE →</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutSection;