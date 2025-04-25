import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RxSlash } from 'react-icons/rx';
import './PageHeaderLogo.css';

const PageHeaderLogo = () => {
    return (
        <div className="page-header-logo-container">
            <BsChevronLeft className="header-bracket-icon" />
            <span className="header-logo-letter">C</span>
            <RxSlash className="header-slash-icon" />
            <span className="header-logo-letter">N</span>
            <BsChevronRight className="header-bracket-icon" />
        </div>
    );
};

export default PageHeaderLogo;