// src/pages/ContactPage.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {FaEnvelope, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import PageHeaderLogo from '../pages/PageHeaderLogo.jsx';
import './ContactPage.css';

const ContactPage = () => {
    // --- DATI DI CONTATTO REALI ---
    const emailAddress = 'info@codened.it';
    const whatsappNumber = '+393505872341';
    const phoneNumber = '+393505872341';


    // --- DATI EMAILJS ---
    const emailJsServiceId = 'service_93qq61s';
    const emailJsTemplateId = 'template_9wwjnuo';
    const emailJsPublicKey = 'NTMaBo_cwsSVp9sSb';
    // --------------------

    // Link calcolati
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
    const phoneLink = `tel:${phoneNumber.replace(/\s/g, '')}`;

    const locationText = 'Malo (VI), Italia';


    // Riferimento al form per EmailJS
    const form = useRef();

    // Stato per i campi del form
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    // Stato per feedback invio form
    const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });

    // Gestore cambiamento input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Gestore invio form
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ submitted: false, error: false, message: 'Invio in corso...' });

        emailjs.sendForm(emailJsServiceId, emailJsTemplateId, form.current, emailJsPublicKey)
            .then(
                (result) => {
                    console.log('EmailJS SUCCESS!', result.status, result.text);
                    setFormStatus({ submitted: true, error: false, message: 'Messaggio inviato con successo! Ti risponderò il prima possibile.' });
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.error('EmailJS FAILED...', error);
                    setFormStatus({ submitted: false, error: true, message: `Errore durante l'invio: ${error.text || 'Riprova più tardi.'}` });
                }
            );
    };

    return (
        <div className="contact-page-container container"> {/* Container + padding pagina */}
            <Helmet>
                <title>Contatti - CodeNed | Richiedi Info o Preventivo</title>
                <meta name="description"
                      content="Contatta CodeNed per informazioni, preventivi gratuiti o per discutere il tuo progetto web o di marketing. Email, telefono, WhatsApp o form online. Malo (Vicenza)."/>
            </Helmet>

            <PageHeaderLogo/> {/* Logo/Icona Pagina */}

            <h2 className="contact-page-title">Mettiti in Contatto</h2>
            <p className="contact-page-intro">
                Hai domande, richieste o vuoi discutere un progetto? Non esitare a contattarmi tramite i canali
                sottostanti o compilando il form.
            </p>

            {/* --- BARRA ICONE CONTATTO CENTRATE --- */}
            <div className="contact-icon-bar">
                <a href={phoneLink} className="contact-icon-link" title={`Chiama ${phoneNumber}`}>
                    <FaPhoneAlt/>
                </a>
                <a href={`mailto:${emailAddress}`} className="contact-icon-link" title={`Email ${emailAddress}`}>
                    <FaEnvelope/>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-icon-link"
                   title="Chatta su WhatsApp">
                    <FaWhatsapp/>
                </a>
            </div>
            {/* ==================================== */}
            <div className="location-info">
                <FaMapMarkerAlt className="location-icon"/>
                <span className="location-text">{locationText}</span>
            </div>

            {/* --- Form di Contatto --- */}
            <div className="contact-form-section">
                <h3>Oppure invia un messaggio diretto:</h3>
                <form ref={form} onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name" // Per EmailJS Template
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Il tuo nome"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email" // Per EmailJS Template
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="La tua email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Messaggio:</label>
                        <textarea
                            id="message"
                            name="message" // Per EmailJS Template
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Scrivi qui il tuo messaggio..."
                        ></textarea>
                    </div>

                    {/* Messaggio di stato */}
                    {formStatus.message && (
                        <p className={`form-status ${formStatus.error ? 'error' : 'success'}`}>
                            {formStatus.message}
                        </p>
                    )}

                    {/* Bottone Submit */}
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={formStatus.message === 'Invio in corso...'}
                    >
                        {formStatus.message === 'Invio in corso...' ? 'Invio...' : 'Invia Messaggio'}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ContactPage;