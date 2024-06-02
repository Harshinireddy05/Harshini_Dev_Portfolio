import React from 'react';
import './Education.css'; // Assuming the file is in the same directory

function Education() {
  return (
    <section className="education">
      {/* Title */}
      <h2>Education</h2>

      {/* Education Container (Boxes) */}
      <div className="education-container">
        {/* School Section */}
        <div className="school-box">
          <h3>Vignan World One School</h3>
          <h4>Visakhapatnam</h4>
          <p>Marks: 96%</p>
        </div>

        {/* College Section */}
        <div className="college-box">
          <h3>BITS Pilani (Batch of 2027)</h3>
          <p>CGPA: 8.7</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
