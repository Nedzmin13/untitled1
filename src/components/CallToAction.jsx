// src/components/CallToAction.jsx
import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Solo icone Email e WhatsApp
import './CallToAction.css';

const CallToAction = () => {
    // ** SOSTITUISCI CON I TUOI DATI REALI **
    const emailAddress = 'info@codened.it';
    const whatsappNumber = '+393505872341'; // Formato internazionale

    const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;

    return (
        <section id="cta" className="cta-section">
            <div className="container cta-container">
                {/* Titolo Principale */}
                <h2 className="cta-title">Pronto a Iniziare?</h2>

                {/* Testo "Mettiamoci in contatto..." */}
                <p className="cta-subtitle">Mettiamoci in contatto per trasformare la tua idea in realtà.</p>

                {/* Contenitore solo per le icone */}
                <div className="cta-icon-actions">
                    {/* Icona Email Cliccabile */}
                    <a
                        href={`mailto:${emailAddress}`}
                        className="cta-icon-link email-icon"
                        aria-label="Contattami via Email"
                        title="Contattami via Email"
                    >
                        <FaEnvelope />
                    </a>

                    {/* Icona WhatsApp Cliccabile */}
                    <a
                        href={whatsappLink}
                        className="cta-icon-link whatsapp-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contattami su WhatsApp"
                        title="Contattami su WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
                {/* Bottone Preventivo RIMOSSO */}
            </div>
        </section>
    );
};

export default CallToAction;