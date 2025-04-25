import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import './PortfolioPage.css';



import {BsCodeSlash} from "react-icons/bs";
import PageHeaderLogo from "./PageHeaderLogo.jsx"; // Immagine di fallback
import progetto1 from '../assets/portfolio/pr1.jpg';
import progettoAppPreventivi from '../assets/portfolio/appPreventivi.jpg';
import progetto2 from '../assets/portfolio/pr2.jpg';
import progetto4 from '../assets/portfolio/pr4.jpg';
import progetto5 from '../assets/portfolio/pr5.jpg';
import progetto6 from '../assets/portfolio/pr6.jpg';
import {Helmet} from "react-helmet-async";


const PortfolioPage = () => {


    const portfolioProjects = [
        {
            id: 'p1',
            title: 'Sito Vetrina Aziendale',
            description: 'Sviluppato un sito web vetrina moderno e completamente responsive per un\'azienda locale. ' +
                'Il progetto include un design personalizzato, ottimizzazione per tutti i dispositivi (mobile, tablet e desktop), ' +
                'navigazione intuitiva e contenuti ottimizzati per il SEO. ' +
                'Focus particolare su un\'interfaccia utente curata (UI) e un\'esperienza utente fluida (UX). ' +
                'Il sito è facilmente aggiornabile ed è stato pensato per valorizzare i servizi e la professionalità del cliente.',
            image: progetto1,
            technologies: ['Responsive Design', 'HTML', 'CSS', 'JavaScript'],
            liveUrl: null,
            repoUrl: null
        },
        {
            id: 'p2',
            title: ' App Android Preventivi Rapidi',
            description: 'Sviluppata un\'app Android nativa (Kotlin/Java) per la creazione rapida e offline di preventivi professionali in PDF. ' +
                'L\'app permette di pre-impostare i dati aziendali e generare preventivi al volo inserendo solo i dati del cliente e i dettagli del lavoro. ' +
                'Soluzione efficiente, senza abbonamenti o pubblicità, pensata per artigiani e professionisti.',
            image: progettoAppPreventivi,
            technologies: ['Android', 'Java', 'Kotlin', 'PDF'],
            liveUrl: null,
            repoUrl: null
        },
        {
            id: 'p3',
            title: 'Software Desktop Java',
            description: 'Applicazione desktop sviluppata in Java (con Maven) pensata per piccole aziende e artigiani. ' +
                'Il software funziona completamente offline, senza necessità di connessione internet, e consente di generare in pochi clic preventivi professionali in formato PDF. ' +
                'Interfaccia semplice e intuitiva, ideale per chi cerca uno strumento veloce, leggero e senza costi nascosti o pubblicità. ' +
                'Perfetto per attività che desiderano creare e archiviare preventivi in modo efficiente e indipendente.',
            image: progetto2,
            technologies: ['Java', 'Maven', 'PDF'],
            liveUrl: null,
            repoUrl: null
        },
        {
            id: 'p4',
            title: ' E-commerce Shopify',
            description: 'Realizzazione e configurazione completa di un negozio online sulla piattaforma Shopify per il brand Danerka. ' +
                'Il progetto ha incluso la personalizzazione del tema per rispecchiare l\'identità del marchio, ' +
                'l\'impostazione del catalogo prodotti, la configurazione dei metodi di pagamento e spedizione. ' +
                'Particolare attenzione è stata data al responsive design per un\'esperienza d\'acquisto ottimale su mobile e desktop, ' +
                'e all\'ottimizzazione SEO base per migliorare la visibilità sui motori di ricerca.',
            image: progetto4,
            technologies: ['Shopify', 'Liquid', 'Responsive Design', 'SEO Base', 'E-commerce'],
            liveUrl: null,
            repoUrl: null
        },

        {
            id: 'p5',
            title: 'Piattaforma E-commerce Custom ',
            description: 'Sviluppo di una piattaforma e-commerce completa e personalizzata utilizzando lo stack Java Enterprise Edition. ' +
                'Il backend, costruito con Spring e Hibernate per la gestione dei dati su MySQL, offre funzionalità robuste per catalogo prodotti, carrello, ordini e gestione utenti.' +
                ' L\'interfaccia frontend (JSP/HTML/CSS/Bootstrap/JS) è stata progettata per essere funzionale e intuitiva per l\'utente finale.',
            image: progetto5,
            technologies: ['Java', 'Spring', 'Hibernate', 'JPA', 'JSP', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
            liveUrl: null,
            repoUrl: null
        },

        {
            id: 'p6',
            title: 'Sistema Gestione Presenze',
            description: 'Applicazione web sviluppata con Java e Spring Boot per la gestione delle presenze dei dipendenti. ' +
                'Il sistema permette agli amministratori di definire turni (giorno/sera/notte), registrare orari di entrata/uscita, ' +
                'monitorare lo stato delle presenze e generare report giornalieri/mensili. ' +
                'Include un sistema di autenticazione sicuro e un\'interfaccia utente chiara (realizzata con JSP/Thymeleaf)' +
                ' per una facile consultazione e gestione dei dati su database MySQL.',
            image: progetto6,
            technologies: ['Java', 'Spring Boot', 'MySQL', 'JSP', 'HTML', 'CSS', 'Autenticazione'],
            liveUrl: null,
            repoUrl: null
        },

    ];


    return (
        <div className="portfolio-page-container container">

            <Helmet>
                <title>Portfolio Lavori - CodeNed | Sviluppo Web & App</title>
                <meta name="description" content="Scopri i progetti web e le applicazioni realizzate da CodeNed: siti vetrina, e-commerce, dashboard, esperimenti 3D. Vicenza e Veneto." />
            </Helmet>

                <PageHeaderLogo/>

            <h2 className="portfolio-title">Il Mio Portfolio</h2>
            <p className="portfolio-intro">
                Una selezione dei progetti a cui ho lavorato, dimostrando competenze nello sviluppo web e nel design.
            </p>

            <div className="portfolio-grid">
                {portfolioProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        liveUrl={project.liveUrl}
                        repoUrl={project.repoUrl}
                    />
                ))}
            </div>

        </div>
    );
};

export default PortfolioPage;