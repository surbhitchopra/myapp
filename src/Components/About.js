import React from 'react';
import './About.css'; // Optional for custom styling

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1> {/* About Us heading */}

      <div className="quotes">
        <p>"Always Respect Your Customers"</p>
        <p>"Always Work with the Quality & Dedication"</p>
        <p>"Once You Become The Solution Architect, You Will Dominate"</p>
        <p>"Excellency Of Your Work Separates You From the Ordinary Identities"</p>
        <p><strong>– Mr. Raj Kumar Panchal (Proprietor)</strong></p>
      </div>

      <div className="about-content">
        <p>
          Asian Industries has a history in the manufacturing of parts & equipment for OEMs and general industrial machines since 2008.
        </p>

        <p>
          Our main goal is to achieve complete customer satisfaction by supplying products of the highest quality at competitive prices.
        </p>

        <p>
          As a responsible business organization, we are aware of our duties towards society, our clients, and our suppliers. We have embraced Total Quality Management and quality systems from the beginning.
        </p>

        <p>
          All components are inspected at various stages of production using the latest quality control techniques or as per customer requirements. We have trained and experienced manpower for precise tool design, fabrication, machining, and component development.
        </p>

        <h2 className="advantage-heading">Our Advantage</h2>

        <ul className="advantage-list">
            <center>
          <li>Certified Integrated Management System (including ISO)</li>
          <li>Wide range of job work & material processing under one roof</li>
          <li>In-process Control Systems – monitored by skilled professionals</li>
          <li>Separate units for each major discipline</li>
          <li>Fully equipped Tool Room with Batch Identification & Traceability</li>
          <li>Large contingency provisions for reliability</li>
          <li>Quick response for new product development</li>
          <li>All operations handled in-house</li>
          <li>Experienced and dedicated technical team</li>
          <li>Error-proof system for preventing temper brittleness in high tensile materials</li>
          </center>
        </ul>

      
      </div>
    </div>
  );
}

export default About;
