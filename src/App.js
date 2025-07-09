import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MemoriesPage from './pages/MemoriesPage';
import ReasonsPage from './pages/ReasonsPage';
import SpecialPage from './pages/SpecialPage';

function App() {
  const [showHiddenMessage, setShowHiddenMessage] = useState(false);

  return (
    <Router>
      <div className="app">
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/reasons" className="nav-link">Reasons</Link>
          <Link to="/memories" className="nav-link">Memories</Link>
          <Link to="/special" className="nav-link">Special</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage showHiddenMessage={showHiddenMessage} setShowHiddenMessage={setShowHiddenMessage} />} />
          <Route path="/reasons" element={<ReasonsPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/special" element={<SpecialPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;