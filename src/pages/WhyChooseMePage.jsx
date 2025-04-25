import React from 'react';
import { Helmet } from 'react-helmet-async';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import PageHeaderLogo from '../pages/PageHeaderLogo.jsx';
// import './WhyChooseMePage.css';

const WhyChooseMePage = () => {
    return (
        <div className="why-choose-me-page-container">
            <Helmet>
                <title>Perché Scegliere CodeNed | Sviluppatore Web & Marketing</title>
                <meta name="description" content="Scopri i vantaggi di scegliere CodeNed: competenze moderne (React, Java, Next.js), soluzioni complete, efficienza e approccio personalizzato per il tuo progetto digitale." />
            </Helmet>

            <PageHeaderLogo />
            <WhyChooseUs />
        </div>
    );
};
export default WhyChooseMePage;