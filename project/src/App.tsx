import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { ExitIntentPopup } from './components/ExitIntent/ExitIntentPopup';
import { useExitIntent } from './hooks/useExitIntent';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const showExitIntent = useExitIntent();
  const [isExitIntentOpen, setIsExitIntentOpen] = useState(false);

  // Update exit intent state when hook triggers
  React.useEffect(() => {
    if (showExitIntent) {
      setIsExitIntentOpen(true);
    }
  }, [showExitIntent]);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      
      <ExitIntentPopup 
        isOpen={isExitIntentOpen}
        onClose={() => setIsExitIntentOpen(false)}
      />
    </div>
  );
};

export default App;