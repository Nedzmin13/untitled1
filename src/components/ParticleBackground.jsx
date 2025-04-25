import React, { useRef, useEffect } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // --- Configurazioni ---
        const particleCount = 50;
        const particleColor = 'rgba(0, 242, 255, 0.7)';
        const particleSpeedFactor = 0.5;
        const particleLength = 15;
        const fadeSpeed = 0.015;

        const gridSpacing = 25;
        const dotColor = 'rgba(255, 255, 255, 0.08)';
        const dotRadius = 0.5;


        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                const angle = Math.random() * Math.PI * 2;
                const speed = (Math.random() * 0.5 + 0.2) * particleSpeedFactor;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.life = 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= fadeSpeed;

                if (this.life <= 0 || this.x < -particleLength || this.x > canvas.width + particleLength || this.y < -particleLength || this.y > canvas.height + particleLength) {
                    this.reset();
                }
            }

            draw() {
                const endX = this.x - this.vx * particleLength;
                const endY = this.y - this.vy * particleLength;

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = particleColor;
                ctx.lineWidth = 1; // Linee sottili
                ctx.globalAlpha = this.life > 0 ? this.life : 0; // Usa la vita come opacità
                ctx.stroke();
                ctx.closePath();
            }
        }

        const drawGrid = () => {
            ctx.fillStyle = dotColor;
            ctx.globalAlpha = 1;

            for (let x = 0; x < canvas.width; x += gridSpacing) {
                for (let y = 0; y < canvas.height; y += gridSpacing) {
                    ctx.beginPath();
                    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }


        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawGrid();

            ctx.globalAlpha = 1;
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            ctx.globalAlpha = 1;

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        initParticles();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };

    }, []);

    return <canvas ref={canvasRef} id="particleBackgroundCanvas"></canvas>;
};

export default ParticleBackground;