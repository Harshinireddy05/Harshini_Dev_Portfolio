import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar(){
    return(
        <nav className='nav-bar'>
            <div className="logo">
                <span className="logo-text">HR</span>
                <hr className="logo-line" />
            </div>
            <ul>
                <li className='nav-item'><Link to='/'>Home</Link></li>
                <li className='nav-item'><Link to='/about'>About</Link></li>
                <li className='nav-item'><a href="/skills">Skills</a></li>
                <li className='nav-item'><a href="/education">Education</a></li>
                <li className='nav-item'><a href="/projects">Projects</a></li>
                <li className='nav-item'><a href="https://drive.google.com/file/d/13kaPsdMNDsM4LV9g7m5-E5PTildp-yYf/view" target='_blank'>Resume</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
