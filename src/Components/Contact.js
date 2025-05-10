import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div style={{ backgroundColor: '#FFD700', minHeight: '100vh', padding: '40px 20px', color: '#000' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '36px' }}>Contact Us</h1>

      {/* Contact Info */}
      <div style={{ textAlign: 'center', fontSize: '18px', marginBottom: '40px' }}>
        <p><strong>📞 Call Us:</strong> <a href="tel:+919711261226" style={{ color: '#000' }}>9711261226</a>, <a href="tel:+917011174808" style={{ color: '#000' }}>7011174808</a></p>
        <p><strong>📧 Email:</strong> <a href="mailto:asianindustries126@gmail.com" style={{ color: '#000' }}>asianindustries126@gmail.com</a></p>
      </div>

      {/* Motto */}
      <div style={{ textAlign: 'center', fontSize: '20px', fontStyle: 'italic', marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '10px' }}>📌 Our Motto</h2>
        <p>To get customer satisfaction through providing them best quality products & services at competitive prices with on-time delivery.</p>
      </div>

      {/* Company Info */}
      <div style={{ fontSize: '18px', lineHeight: '1.7', padding: '0 10px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🏭 Asian Industries</h2>
        <p><strong>Registered Office & Units:</strong></p>
        <p><strong>Plant-I:</strong> Plot No. 126, Mohna Road, Near Lokdeep Public School, Ballabgarh, Faridabad</p>
        <p><strong>Plant-II:</strong> Plot No. 4, Mathura Road, Seekri, Ballabgarh, 121004, Faridabad (Haryana, India)</p>
        <p><strong>Email:</strong> <a href="mailto:asianindustries126@gmail.com" style={{ color: '#000' }}>asianindustries126@gmail.com</a></p>
        <p><strong>Mob.:</strong> <a href="tel:+919711261226" style={{ color: '#000' }}>+91-97112 61226</a>, <a href="tel:+917011174808" style={{ color: '#000' }}>+91-70111 74808</a></p>
      </div>
    </div>
  );
}

export default Contact;
