import './App.css';
import Techstack from './Components/Techstack/Techstack.js'
import Homepage from './Components/Homepage/Homepage.js';
import Navbar from './Components/Navbar/Navbar.js';
import Experience from './Components/Experience/Experience';

// Portfolio Website
/* 1) NavBar 2) Homepage 3) Tech Stack 4) Experience 5) Projects*/

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Homepage/>
      <Techstack/>
      <Experience/>
    </div>
  );
}

export default App;
