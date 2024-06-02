import React from 'react';
import './index.css';
import Typing from './Typing.js';

function Home() {
    return (
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


    );
}
export default Home;