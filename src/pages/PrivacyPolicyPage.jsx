// src/pages/PrivacyPolicyPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usa Link per coerenza
import { Helmet } from 'react-helmet-async';
import PageHeaderLogo from '../components/PageHeaderLogo.jsx';
import './LegalPages.css';

const PrivacyPolicyPage = () => {
    return (
        <div className="legal-page-container container">
            <Helmet>
                <title>Privacy Policy - CodeNed</title>
                <meta name="description" content="Leggi la Privacy Policy di CodeNed per capire quali dati personali vengono raccolti, per quali finalità e come vengono trattati per proteggere la tua privacy." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <PageHeaderLogo />
            <h2 className="legal-page-title">Privacy Policy</h2>
            <p className="last-updated">Ultimo aggiornamento: 27 Luglio 2025</p>

            <p>
                La presente Privacy Policy descrive le modalità di gestione del sito web <strong>codened.it</strong> (di seguito "Sito") in riferimento al trattamento dei dati personali degli utenti che lo consultano. Questa informativa è resa ai sensi del Regolamento UE 2016/679 (GDPR).
            </p>

            <h3>1. Titolare del Trattamento dei Dati</h3>
            <p>
                Il Titolare del trattamento è <strong>CodeNed</strong> di Nedzmin Cancar.<br />
                Sede: Malo (VI), Italia<br />
                P.IVA: 04581990241<br />
                Email di contatto: <strong>info@codened.it</strong>
            </p>

            <h3>2. Tipologie di Dati Raccolti</h3>
            <p>
                Il Titolare raccoglie le seguenti tipologie di dati:
            </p>
            <ul>
                <li>
                    <strong>Dati forniti volontariamente dall’utente:</strong> Nome, indirizzo email e qualsiasi altro dato personale fornito volontariamente tramite il modulo di contatto per richiedere informazioni o preventivi. Il conferimento di questi dati è necessario per permetterci di rispondere alle tue richieste.
                </li>
                <li>
                    <strong>Dati di Navigazione:</strong> I sistemi informatici acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP anonimizzati, tipo di browser, orari di accesso). Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime e per garantire la sicurezza del sito.
                </li>
                <li>
                    <strong>Cookie e Dati di Utilizzo:</strong> Dati raccolti tramite cookie, in particolare quelli di Google Analytics, come descritto in dettaglio nella nostra <Link to="/cookie-policy">Cookie Policy</Link>.
                </li>
            </ul>

            <h3>3. Finalità e Base Giuridica del Trattamento</h3>
            <p>
                I dati personali sono trattati per le seguenti finalità:
            </p>
            <ul>
                <li>
                    <strong>Rispondere alle tue richieste:</strong> Utilizziamo i dati inviati tramite il form di contatto per rispondere alle tue domande o per elaborare preventivi. La base giuridica è l'esecuzione di misure precontrattuali richieste dall'interessato (art. 6.1.b GDPR).
                </li>
                <li>
                    <strong>Analisi Statistiche:</strong> Utilizziamo i dati di navigazione e i cookie analitici per monitorare e analizzare il traffico web in forma aggregata e anonima, al fine di migliorare i nostri servizi. La base giuridica è il tuo consenso esplicito per i cookie non essenziali (art. 6.1.a GDPR).
                </li>
                <li>
                    <strong>Sicurezza del Sito:</strong> Utilizziamo i dati di navigazione per garantire la sicurezza del sito e prevenire frodi o abusi. La base giuridica è il legittimo interesse del Titolare (art. 6.1.f GDPR).
                </li>
            </ul>

            <h3>4. Modalità di Trattamento, Luogo e Periodo di Conservazione</h3>
            <p>
                Il trattamento avviene mediante strumenti informatici e telematici con logiche strettamente correlate alle finalità stesse e in modo da garantire la sicurezza e la riservatezza dei dati. I dati sono trattati presso la sede operativa del Titolare. I dati forniti tramite form di contatto verranno conservati per il tempo necessario a evadere la richiesta e successivamente per un periodo massimo di 24 mesi per scopi amministrativi, salvo diversi obblighi di legge. Per i dati raccolti tramite cookie, si rimanda alla <Link to="/cookie-policy">Cookie Policy</Link>.
            </p>

            <h3>5. Diritti dell’Utente</h3>
            <p>
                In qualità di interessato, hai il diritto di chiedere al Titolare l'accesso ai tuoi dati, la rettifica, la cancellazione, la limitazione del trattamento, di opporti al trattamento e il diritto alla portabilità dei dati. Hai inoltre il diritto di revocare il consenso in qualsiasi momento e di proporre reclamo all'autorità di controllo (Garante per la Protezione dei Dati Personali).
            </p>
            <p>
                Per esercitare i tuoi diritti, puoi inviare una richiesta all'indirizzo email del Titolare: <strong>info@codened.it</strong>.
            </p>

            <h3>6. Modifiche a questa Privacy Policy</h3>
            <p>
                Il Titolare si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento. La versione aggiornata sarà sempre disponibile su questa pagina, con indicazione della data di ultima modifica.
            </p>
        </div>
    );
};
export default PrivacyPolicyPage;