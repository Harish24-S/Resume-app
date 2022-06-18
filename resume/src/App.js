import './App.css';
import Homepage from './Components/Homepage/Homepage.js';
import Navbar from './Components/Navbar/Navbar.js';

// Portfolio Website
/* 1) NavBar 2) Homepage 3) Tech Stack 4) Experience 5) Projects*/

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
