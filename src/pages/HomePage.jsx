import React from 'react';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { Helmet } from 'react-helmet-async';


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>CodeNed | Sviluppo Web & Marketing a Vicenza</title>
                <meta name="description" content="CodeNed realizza siti web moderni (React, Next.js), e-commerce e strategie di web marketing personalizzate per aziende e professionisti a Malo, Vicenza e dintorni." />
            </Helmet>

            <Hero />
            <Services />
            <CallToAction />
        </>
    );
};

export default HomePage;