import React from 'react';
import './machines.css'; 
import image5 from './assets/image5.jpeg';  
import image6 from './assets/image6.jpeg';
import image7 from './assets/image6.jpeg';
import image8 from './assets/image8.png';
import image9 from './assets/image9.png';
import image10 from './assets/image10.png';
function Machines() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>

      <h1>Our Machines</h1>
      <p>Some Pictures of Machines</p>
      <img src={image5} alt="First Image" className="machine-image" />
<img src={image6} alt="Second Image" className="machine-image" />
<img src={image7} alt="Third Image" className="machine-image" />
<img src={image8} alt="Second Image" className="machine-image" />
<img src={image9} alt="Second Image" className="machine-image" />
<img src={image10} alt="Second Image" className="machine-image" />

    </div>
  );
}

export default Machines;
