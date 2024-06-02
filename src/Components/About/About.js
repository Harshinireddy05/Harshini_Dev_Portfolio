// import React from 'react';
// import './About.css';
// // import profileImage from './Assets/profile_image.jpeg'; // Replace with your profile image path

// function About() {
//   return (
//     <div className="about-container">
//       <h1>About Me</h1>
//       <div className="about-content">
//         <div className="about-text">
//           <p>
//             I'm [Your Name], a passionate web developer with a keen interest in creating dynamic and beautiful web applications. My background in [Your Background] helps me combine strong technical skills with a creative approach to building user-friendly experiences. I'm constantly learning new technologies and pushing myself to develop innovative solutions for the web. Outside of coding, I enjoy exploring new places, staying updated on tech trends through blogs, and working on personal projects that challenge me to think outside the box.
//           </p>
//         </div>
//         {/* <div className="about-image">
//           <img src={profileImage} alt="Your Profile" />
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>About</h2>
      <p>
        {/* Add your personal description here */}
        This is where you can describe about yourself. The more you describe
        about yourself, the better it is!

        Extra Information about you, like hobbies and your goals.
        Example Paragraph: I am passionate about my work. Because I love
        what I do, I have a steady source of motivation that drives me to do
        my best. In my last job, this passion led me to challenge myself daily
        and learn new skills that helped me to do better work. For example, I
        taught myself how to use Photoshop to improve the quality of our
        photos and graphics. I soon became the go-to person for any design
        needs.
      </p>
      {/* Add more sections for hobbies, goals, etc. if needed */}
    </section>
  );
}

export default About;

