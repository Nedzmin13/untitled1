// src/pages/CookiePolicyPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './LegalPages.css';
import PageHeaderLogo from "./PageHeaderLogo.jsx";

const CookiePolicyPage = () => {
    return (
        <div className="legal-page-container container">
            <Helmet>
                <title>Cookie Policy - CodeNed</title>
                <meta name="description" content="Informativa estesa sui cookie utilizzati dal sito web codened.it, incluse informazioni su cookie tecnici e Google Analytics, e su come gestire le tue preferenze." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <PageHeaderLogo />
            <h2 className="legal-page-title">Cookie Policy</h2>
            <p className="last-updated">Ultimo aggiornamento: 27 Luglio 2025</p>

            <h3>Cosa sono i Cookie</h3>
            <p>
                I cookie sono piccoli file di testo che i siti web visitati inviano al dispositivo dell'utente (computer, smartphone, tablet), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Questa informativa descrive quali tipologie di cookie utilizziamo su questo sito.
            </p>

            <h3>Tipologie di Cookie Utilizzati</h3>

            <h4>Cookie Tecnici (Strettamente Necessari)</h4>
            <p>
                Questi cookie sono essenziali per il corretto funzionamento del sito e per la navigazione. Ad esempio, memorizzano le preferenze relative al consenso cookie. Poiché sono indispensabili per la funzionalità del sito, non richiedono il tuo consenso preventivo e sono sempre attivi.
            </p>

            <h4>Cookie Analitici/Statistici di Terze Parti</h4>
            <p>
                Per analizzare il traffico e migliorare il nostro sito, utilizziamo Google Analytics 4 (GA4), un servizio di Google Ireland Limited. Questo servizio ci fornisce statistiche aggregate e anonime sull'utilizzo del sito web da parte dei visitatori.
            </p>
            <p>
                Per proteggere la tua privacy, abbiamo implementato la funzione di **anonimizzazione dell'indirizzo IP**, che impedisce a Google di identificare la tua posizione esatta. L'installazione di questi cookie avviene solo ed esclusivamente **previo tuo esplicito consenso**, che puoi fornire tramite il banner informativo presente alla prima visita del sito e che puoi modificare in qualsiasi momento.
            </p>
            <p>
                Per maggiori informazioni, puoi consultare l'<a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer">informativa sulla privacy di Google</a>. Per disattivare Google Analytics, puoi installare il componente aggiuntivo del browser fornito da Google: <a href="https://tools.google.com/dlpage/gaoptout?hl=it" target="_blank" rel="noopener noreferrer">Opt-out Browser Add-on</a>.
            </p>

            <h4>Cookie di Profilazione e Marketing</h4>
            <p>
                Attualmente, questo sito **non utilizza** cookie di profilazione o marketing per inviare pubblicità personalizzata.
            </p>

            <h3>Gestione dei Cookie</h3>
            <p>
                Oltre a gestire il consenso tramite il nostro banner cookie, puoi modificare le impostazioni dei cookie direttamente dal tuo browser. Disabilitando i cookie tecnici potresti compromettere la corretta navigazione del sito. Puoi trovare le istruzioni per i browser più comuni ai seguenti link:
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a>,
                <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>,
                <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a>.
            </p>

            <h3>Titolare del Trattamento</h3>
            <p>
                Per qualsiasi domanda relativa a questa policy, puoi contattare il Titolare del Trattamento, <strong>CodeNed</strong> di Nedzmin Cancar, all'indirizzo email: <strong>info@codened.it</strong>. Per maggiori dettagli sul trattamento dei dati personali, consulta la nostra <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
        </div>
    );
};

export default CookiePolicyPage;