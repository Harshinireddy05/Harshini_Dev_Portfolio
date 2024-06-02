import './App.css';
import NavBar from './NavBar.js';
import Typing from './Typing.js';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <div className="content">
        <Typing 
          text={[
            "a Developer",
            "a Freelancer",
            "a Tech Geek"
          ]}
          typingSpeed={100}
          deletingSpeed={50}
        />
      </div>
    </div>
  );
}

export default App;
