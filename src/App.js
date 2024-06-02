import './App.css';
import NavBar from './NavBar.js';
import { Route, Switch } from 'react-router-dom';
import About from './Components/About/About.js'
import Home from './Home.js';
import Skills from './Components/Skills/Skills.js';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} /> 
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