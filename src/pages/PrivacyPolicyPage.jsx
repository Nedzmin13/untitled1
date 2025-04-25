import React from 'react';
import './LegalPages.css';
import {Helmet} from "react-helmet-async";

const PrivacyPolicyPage = () => {
    return (
        <div className="legal-page-container container">

            <Helmet>
                <title>Privacy Policy - CodeNed</title>
                <meta name="description" content="Leggi la Privacy Policy di CodeNed per capire come vengono trattati i tuoi dati personali quando visiti il sito o ci contatti." />
                 <meta name="robots" content="noindex, follow" />
            </Helmet>

            <h2 className="legal-page-title">Privacy Policy</h2>
            <p className="last-updated">Ultimo aggiornamento: 22/04/2025</p>

            <p>
                Benvenuto/a su CodeNed. La tua privacy è importante per noi. Questa Privacy Policy spiega quali dati personali raccogliamo e come li utilizziamo.
            </p>

            <h3>Titolare del Trattamento dei Dati</h3>
            <p>
                CodeNed<br />
                Malo (VI), Italia<br />
                P.IVA: 04581990241<br />
                info@codened.it
            </p>

            <h3>Tipologie di Dati raccolti</h3>
            <p>
                Fra i Dati Personali raccolti da questo Sito Web, in modo autonomo o tramite terze parti, ci sono: Cookie; Dati di utilizzo; nome; email; numero di telefono (se richiesti tramite form di contatto).
            </p>
            <p>
                I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l'uso di questo Sito Web.
                Se non diversamente specificato, tutti i Dati richiesti da questo Sito Web sono obbligatori. Se l’Utente rifiuta di comunicarli, potrebbe essere impossibile per questo Sito Web fornire il Servizio.
            </p>


            <h3>Modalità e luogo del trattamento dei Dati raccolti</h3>
            <h4>Modalità di trattamento</h4>
            <p>
                Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
                Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
            </p>
            <h4>Base giuridica del trattamento</h4>
            <p>
                Il Titolare tratta Dati Personali relativi all’Utente in caso sussista una delle seguenti condizioni:
                <ul>
                    <li>l’Utente ha prestato il consenso per una o più finalità specifiche;</li>
                    <li>il trattamento è necessario all'esecuzione di un contratto con l’Utente e/o all'esecuzione di misure precontrattuali;</li>
                    <li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;</li>
                    <li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.</li>
                </ul>
            </p>
            <h4>Luogo</h4>
            <p>
                I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare.
                I Dati Personali dell’Utente potrebbero essere trasferiti in un paese diverso da quello in cui l’Utente si trova.
            </p>
            <h4>Periodo di conservazione</h4>
            <p>
                I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti.
            </p>

            <h3>Finalità del Trattamento dei Dati raccolti</h3>
            <p>
                I Dati dell’Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, così come per le seguenti finalità: Statistica, Contattare l'Utente, Visualizzazione di contenuti da piattaforme esterne.
            </p>

            <h3>Diritti dell’Utente</h3>
            <p>
                Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, l’Utente ha il diritto di:
                <ul>
                    <li>revocare il consenso in ogni momento.</li>
                    <li>opporsi al trattamento dei propri Dati.</li>
                    <li>accedere ai propri Dati.</li>
                    <li>verificare e chiedere la rettificazione.</li>
                    <li>ottenere la limitazione del trattamento.</li>
                    <li>ottenere la cancellazione o rimozione dei propri Dati Personali.</li>
                    <li>ricevere i propri Dati o farli trasferire ad altro titolare.</li>
                    <li>proporre reclamo all'autorità di controllo.</li>
                </ul>
            </p>
            <h4>Come esercitare i diritti</h4>
            <p>
                Per esercitare i diritti dell’Utente, gli Utenti possono indirizzare una richiesta agli estremi di contatto del Titolare indicati in questo documento. Le richieste sono depositate a titolo gratuito e evase dal Titolare nel più breve tempo possibile, in ogni caso entro un mese.
            </p>


            <h3>Cookie Policy</h3>
            <p>
                Questo Sito Web fa utilizzo di Cookie. Per saperne di più e per prendere visione dell’informativa dettagliata, l’Utente può consultare la <a href="/cookie-policy">Cookie Policy</a>.
            </p>

            <h3>Modifiche a questa privacy policy</h3>
            <p>
                Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento dandone informazione agli Utenti su questa pagina [...]. Si prega dunque di consultare regolarmente questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
            </p>


        </div>
    );
};

export default PrivacyPolicyPage;