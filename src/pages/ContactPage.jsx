import React, { useState, useRef } from 'react';
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import PageHeaderLogo from '../pages/PageHeaderLogo.jsx';
import './ContactPage.css';
import {Helmet} from "react-helmet-async";

const ContactPage = () => {
    const emailAddress = 'info@codened.it';
    const whatsappNumber = '+393505872341';
    const phoneNumber = '+393505872341';
    const locationText = 'Malo (VI), Italia';
    // -------------------------------

    const emailJsServiceId = 'service_93qq61s';
    const emailJsTemplateId = 'template_9wwjnuo';
    const emailJsPublicKey = 'NTMaBo_cwsSVp9sSb';
    // ----------------------------------------------------

    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
    const phoneLink = `tel:${phoneNumber.replace(/\s/g, '')}`;

    const form = useRef();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Previeni comportamento default
        setFormStatus({ submitted: false, error: false, message: 'Invio in corso...' }); // Stato invio

        emailjs.sendForm(
            emailJsServiceId,
            emailJsTemplateId,
            form.current, // Riferimento al form
            emailJsPublicKey
        )
            .then(
                (result) => {
                    console.log('EmailJS SUCCESS!', result.status, result.text);
                    setFormStatus({ submitted: true, error: false, message: 'Messaggio inviato con successo! Ti risponderò il prima possibile.' });
                    setFormData({ name: '', email: '', message: '' });

                    // setTimeout(() => setFormStatus({ submitted: false, error: false, message: '' }), 6000);
                },
                (error) => {
                    console.error('EmailJS FAILED...', error);
                    setFormStatus({ submitted: false, error: true, message: `Errore durante l'invio: ${error.text || 'Riprova più tardi.'}` });
                }
            );
    };

    return (
        <div className="contact-page-container container">

            <Helmet>
                <title>Contatti - CodeNed | Richiedi Info o Preventivo</title>
                <meta name="description" content="Contatta CodeNed per informazioni, preventivi gratuiti o per discutere il tuo progetto web o di marketing. Email, telefono, WhatsApp o form online. Malo (Vicenza)." />
            </Helmet>
            <PageHeaderLogo />

            <h2 className="contact-page-title">Mettiti in Contatto</h2>
            <p className="contact-page-intro">
                Hai domande, richieste o vuoi discutere un progetto? Non esitare a contattarmi tramite i canali
                sottostanti o compilando il form.
            </p>

            <div className="contact-info-section">
                <a href={phoneLink} className="contact-item" title="Chiamami">
                    <FaPhoneAlt className="contact-icon" />
                    <span className="contact-text">{phoneNumber}</span>
                </a>
                <a href={`mailto:${emailAddress}`} className="contact-item" title="Inviami un'email">
                    <FaEnvelope className="contact-icon" />
                    <span className="contact-text">{emailAddress}</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-item"
                   title="Chatta su WhatsApp">
                    <FaWhatsapp className="contact-icon" />
                    <span className="contact-text">WhatsApp</span>
                </a>
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span className="contact-text">{locationText}</span>
                </div>
            </div>

            <div className="contact-form-section">
                <h3>Oppure invia un messaggio diretto:</h3>
                <form ref={form} onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
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
                            name="email"
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
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Scrivi qui il tuo messaggio..."
                        ></textarea>
                    </div>

                    {formStatus.message && (
                        <p className={`form-status ${formStatus.error ? 'error' : 'success'}`}>
                            {formStatus.message}
                        </p>
                    )}

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