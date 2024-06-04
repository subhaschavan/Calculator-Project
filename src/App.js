import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Calculators from './Components/Calculators';

function App() {
  return (
    <>
     <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/calculators"> Calculators </Link></li>
          </ul>
        </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculators" element={<Calculators />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
