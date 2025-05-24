import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsentBanner.css'; // Creeremo questo CSS

// Funzione per caricare lo script di Google Analytics (da chiamare DOPO il consenso)
const loadGAScript = () => {
    const gaMeasurementId = 'G-1GSGQEX7N1'; // ID Corretto

    // Il controllo precedente è stato rimosso/modificato perché causava l'uscita prematura.
    // Se l'ID fosse un placeholder generico o vuoto, qui potremmo inserire un controllo:
    if (gaMeasurementId === 'G-XXXXXXXXXX' || !gaMeasurementId || gaMeasurementId.trim() === '') {
        console.error('ERRORE CRITICO: Google Analytics Measurement ID non configurato correttamente nel banner!');
        return;
    }

    // Controlla se lo script è già stato caricato
    if (document.getElementById('ga-gtag-script')) {
        console.log('GA script già caricato (dal banner).');
        // Se è già caricato, potresti voler assicurarti che sia configurato correttamente,
        // ma per ora, assumiamo che se esiste, è perché lo abbiamo caricato noi prima.
        // O se è stato caricato da index.html, questo banner non dovrebbe provare a ricaricarlo.
        // Questo dipende da DOVE vuoi che GA sia caricato.
        return;
    }

    console.log(`Caricamento script GA4 con ID: ${gaMeasurementId} dal banner...`);
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
    console.log('GA configurato dal banner.');
  `;
    document.head.appendChild(script2);
};

const removeGAScript = () => {
    console.log('Rimozione script GA4 (se presenti)...');
    const script1 = document.getElementById('ga-gtag-script');
    const script2 = document.getElementById('ga-config-script');
    if (script1) script1.remove();
    if (script2) script2.remove();
}

const CookieConsentBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [consentGiven, setConsentGiven] = useState(null);

    useEffect(() => {
        const consentStatus = localStorage.getItem('cookie_consent_status');
        if (consentStatus === null) {
            // Nessuna scelta precedente, mostra il banner
            setIsVisible(true);
            setConsentGiven(null);
        } else {
            const accepted = consentStatus === 'accepted';
            setConsentGiven(accepted);
            setIsVisible(false);
            if (accepted) {
                loadGAScript();
            }
        }
    }, []);

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
        removeGAScript();
    };

    if (!isVisible && consentGiven !== null) {
        return null;
    }
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