import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import APropos from './pages/APropos';
import Filieres from './pages/Filieres';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import Preinscription from './pages/Preinscription';

/**
 * Composant App - Configuration du routing
 * Routes disponibles :
 * - /              → Home
 * - /a-propos      → APropos
 * - /filieres      → Filieres
 * - /actualites    → Actualites
 * - /contact       → Contact
 * - /preinscription → Preinscription
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <Navbar />
        
        {/* Contenu principal */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/filieres" element={<Filieres />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/preinscription" element={<Preinscription />} />
          </Routes>
        </div>
        
        {/* Pied de page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
