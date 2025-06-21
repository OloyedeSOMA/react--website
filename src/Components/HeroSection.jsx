import image1 from '../assets/image 1.png';


import './HeroSection.css';
const HeroSection=()=>{
    return(
        <>
            <div id="heroContainer">
                <div className="heroText">
                    <span className="firstHeaderText">PROJECT</span><br/>
                    <span className="secondHeaderText">Lorum</span>
                    <div className="Button">
                        <button>←</button>
                    
                        <button>→</button>
                    </div>
                    
                    
                    <div className="heroButton">
                        <button>VIEW PROJECT →</button>
                    </div>
                </div>
                <div className="heroImage">
                    <img src={image1} />
                    
                </div>
                
            </div>
                

            
        </>
    );
}
export default HeroSection;