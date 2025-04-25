import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import './Services.css';
import sitowebpersonale from '../assets/sito-web.png'
import sitoecommerce from '../assets/e-commerce.png';
import webappImg from '../assets/webApp.jpg'
import digitalMarketing from '../assets/digitalMarketing.jpg'
import manutenzioneWeb from '../assets/manutenzioneWeb.jpg'
import ottimizzazione from '../assets/ottimizzazione.png'

const Services = () => {

    const projects = [
        {
            id: 1,
            title: 'Sito Portfolio Personale/Vetrina', // Titolo leggermente più specifico
            description: 'Creo siti web vetrina e portfolio professionali, mettendo in risalto le tue competenze o i tuoi prodotti. Design moderno, navigazione intuitiva e completamente responsive per un impatto visivo ottimale su ogni dispositivo.', // Descrizione Espansa
            image: sitowebpersonale
        },
        {
            id: 2,
            title: 'E-commerce (Custom & Piattaforme)', // Titolo più chiaro
            description: 'Sviluppo soluzioni e-commerce su misura (con tecnologie come Java/Spring o React) o configuro e personalizzo piattaforme popolari come Shopify e WooCommerce. Gestione catalogo, pagamenti sicuri e ottimizzazione per le conversioni.', // Descrizione Espansa
            image: sitoecommerce
        },
        {
            id: 3,
            title: 'Web App Gestionali Custom', // Titolo più specifico
            description: 'Progetto e realizzo applicazioni web personalizzate per automatizzare i processi interni della tua azienda. Dalla gestione clienti (CRM) alla reportistica avanzata, creo lo strumento su misura per le tue esigenze operative.', // Descrizione Espansa
            image: webappImg
        },
        {
            id: 4,
            title: 'Digital Marketing Strategico', // Titolo più ampio
            description: 'Definisco e implemento strategie di marketing digitale per aumentare la tua visibilità online. Include ottimizzazione SEO, campagne advertising (Google/Social), gestione social media e creazione di landing page efficaci.', // Descrizione Espansa e più accurata
            image: digitalMarketing
        },
        {
            id: 5,
            title: 'Manutenzione e Aggiornamenti',
            description: 'Assicura che il tuo sito web o la tua applicazione rimanga sicura, performante e aggiornata nel tempo con piani di manutenzione personalizzati, backup regolari e interventi tempestivi.', // Leggermente espansa
            image: manutenzioneWeb
        },
        {
            id: 6,
            title: 'Ottimizzazione Performance & SEO', // Titolo unificato
            description: 'Migliora la velocità di caricamento, l\'accessibilità e l\'indicizzazione tecnica del tuo sito esistente. Analisi dettagliate e interventi mirati per una migliore user experience e posizionamento sui motori di ricerca.', // Leggermente espansa
            image: ottimizzazione
        }
    ];

    return (
        <section id="servizi" className="services-section">
            <div className="container">
                <h2 className="services-title">I Miei Servizi</h2>
                <h3 className="services-subtitle">Sviluppo Web & Marketing Strategico per il Tuo Successo</h3>
                <div className="services-grid">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;