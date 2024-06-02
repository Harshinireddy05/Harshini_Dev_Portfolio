import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = [
    {
      title: 'Languages & Databases',
      skills: [
        { name: 'Java', image: require("../Assets/java.png") }, // Assuming image paths are correct
        { name: 'Python', image: require("../Assets/python.png") },
        { name: 'MySQL', image: require("../Assets/mysql.png") },
        { name: 'JS', image: require("../Assets/js.png") },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      skills: [
        { name: 'React', image: require("../Assets/react.png") },
      ],
    },
    // ... other skill categories
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <p>I love to learn new things and experiment with new technologies.</p>
         {skillsData.map((skillCategory) => (
           <div className="skill-category" key={skillCategory.title}>
             <h3>{skillCategory.title}</h3>
             {skillCategory.skills.map((skill) => (
               <div className="skill" key={skill.name || skill}>
                 {skill.image && (
                   <img
                     src={skill.image}
                     alt={skill.name || skill}
                     className="skill-icon"
                   />
                 )}
                 <span className="skill-name">{skill.name}</span>
               </div>
             ))}
           </div>
         ))}
    </section>
  );
}

export default Skills;

