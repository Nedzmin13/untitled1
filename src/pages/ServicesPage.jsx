import React from 'react';
import { Link } from 'react-router-dom';
import { FaPalette, FaBullhorn } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import PageHeaderLogo from '../pages/PageHeaderLogo.jsx';
import './ServicesPage.css';

const ServicesPage = () => {
    return (
        <div className="services-page-container container">

            <Helmet>
                <title>Servizi Web & Marketing - CodeNed | Vicenza</title>
                <meta
                    name="description"
                    content="Scopri i servizi di sviluppo siti web, e-commerce (React, Next.js, WordPress, Shopify) e strategie di digital marketing (SEO, ADV, Social) offerti da CodeNed a Malo (Vicenza)."
                />
            </Helmet>


            <PageHeaderLogo />
            <h2 className="services-page-title">I Miei Servizi</h2>
            <p className="services-page-intro">
                Offro soluzioni complete per la tua presenza online, dallo sviluppo web personalizzato alle strategie di
                marketing digitale. Esplora i dettagli:
            </p>

            <div className="service-category-links">
                <Link to="/servizi/siti-web" className="service-category-link">
                    <FaPalette className="category-icon"/>
                    <div className="category-text">
                        <h3>Siti Web & E-Commerce</h3>
                        <p>Scopri i pacchetti per siti vetrina, multi-pagina ed e-commerce.</p>
                    </div>
                </Link>

                <Link to="/servizi/marketing" className="service-category-link">
                    <FaBullhorn className="category-icon"/>
                    <div className="category-text">
                        <h3>Digital Marketing</h3>
                        <p>Esplora le opzioni per SEO, Advertising e Social Media Marketing.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ServicesPage;