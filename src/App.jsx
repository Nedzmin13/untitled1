import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import WebPricingPage from './pages/WebPricingPage.jsx';
import MarketingPricingPage from './pages/MarketingPricingPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import WhyChooseMePage from './pages/WhyChooseMePage.jsx';
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/Footer.jsx";
import CookiePolicyPage from "./pages/CookiePolicyPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";

function App() {
    return (
        <Router>
            <>
                <ParticleBackground />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/servizi" element={<ServicesPage />} />
                        <Route path="/servizi/siti-web" element={<WebPricingPage />} />
                        <Route path="/servizi/marketing" element={<MarketingPricingPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/perche-scegliere-me" element={<WhyChooseMePage />} />
                        <Route path="/contatti" element={<ContactPage />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                    </Routes>
                </main>
                <Footer />
            </>
        </Router>
    );
}
export default App;