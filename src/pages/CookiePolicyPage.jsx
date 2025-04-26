// src/pages/CookiePolicyPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeaderLogo from '../pages/PageHeaderLogo.jsx';
import '../pages/LegalPages.css';

const CookiePolicyPage = () => {
    return (
        <div className="legal-page-container container">
            <Helmet>
                <title>Cookie Policy - CodeNed</title>
                <meta name="description" content="Consulta la Cookie Policy di CodeNed per informazioni sui tipi di cookie utilizzati (tecnici, Google Analytics) e su come gestire le tue preferenze." />
            </Helmet>

            <PageHeaderLogo />
            <h2 className="legal-page-title">Cookie Policy</h2>
            <p className="last-updated">Ultimo aggiornamento: 26/04/2025</p>

            <p>Questa Cookie Policy spiega...</p>
            <h3>Cosa sono i Cookie</h3>
            <p>I cookie sono piccoli file di testo...</p>


            <h3>Tipologie di Cookie utilizzati da questo Sito</h3>
            <p>Questo Sito Web utilizza le seguenti tipologie di cookie:</p>
            <ul>
                <li>
                    <strong>Cookie tecnici o strettamente necessari:</strong> Questi cookie sono essenziali per il corretto funzionamento del sito e per permettere la navigazione. Non richiedono il consenso preventivo dell'utente.
                </li>

                <li>
                    <strong>Cookie Analitici/Statistici (di Terze Parti - Google Analytics):</strong>
                    <p>
                        Utilizziamo Google Analytics 4 (GA4), un servizio di analisi web fornito da Google Ireland Limited ("Google"), per raccogliere informazioni aggregate e anonime sull'utilizzo del nostro sito web da parte dei visitatori (es. pagine visitate, durata della visita, provenienza geografica approssimativa). Questo ci aiuta a capire come viene utilizzato il sito e a migliorarlo.
                    </p>
                    <p>
                        Google Analytics utilizza i propri cookie. Per garantire una maggiore privacy degli utenti, abbiamo attivato la funzione di **anonimizzazione dell'indirizzo IP**, che maschera parte dell'indirizzo IP prima che venga memorizzato da Google. Le informazioni generate dai cookie sono trasmesse a Google e depositate presso i suoi server, anche negli Stati Uniti. Google utilizza queste informazioni per tracciare ed esaminare l'utilizzo del sito, compilare report e fornire altri servizi relativi alle attività del sito e all'utilizzo di Internet. Google potrebbe trasferire queste informazioni a terzi ove ciò sia imposto dalla legge o laddove tali terzi trattino le suddette informazioni per conto di Google.
                    </p>
                    <p>
                        Questi cookie vengono attivati solo **previo consenso** dell'utente (espresso tramite il cookie banner o un meccanismo equivalente).
                        Per ulteriori dettagli, è possibile consultare l'<a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer">informativa sulla privacy di Google</a> e le <a href="https://policies.google.com/technologies/partner-sites?hl=it" target="_blank" rel="noopener noreferrer">modalità di utilizzo dei dati da parte di Google</a>.
                    </p>
                    <p>
                        È possibile disabilitare l'azione di Google Analytics installando sul proprio browser il componente aggiuntivo di opt-out fornito da Google: <a href="https://tools.google.com/dlpage/gaoptout?hl=it" target="_blank" rel="noopener noreferrer">Componente aggiuntivo del browser per la disattivazione di Google Analytics</a>.
                    </p>
                </li>
                {/* ======================================== */}


                <li>
                    <strong>Cookie di funzionalità (SE PRESENTI):</strong>
                    <em>(Attualmente, questo sito non utilizza cookie di funzionalità noti che richiedano menzione specifica.)</em>
                </li>
                <li>
                    <strong>Cookie di profilazione/marketing (SE PRESENTI):</strong>
                    <em>(Attualmente, questo sito non utilizza direttamente cookie di profilazione o marketing.)</em>
                </li>
            </ul>

            <h3>Cookie di Terze Parti</h3>
            <p>
                Oltre a Google Analytics menzionato sopra, potrebbero essere presenti sul sito elementi incorporati (es. video YouTube, mappe Google Maps, social plugin) che possono installare cookie di terze parti. Si invita a consultare le informative di tali terze parti.
            </p>


            <h3>Gestione dei Cookie</h3>
            <p>L'utente può gestire le preferenze...</p>
            <p>Puoi trovare informazioni...</p>
            <p>Per maggiori informazioni...</p>


            <h3>Titolare del Trattamento</h3>
            <p>CodeNed<br />info@codened.it</p>

            <p>Data l'oggettiva complessità...</p>

        </div>
    );
};

export default CookiePolicyPage;