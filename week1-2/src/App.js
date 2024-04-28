import './App.css';
import NavBar from './component/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Resume from './Resume';

function App() {
  return (
    <div>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
