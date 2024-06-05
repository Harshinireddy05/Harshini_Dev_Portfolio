import React from 'react';
import './About.css';
import profileImage from '../Assets/Image.jpg';

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        {/* Add your personal description here */}
        As a computer science student at Scaler School of Technology, I'm passionate about using code to solve problems and create innovative solutions.  Scaler's focus on cutting-edge tech like AI and data science aligns perfectly with my goals to become a skilled developer. I'm excited to learn from industry experts and push my abilities through coding challenges and projects.
      </p>
      {/* Add more sections for hobbies, goals, etc. if needed */}
      <div className="about-image">
        <img src = {profileImage} alt="Your Profile" />
      </div>
    </section>
  );
}

export default About;
