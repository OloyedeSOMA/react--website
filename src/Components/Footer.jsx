
import footerLogo from '../assets/footerLogo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footerContainer">
      <div className="footerSection logo">
        <img src={footerLogo}  />
        
      </div>

      <div className="footerSection">
        <h4>Information</h4>
        <ul>
          <li>Main</li>
          <li>Gallery</li>
          <li>Projects</li>
          <li>Certifications</li>
          <li>Contacts</li>
        </ul>
      </div>

      <div className="footerSection">
        <h4>Contacts</h4>
        <ul>
          <li>📍 1234 Sample Street<br />Austin Texas 78704</li>
          <li>📞 512.333.2222</li>
          <li>✉️ sampleemail@gmail.com</li>
        </ul>
      </div>

      <div className="footerSection">
        <h4>Social Media</h4>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-pinterest-p"></i></a>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
