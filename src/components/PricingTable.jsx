import React from 'react';
import './PricingTable.css';

const PricingTable = ({ title, subtitle, options = [] }) => {
    return (
        <div className="pricing-table">
            <h4 className="pricing-table-title">{title}</h4>
            {subtitle && <p className="pricing-table-subtitle">{subtitle}</p>}
            <ul className="pricing-options-list">
                {options.map((option, index) => (
                    <li key={index} className="pricing-option">
                        <span className="option-name">{option.name}</span>
                        {option.details && <span className="option-details">{option.details}</span>}
                        <span className="option-price">{option.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingTable;