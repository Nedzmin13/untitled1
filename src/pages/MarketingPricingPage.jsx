import React from 'react';
import PricingPlanCard from '../pages/PricingPlanCard.jsx';
import CallToAction from '../components/CallToAction.jsx';
import './PricingPages.css';
import {Helmet} from "react-helmet-async";

const MarketingPricingPage = () => {
    const marketingPricingCategories = [
        {
            id: 'mkt-social-org',
            title: 'Facebook & Instagram Marketing – Organico',
            options: [
                { name: 'Base', price: '70€ / mese', features: ['10 Post al mese', 'Pianificazione Editoriale', 'Creazione Grafiche Base', 'Report Mensile'] },
                { name: 'Intermedio', price: '120€ / mese', features: ['20 Post al mese','Pianificazione Avanzata', 'Grafiche/Video Brevi', 'Interazione Community', 'Report Mensile'] },
                { name: 'Avanzato', price: '500€ / mese', features: ['Post Illimitati','Strategia Contenuti Completa', 'Format Diversificati', 'Analisi Performance Approfondita', 'Report Dettagliato'] },
            ],
        },
        {
            id: 'mkt-social-adv',
            title: 'Facebook & Instagram Marketing – Sponsorizzato',
            options: [ // <-- DATI REALI QUI
                { name: 'Start', price: 'da 160€ / mese', features: ['10 Post Organici','10 Post Sponsorizzato','Setup Campagne Base', 'Targeting Iniziale', '10 Post Organici', 'Report ADV'] },
                { name: 'Growth', price: 'da 250€ / mese', features: ['20 Post Organici','10 Post Sponsorizzato','Ottimizzazione Campagne', 'Targeting Avanzato', '20 Post Organici', 'Report ADV + Organico'] },
                { name: 'Performance', price: 'da 600€ / mese', features: ['Illimitati Post Organici','20 Post Sponsorizzato','Gestione Budget Elevato', 'A/B Testing Continuo', 'Post Organici Illimitati', 'Report Completo & Consulenza'] },
            ],
        },
        {
            id: 'mkt-local',
            title: 'Foto & Video + Social Marketing',
            options: [ // <-- DATI REALI QUI
                { name: 'Base', details: 'Include 20 post (10 ADV)', price: 'da 400€ / mese', features: ['Shooting Foto/Video (1 Visita/mese)', '20 Post Mensili (10 ADV)', 'Gestione Community Base'] },
                { name: 'Intermedio', details: 'Include 30 post (20 ADV)', price: 'da 650€ / mese', features: ['Shooting Foto/Video (2 Visite/mese)', '30 Post Mensili (20 ADV)', 'Gestione Community Attiva'] },
                { name: 'Completo', details: 'Include post illimitati (30 ADV)', price: 'da 1300€ / mese', features: ['Shooting Foto/Video (5 Visite/mese)', 'Post Illimitati (30 ADV)', 'Strategia Contenuti Personalizzata'] },
            ],
        }
    ];

    return (
        <div className="pricing-page-container container">

            <Helmet>
                <title>Prezzi Servizi Marketing Digitale - CodeNed</title>
                <meta name="description" content="Listino prezzi per servizi di marketing su Facebook e Instagram (organico e sponsorizzato), SEO, advertising e gestione social per aziende a Vicenza." />
            </Helmet>


            <h2 className="pricing-page-title">Listino Prezzi: Digital Marketing</h2>
            <p className="pricing-page-intro">
                Strategie mirate per far crescere la tua visibilità e raggiungere i tuoi obiettivi di business online.
            </p>

            {marketingPricingCategories.map((category) => (
                <div key={category.id} className="pricing-category-section">
                    <h3 className="pricing-category-title">{category.title}</h3>
                    {category.subtitle && <p className="pricing-category-subtitle">{category.subtitle}</p>}

                    {/* === MAPPA LE OPZIONI PER CREARE LE CARD === */}
                    <div className="pricing-plan-row">
                        {category.options && category.options.length > 0 ? (
                            category.options.map((option, optionIndex) => (
                                <PricingPlanCard
                                    key={option.name + optionIndex}
                                    name={option.name}
                                    price={option.price}
                                    details={option.details}
                                    features={option.features}

                                />
                            ))
                        ) : (
                            <p>Dettagli non disponibili per questa categoria.</p>
                        )}
                    </div>

                </div>
            ))}

            <CallToAction />
        </div>
    );
};
export default MarketingPricingPage;