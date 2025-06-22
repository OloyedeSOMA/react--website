import { NavLink} from 'react-router-dom';
import navLogo from '../../assets/navLogo.png';
import './NavBar.css';
const NavBar=()=>{
    return(
        <>
            <div id="nav">
                <ul>
                    <li><img src={navLogo}/></li>
                    <li><NavLink to="/" className={"nav-link"}>HOME</NavLink></li>
                    <li><NavLink to="/photogallery" className={"nav-link"}>GALLERY</NavLink></li>
                    <li><NavLink to="/projects" className={"nav-link"}>PROJECTS</NavLink></li>
                </ul>
            </div>
        </>
    );
};
export default NavBar;