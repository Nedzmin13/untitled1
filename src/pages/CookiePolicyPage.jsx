import React from 'react';
import './LegalPages.css';
import {Helmet} from "react-helmet-async";

const CookiePolicyPage = () => {
    return (
        <div className="legal-page-container container">

            <Helmet>
                <title>Cookie Policy - CodeNed</title>
                <meta name="description" content="Consulta la Cookie Policy di CodeNed per informazioni sui tipi di cookie utilizzati su questo sito web e su come gestire le tue preferenze." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <h2 className="legal-page-title">Cookie Policy</h2>
            <p className="last-updated">Ultimo aggiornamento: 25/04/2025</p>

            <p>
                Questa Cookie Policy spiega cosa sono i cookie e come li utilizziamo su questo sito web ("il Sito"). Ti invitiamo a leggere questa policy per capire quali tipi di cookie utilizziamo, le informazioni che raccogliamo tramite i cookie e come tali informazioni vengono utilizzate.
            </p>

            <h3>Cosa sono i Cookie</h3>
            <p>
                I cookie sono piccoli file di testo che i siti visitati dall'utente inviano e registrano sul suo computer o dispositivo mobile, per essere poi ritrasmessi agli stessi siti alla successiva visita. Grazie ai cookie un sito ricorda le azioni e preferenze dell’utente (come, ad esempio, i dati di login, la lingua prescelta, le dimensioni dei caratteri, altre impostazioni di visualizzazione, ecc.) in modo che non debbano essere indicate nuovamente quando l’utente torni a visitare detto sito o navighi da una pagina all’altra di esso.
            </p>

            <h3>Tipologie di Cookie utilizzati da questo Sito</h3>
            <p>Questo Sito utilizza le seguenti tipologie di cookie:</p>
            <ul>
                <li>
                    <strong>Cookie tecnici o strettamente necessari:</strong> Questi cookie sono essenziali per consentire la navigazione nel Sito e l'utilizzo delle sue funzionalità. Non raccolgono informazioni sull'utente che potrebbero essere utilizzate per fini di marketing né ricordano dove l'utente ha navigato in Internet. Questa categoria di cookie non può essere disabilitata.
                </li>
                <li>
                    <strong>Cookie analitici/statistici:</strong> Questi cookie raccolgono informazioni su come gli utenti utilizzano il Sito, ad esempio quali pagine vengono visitate più spesso e se gli utenti ricevono messaggi di errore dalle pagine web. Questi cookie non raccolgono informazioni che identificano un visitatore. Tutte le informazioni raccolte tramite questi cookie sono aggregate e quindi anonime. Vengono utilizzati solo per migliorare il funzionamento del Sito.

                </li>
                <li>
                    <strong>Cookie di funzionalità:</strong> Questi cookie consentono al Sito di ricordare le scelte effettuate dall'utente (come nome utente, lingua o regione geografica) e forniscono funzionalità avanzate personalizzate. Le informazioni raccolte da questi cookie possono essere rese anonime e non sono in grado di tracciare l'attività di navigazione dell'utente su altri siti web.
                </li>
                <li>
                    <strong>Cookie di profilazione/marketing (SE PRESENTI):</strong> Questi cookie sono utilizzati per tracciare i visitatori attraverso i siti web. L'intenzione è quella di visualizzare annunci pertinenti e coinvolgenti per il singolo utente e quindi di maggior valore per editori e inserzionisti terzi.
                </li>
            </ul>

            <h3>Cookie di Terze Parti</h3>
            <p>
                Durante la navigazione sul Sito, l'utente potrebbe ricevere sul suo dispositivo anche cookie inviati da siti o da web server diversi (c.d. "terze parti"). Ciò accade perché sul Sito possono essere presenti elementi come, ad esempio, immagini, mappe, suoni, specifici link a pagine web di altri domini che risiedono su server diversi da quello sul quale si trova la pagina richiesta.
            </p>

            <h3>Gestione dei Cookie</h3>
            <p>
                L'utente può gestire le preferenze relative ai Cookie direttamente all'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato, incluso il Cookie in cui venga eventualmente salvato il consenso all'installazione di Cookie da parte di questo sito. È importante notare che disabilitando tutti i Cookie, il funzionamento di questo Sito potrebbe essere compromesso.
            </p>
            <p>
                L'Utente può trovare informazioni su come gestire i Cookie nel suo browser ai seguenti indirizzi: Google Chrome, Mozilla Firefox, Apple Safari e Microsoft Internet Explorer / Edge.
            </p>
            <p>
                Per quanto riguarda i Cookie installati da terze parti, l'Utente può inoltre gestire le proprie impostazioni e revocare il consenso visitando il relativo link di opt out (qualora disponibile), utilizzando gli strumenti descritti nella privacy policy della terza parte o contattando direttamente la stessa.
            </p>


            <h3>Titolare del Trattamento</h3>
            <p>
                CodeNed<br />
                info@codened.it
            </p>

            <p>
                Data l'oggettiva complessità legata all'identificazione delle tecnologie basate sui Cookie, l'Utente è invitato a contattare il Titolare qualora volesse ricevere qualunque approfondimento relativo all'utilizzo dei Cookie stessi tramite questo Sito Web.
            </p>
        </div>
    );
};

export default CookiePolicyPage;