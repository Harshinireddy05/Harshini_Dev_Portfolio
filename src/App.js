import './App.css';
import NavBar from './NavBar.js';
import { Route, Switch } from 'react-router-dom';
import About from './Components/About/About.js'
import Home from './Home.js';
import Skills from './Components/Skills/Skills.js';
import Education from './Components/Education/Education.js';
import Projects from './Components/Projects/Projects.js';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} /> 
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
      </div>
      {/* <div className="content">
        <Typing 
          text={[
            "a Developer",
            "a Freelancer",
            "a Tech Geek"
          ]}
          typingSpeed={100}
          deletingSpeed={50}
        />
      </div> */}
    </div>
  );
}

export default App;