import React from 'react';
import PricingPlanCard from '../pages/PricingPlanCard.jsx';
import CallToAction from '../components/CallToAction.jsx';
import './PricingPages.css';
import {Helmet} from "react-helmet-async";

const WebPricingPage = () => {
    const webPricingCategories = [
        {
            id: 'web-react',
            title: 'Siti Web (React / Next / Tecnologie Moderne)',
            subtitle: 'Include SEO base, dominio e hosting 1° anno.',
            options: [
                { name: 'Sito Vetrina One-Page', details: 'Portfolio o presentazione personale/azienda.', price: 'da 400€', features: ['Design Professionale','Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
                { name: 'Sito Multi-Pagina', details: 'Ideale per piccole imprese (5-10 pagine).', price: 'da 600€', features: ['Fino a 10 Pagine', 'Design Personalizzato','Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
                { name: 'Sito Avanzato', details: 'Per aziende con molte sezioni (+10 pagine).', price: 'da 1000€', features: ['Pagine Illimitate', 'Funzionalità Custom', 'SEO Avanzato (Opz.)', 'Facebook/Instagram Marketing','Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
            ],
        },
        {
            id: 'web-wp',
            title: 'Siti Web con WordPress',
            subtitle: 'Include SEO base, dominio e hosting 1° anno.',
            options: [
                { name: 'Sito Vetrina One-Page', price: 'da 300€', features: ['Tema Premium Adattato','Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
                { name: 'Sito Multi-Pagina', details: 'Ideale per blog, aziende (5-10 pagine).', price: 'da 500€', features: ['Fino a 10 Pagine', 'Blog Integrato',,'Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base' ] },
                { name: 'Sito Avanzato', details: 'Per portali o siti complessi (+10 pagine).', price: 'da 900€', features: ['Pagine Illimitate', 'Plugins su Richiesta', 'Area Riservata (Opz.)', 'Facebook/Instagram Marketing','Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
            ],
        },
        {
            id: 'ecom-custom',
            title: 'E-Commerce Custom (Java / Spring / React)',
            subtitle: 'Include responsive, SEO base, dominio e hosting 1° anno.',
            options: [
                { name: 'Struttura E-commerce', details: 'Senza inserimento prodotti.', price: 'da 1000€', features: ['Catalogo Base', 'Checkout', 'Pagamenti Online','Google Ads ( prezzo da concordare ) *' , 'Design Responsive', 'SEO Base'] },
                { name: 'E-commerce + Prodotti', details: 'Include inserimento prodotti iniziali.', price: 'da 1200€', features: ['Inserimento Prodotti','Design Personalizzato', 'Catalogo Base', 'Checkout + pagamenti online', 'Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
                { name: 'E-commerce Completo', details: 'Gestione avanzata prodotti, clienti, email, ecc.', price: 'da 1600€', features: ['Gestione Prodotti e Clienti','Supporto Email e Spedizioni','Strumenti Marketing','Design Personalizzato', 'Catalogo Base', 'Checkout + pagamenti online', 'Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
            ],
        },
        {
            id: 'ecom-shopify',
            title: 'E-Commerce con Shopify',
            subtitle: 'Dominio 1° anno, SEO base.',
            options: [
                { name: 'Setup Negozio', details:'Senza inserimento prodotti.', price: 'da 500€', features: ['Configurazione Tema', 'Setup Pagamenti', 'Setup Spedizioni','Google Ads ( prezzo da concordare ) *', 'Ottimizzazione Schede', 'Setup Collezioni' , 'Design Responsive', 'SEO Base' ] },
                { name: 'Negozio + Prodotti', details:'Include inserimento prodotti iniziali.', price: 'da 750€', features: ['Inserimento Prodotti', 'Configurazione Tema', 'Setup Pagamenti', 'Setup Spedizioni','Google Ads ( prezzo da concordare ) *', 'Ottimizzazione Schede', 'Setup Collezioni', 'Design Responsive', 'SEO Base' ] },
                { name: 'Shopify Completo', details:'Gestione avanzata, promozioni, email.', price: 'da 1500€', features: ['Gestione Vendite','Gestione Clienti','Automazioni Marketing', 'Supporto Email e Spedizioni','Reportistica', 'Configurazione Tema', 'Setup Pagamenti', 'Setup Spedizioni','Google Ads ( prezzo da concordare ) *', 'Ottimizzazione Schede', 'Setup Collezioni', 'Design Responsive', 'SEO Base'] },
            ]
        },
        {
            id: 'ecom-wp',
            title: 'E-Commerce con WordPress (WooCommerce)',
            subtitle: 'Dominio 1° anno, SEO base e hosting 1° anno.',
            options: [
                { name: 'Setup E-commerce', details:'Senza inserimento prodotti.', price: 'da 600€', features: ['Installazione WordPress + WooCommerce', 'Configurazione pagamenti','Configurazione Spedizioni', 'Tema Personalizzabile', 'Creazione Categorie', 'Creazione Collezioni','Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
                { name: 'E-commerce + Prodotti', details:'Include inserimento prodotti iniziali.', price: 'da 850€', features: ['Inserimento Prodotti', 'Installazione WordPress + WooCommerce', 'Configurazione pagamenti','Configurazione Spedizioni', 'Tema Personalizzabile', 'Creazione Categorie', 'Creazione Collezioni','Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
                { name: 'E-commerce Completo', details:'Gestione avanzata, spedizioni, email.', price: 'da 1600€', features: ['Gestione Vendite', 'Gestione Clienti ', 'Email Marketing', 'Facebook/Instagram Marketing', 'Ottimizzazione Performance', 'Supporto Email e Spedizioni', 'Installazione WordPress + WooCommerce', 'Configurazione pagamenti','Configurazione Spedizioni', 'Tema Personalizzabile', 'Creazione Categorie', 'Creazione Collezioni','Google Ads ( prezzo da concordare ) *', 'Design Responsive', 'SEO Base'] },
            ]
        }
    ];

    return (
        <div className="pricing-page-container container">
            <Helmet>
                <title>Prezzi Siti Web & E-commerce - CodeNed</title>
                <meta name="description" content="Scopri i costi per la realizzazione di siti web (React, Next.js, WordPress) ed e-commerce (Custom Java/Spring, Shopify, WooCommerce) con CodeNed." />
            </Helmet>

            <h2 className="pricing-page-title">Listino Prezzi: Siti Web & E-Commerce</h2>
            <p className="pricing-page-intro">
                Soluzioni personalizzate per la tua presenza online. Contattami per un preventivo dettagliato basato sulle tue specifiche esigenze.
            </p>

            {webPricingCategories.map((category) => (
                <div key={category.id} className="pricing-category-section">
                    <h3 className="pricing-category-title">{category.title}</h3>
                    {category.subtitle && <p className="pricing-category-subtitle">{category.subtitle}</p>}

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
export default WebPricingPage;