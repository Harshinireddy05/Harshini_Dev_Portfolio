import './NavBar.css';

function NavBar(){
    return(
        <nav className='nav-bar'>
            <div className="logo">
                <span className="logo-text">HR</span>
                <hr className="logo-line" />
            </div>
            <ul>
                <li className='nav-item'><a href="/">Home</a></li>
                <li className='nav-item'><a href="/about">About</a></li>
                <li className='nav-item'><a href="/skills">Skills</a></li>
                <li className='nav-item'><a href="/education">Education</a></li>
                <li className='nav-item'><a href="/experience">Experience</a></li>
                <li className='nav-item'><a href="/projects">Projects</a></li>
                <li className='nav-item'><a href="/resume">Resume</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;