import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './PricingPlanCard.css';

const PricingPlanCard = ({ name, price, details, features = [], isPopular = false }) => {

    const generatedFeatures = details ? details.split('. ').filter(f => f.length > 5) : [];
    const displayFeatures = features.length > 0 ? features : generatedFeatures.slice(0, 3);

    return (
        <div className={`pricing-plan-card ${isPopular ? 'popular' : ''}`}>
            {isPopular && <div className="popular-badge">Consigliato</div>}
            <h5 className="plan-name">{name}</h5>
            <div className="plan-price">{price}</div>
            {details && !features.length && <p className="plan-details-short">{details.split('.')[0] + '.'}</p>} {/* Mostra solo la prima frase se non ci sono features specifiche */}

            <ul className="plan-features">
                {displayFeatures.map((feature, index) => (
                    <li key={index}>
                        <FaCheckCircle className="feature-icon" aria-hidden="true" />
                        <span>{feature}</span>
                    </li>
                ))}


            </ul>

            <a href="#cta" className="plan-cta-button" onClick={(e) => {
                e.preventDefault();
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth'});
            }}>
                Richiedi Info
            </a>
        </div>
    );
};

export default PricingPlanCard;