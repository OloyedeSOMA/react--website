import image12 from '../assets/image 12.png';
import './ContactSection.css';
const ContactSection=()=>{
    return(
        <>
        <div id="contactSection">
            <div className="contactForm">
                <h2>Contact Us</h2>
                <form>
                    <div>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Phone Number"/>
                    </div>
                    
                    <div>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Interested In"/>
                    </div>
                    
                    <textarea name="message" id="message">message</textarea>
                </form>
                <div className="contactButton">
                    <button>SEND EMAIL →</button>
                </div>
            </div>
            <div className="contactImgDiv">
                <img src={image12}  />
            </div>

            
        </div>
            
            
        </>
    );
};
export default ContactSection;