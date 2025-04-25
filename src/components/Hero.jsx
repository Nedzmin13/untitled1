import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const targetTitle = "CODENED";
    const targetSubtitle1 = "Creazioni Siti Web";
    const targetSubtitle2 = "Web Marketing";

    const [visibleTitle, setVisibleTitle] = useState('');
    const [visibleSubtitle1, setVisibleSubtitle1] = useState('');
    const [visibleSubtitle2, setVisibleSubtitle2] = useState('');
    const [cursorTarget, setCursorTarget] = useState('title'); // 'title', 'sub1', 'sub2', 'done'

    const typingDelay = 100;
    const subtitleDelay = 500;
    const betweenSubtitleDelay = 300;

    const timeoutRef = useRef(null);

    useEffect(() => {
        let titleIndex = 0;
        let sub1Index = 0;
        let sub2Index = 0;
        let currentTarget = 'title'; // Variabile locale per tracciare lo stato logico

        const type = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            if (currentTarget === 'title') {
                if (titleIndex <= targetTitle.length) { // Usa <= per gestire l'ultimo step (passaggio a sub1)
                    setVisibleTitle(targetTitle.substring(0, titleIndex));
                    setCursorTarget('title');
                    if (titleIndex < targetTitle.length) {
                        titleIndex++;
                        timeoutRef.current = setTimeout(type, typingDelay);
                    } else {
                        currentTarget = 'sub1';
                        timeoutRef.current = setTimeout(type, subtitleDelay);
                    }
                }
            } else if (currentTarget === 'sub1') {
                if (sub1Index <= targetSubtitle1.length) { // Usa <=
                    setVisibleSubtitle1(targetSubtitle1.substring(0, sub1Index));
                    setCursorTarget('sub1');
                    if (sub1Index < targetSubtitle1.length) {
                        sub1Index++;
                        timeoutRef.current = setTimeout(type, typingDelay);
                    } else {
                        currentTarget = 'sub2';
                        timeoutRef.current = setTimeout(type, betweenSubtitleDelay);
                    }
                }
            } else if (currentTarget === 'sub2') {
                if (sub2Index <= targetSubtitle2.length) { // Usa <=
                    setVisibleSubtitle2(targetSubtitle2.substring(0, sub2Index));
                    setCursorTarget('sub2');
                    if (sub2Index < targetSubtitle2.length) {
                        sub2Index++;
                        timeoutRef.current = setTimeout(type, typingDelay);
                    } else {
                        currentTarget = 'done';
                        setCursorTarget('done');
                    }
                }
            }
        };

        const startTimeout = setTimeout(() => {
            setVisibleTitle('');
            setVisibleSubtitle1('');
            setVisibleSubtitle2('');
            setCursorTarget('title');
            type(); // Avvia la funzione type
        }, 500); // Ritardo iniziale

        // Cleanup function
        return () => {
            clearTimeout(timeoutRef.current);
            clearTimeout(startTimeout);
        };
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content container">
                <h1 className="hero-title">
                    {visibleTitle}
                    {cursorTarget === 'title' && <span className="typing-cursor">|</span>}
                </h1>
                <div className="hero-subtitles">
                    <p>
                        {visibleSubtitle1}
                        {cursorTarget === 'sub1' && <span className="typing-cursor">|</span>}
                    </p>
                    <p>
                        {visibleSubtitle2}
                        {(cursorTarget === 'sub2' || cursorTarget === 'done') && <span className="typing-cursor">|</span>}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;