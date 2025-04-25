import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();


    const pIva = '04581990241';
    const emailAddress = 'info@codened.it';
    const phoneNumber = '+393505872341';
    const whatsappNumber = '+393505872341';
    // ---------------------------------

    const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;
    const phoneLink = `tel:${phoneNumber}`;

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <footer className="site-footer">
            <div className="container footer-container">


                <div className="footer-left">
                    <Link to="/" className="footer-logo" onClick={handleLogoClick}>
                        CodeNed
                    </Link>
                    <p className="footer-piva">P.IVA: {pIva}</p>
                </div>


                <div className="footer-center">
                    <div className="footer-policy-links">
                        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                        <span className="footer-link-separator">|</span>
                        <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
                    </div>
                    <p className="footer-copyright">
                        © {currentYear} CodeNed. Tutti i diritti riservati.
                    </p>
                </div>


                <div className="footer-right">
                    <a href={`mailto:${emailAddress}`} className="footer-contact-link" title={emailAddress}>
                        <FaEnvelope aria-hidden="true" />
                    </a>
                    <a href={phoneLink} className="footer-contact-link" title={phoneNumber}>
                        <FaPhoneAlt aria-hidden="true" />
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-contact-link" title="WhatsApp">
                        <FaWhatsapp aria-hidden="true" />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;