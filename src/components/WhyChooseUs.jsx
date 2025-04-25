import React from 'react';
import './WhyChooseUs.css';

import { FaReact, FaCode, FaWordpress, FaShopify, FaSearch, FaBullhorn, FaShareAlt, FaPencilAlt } from 'react-icons/fa';
import { IoRocketOutline, IoGitNetworkOutline, IoMegaphoneOutline, IoFlashOutline, IoTimerOutline, IoAnalyticsOutline, IoBulbOutline, IoPeopleOutline } from 'react-icons/io5';
import { FiCpu, FiClock } from 'react-icons/fi';
import { MdWeb } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';
import { TbTargetArrow } from "react-icons/tb";
import PageHeaderLogo from "../pages/PageHeaderLogo.jsx";


const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="why-choose-us-section">
            <div className="container">

                <h2 className="why-title">Perché Scegliere Me</h2>
                <p className="why-intro">
                    Affidare il tuo progetto digitale a CodeNed significa scegliere un partner aggiornato, efficiente e dedicato al tuo successo. Ecco i vantaggi chiave:
                </p>

                <div className="why-grid">
                    <div className="benefit-item">
                        <div className="benefit-icon-container">
                            <FaReact className="benefit-icon" />
                            <FiCpu className="benefit-icon" />
                        </div>
                        <div className="benefit-content">
                            <h3>Competenze</h3>
                            <p>Utilizzo le tecnologie più recenti (React, Next.js, Java, Spring, MySQL, HTML, JavaScript, CSS, TailwindCSS)
                                per creare soluzioni software moderne, veloci e scalabili.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon-container">
                            <BsPersonWorkspace className="benefit-icon"/>
                            <IoGitNetworkOutline className="benefit-icon"/>
                        </div>
                        <div className="benefit-content">
                            <h3>Tante Soluzioni</h3>
                            <p>
                                Dallo sviluppo web completo e soluzioni e-commerce (sia personalizzate con Java/Spring,
                                sia su piattaforme come Shopify e WordPress) al web marketing strategico. Gestisco il
                                tuo progetto digital a 360°, semplificando la comunicazione.
                            </p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon-container">
                            <IoFlashOutline className="benefit-icon" />
                            <IoTimerOutline className="benefit-icon" />
                        </div>
                        <div className="benefit-content">
                            <h3>Efficienza e Rapidità</h3>
                            <p>Approccio snello e diretto per tempi di sviluppo ottimizzati e maggiore flessibilità, trasformando la tua visione in realtà più velocemente.</p>
                        </div>
                    </div>
                </div>

                <div className="marketing-section-divider">
                    <h3 className="marketing-section-title">Servizi di Web Marketing Integrati</h3>
                    <p className="marketing-section-intro">
                        Oltre allo sviluppo, posso aiutarti a raggiungere il tuo pubblico e far crescere il tuo business online con strategie di marketing mirate:
                    </p>
                </div>

                <div className="marketing-services-grid">
                    <div className="marketing-service-item">
                        <FaSearch className="marketing-icon" />
                        <h4>Ottimizzazione SEO</h4>
                        <p>Aumenta la visibilità organica sui motori di ricerca per attirare traffico qualificato.</p>
                    </div>

                    <div className="marketing-service-item">
                        <IoMegaphoneOutline className="marketing-icon" />
                        <h4>Advertising Online</h4>
                        <p>Campagne pubblicitarie mirate (Google Ads, Social Ads) per raggiungere i tuoi obiettivi.</p>
                    </div>

                    <div className="marketing-service-item">
                        <IoPeopleOutline className="marketing-icon" />
                        <h4>Social Media Strategy</h4>
                        <p>Sviluppo e gestione della tua presenza su piattaforme chiave come Facebook e Instagram per connetterti con il pubblico e far crescere il brand.</p>
                    </div>

                    <div className="marketing-service-item">
                        <IoBulbOutline className="marketing-icon" />
                        <h4>Strategia Digitale</h4>
                        <p>Definizione di un piano digitale integrato e creazione di contenuti di valore.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;