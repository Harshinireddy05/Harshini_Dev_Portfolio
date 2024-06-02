import { useEffect,useState } from "react";
import './Typing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMailchimp } from '@fortawesome/free-brands-svg-icons';

function Typing({ text,typingSpeed=100,deleteSpeed=50,duration=1000}) {

    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setisdeleting] = useState(false);
    const [index, setIndex] = useState(0);
    useEffect(() => {
      const handleTyping = () => {
          if (text && text.length > 0) { 
            if (!isDeleting) {
              if (displayedText.length < text[index].length) {
                setDisplayedText((prev) => prev + text[index].charAt(displayedText.length));
              } else {
                setTimeout(() => setisdeleting(true), duration)
              } 
            } else {
              if (displayedText.length > 0) {
                 setDisplayedText((prev) => prev.slice(0,-1))
              } else {
                setisdeleting(false);
                setIndex((prev) => (prev + 1) % text.length)
               }
            }
          }
        };
        
  
      const timeout = setTimeout(
        handleTyping,
        isDeleting ? deleteSpeed : typingSpeed
      );
  
      return () => clearTimeout(timeout); 
    },[displayedText, isDeleting, index, text, typingSpeed, deleteSpeed, duration] )
    return (
      <div className="typing-effect">
        <div className="centered-text">
            <h1>Harshini Reddy</h1>
            I'm {displayedText}
            <span className="caret">|</span>
        </div>
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/harshini-reddy-nellore-4540ba285/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} color="white" style={{ fontSize: '40px' }}/>
          </a>
          <a href="https://github.com/your-github-username">
            <FontAwesomeIcon icon={faGithub} color="white" style={{ fontSize: '40px' }}/>
          </a>
          <a href="mailto:your-email@example.com">
            <FontAwesomeIcon icon={faMailchimp} color="white" style={{ fontSize: '40px' }}/>
          </a>
        </div>
      </div>
    )
  }

export default Typing;