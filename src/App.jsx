import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import IntroPage from './pages/IntroPage';
import PokedexPage from './pages/PokedexPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Intro</Link> | <Link to="/pokedex">Pokedex</Link> |
      </nav>

      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
