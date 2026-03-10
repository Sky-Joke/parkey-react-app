import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3Provider } from './context/Web3Context.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Marketplace from './pages/Marketplace.jsx';
import Create from './pages/Create.jsx';
import MyTokens from './pages/MyTokens.jsx';

function App() {
  return (
    <Router>
      <Web3Provider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/create" element={<Create />} />
              <Route path="/my-tokens" element={<MyTokens />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Web3Provider>
    </Router>
  );
}

export default App;