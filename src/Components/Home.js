import './Home.css'; 
import logo from './assets/logo.png';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';

function Home() {
  return (
    <div className="home-container">
      
      {/* Logo Section */}
      <div className="logo-section">
        <div className="left-logo">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
        <div className="right-logos">
          <img src={logo2} alt="logo" className="logo-image" />
          <img src={logo1} alt="logo" className="logo-image" />
        </div>
      </div>

      {/* Other Home Content */}
      <div className="home-content">
        <center><h1 className="animated-heading">Asian Industries</h1></center>
        <p>Asian Industries</p>
        <p>Specialist of</p>
        <p>CNC Water Jet cutting machine</p>
      </div>

    </div>
  );
}

export default Home;
