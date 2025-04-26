// src/components/CookieConsentBanner.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsentBanner.css'; // Creeremo questo CSS

// Funzione per caricare lo script di Google Analytics (da chiamare DOPO il consenso)
const loadGAScript = () => {
    const gaMeasurementId = 'G-1GSGQEX7N1'; // <-- SOSTITUISCI CON IL TUO ID MISURAZIONE GA4
    if (!gaMeasurementId || gaMeasurementId === 'G-1GSGQEX7N1') {
        console.warn('Google Analytics Measurement ID non impostato.');
        return;
    }

    // Controlla se lo script è già stato caricato
    if (document.getElementById('ga-gtag-script')) {
        console.log('GA script già caricato.');
        return;
    }

    console.log('Caricamento script GA4...');
    const script1 = document.createElement('script');
    script1.id = 'ga-gtag-script'; // Aggiungi ID per controllo
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.id = 'ga-config-script';
    script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaMeasurementId}');
  `;
    document.head.appendChild(script2);
};

// Funzione per rimuovere gli script di Google Analytics (se l'utente rifiuta DOPO aver accettato)
// Nota: Rimuovere lo script non rimuove i cookie già impostati da GA in quella sessione.
// Una soluzione completa richiederebbe la gestione attiva dei cookie.
const removeGAScript = () => {
    console.log('Rimozione script GA4 (se presenti)...');
    const script1 = document.getElementById('ga-gtag-script');
    const script2 = document.getElementById('ga-config-script');
    if (script1) script1.remove();
    if (script2) script2.remove();
    // Qui potresti aggiungere logica per cancellare i cookie _ga* se necessario
}

const CookieConsentBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [consentGiven, setConsentGiven] = useState(null); // null = non scelto, true = accettato, false = rifiutato

    useEffect(() => {
        const consentStatus = localStorage.getItem('cookie_consent_status');
        if (consentStatus === null) {
            // Nessuna scelta precedente, mostra il banner
            setIsVisible(true);
            setConsentGiven(null);
        } else {
            // Scelta già fatta in passato
            const accepted = consentStatus === 'accepted';
            setConsentGiven(accepted);
            setIsVisible(false);
            if (accepted) {
                // Se aveva accettato, carica GA
                loadGAScript();
            }
        }
    }, []); // Esegui solo al mount

    const handleAccept = () => {
        localStorage.setItem('cookie_consent_status', 'accepted');
        setConsentGiven(true);
        setIsVisible(false);
        loadGAScript(); // Carica GA
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent_status', 'declined');
        setConsentGiven(false);
        setIsVisible(false);
        removeGAScript(); // Prova a rimuovere GA se era stato caricato
        // Qui potresti aggiungere logica per cancellare cookie GA esistenti se necessario
    };

    // Non mostrare nulla se la scelta è già stata fatta e salvata
    if (!isVisible && consentGiven !== null) {
        return null;
    }
    // Se non è visibile e non c'è scelta (raro, durante caricamento iniziale), non mostrare
    if (!isVisible) {
        return null;
    }


    return (
        <div className="cookie-consent-banner">
            <div className="cookie-content">
                <p>
                    Questo sito utilizza cookie tecnici e, con il tuo consenso, cookie analitici (Google Analytics)
                    per migliorare l'esperienza di navigazione e ottenere statistiche anonime.
                    Leggi la nostra <Link to="/cookie-policy">Cookie Policy</Link> per maggiori dettagli.
                </p>
            </div>
            <div className="cookie-actions">
                <button onClick={handleAccept} className="cookie-button accept">Accetta</button>
                <button onClick={handleDecline} className="cookie-button decline">Rifiuta</button>
                {/* <button className="cookie-button settings">Impostazioni</button> */} {/* Opzionale */}
            </div>
        </div>
    );
};

export default CookieConsentBanner;