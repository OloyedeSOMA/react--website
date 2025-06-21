import { Link, Links } from 'react-router-dom';
import navLogo from '../assets/navLogo.png';
import './NavBar.css';
const NavBar=()=>{
    return(
        <>
            <div id="nav">
                <ul>
                    <li><img src={navLogo}/></li>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/photogallery">GALLERY</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                </ul>
            </div>
        </>
    );
};
export default NavBar;