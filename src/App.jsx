import { useEffect, useMemo, useState } from 'react';

import Experience from './Experience';
import { projects } from './data/projects';

const project = projects.find(({ slug }) => slug === 'pirate-ship-simulator');
const galleryImages = project?.gallery ?? [];

function isProjectRoute() {
    return window.location.pathname.replace(/\/$/, '').endsWith('/projects/pirate-ship-simulator');
}

function InstagramIcon() {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.7" cy="6.6" r=".8" fill="currentColor" stroke="none" />
    </svg>;
}

function LinkedInIcon() {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="currentColor">
        <path d="M5.2 8.4a2.05 2.05 0 1 0 0-4.1 2.05 2.05 0 0 0 0 4.1ZM3.45 9.9h3.5v10.65h-3.5V9.9Zm5.7 0h3.35v1.45h.05c.47-.89 1.61-1.83 3.31-1.83 3.54 0 4.2 2.33 4.2 5.36v5.67h-3.5v-5.02c0-1.2-.02-2.75-1.68-2.75-1.69 0-1.95 1.31-1.95 2.66v5.11h-3.5V9.9Z" />
    </svg>;
}

function PirateShipPage({ onReturn }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const groupedImages = useMemo(() => galleryImages.reduce((groups, image) => {
        groups[image.section] ??= [];
        groups[image.section].push(image);
        return groups;
    }, {}), []);
    const activeIndex = galleryImages.findIndex(({ src }) => src === activeImage?.src);

    useEffect(() => {
        if (!activeImage) return undefined;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setActiveImage(null);
            if (event.key === 'ArrowRight') setActiveImage(galleryImages[(activeIndex + 1) % galleryImages.length]);
            if (event.key === 'ArrowLeft') setActiveImage(galleryImages[(activeIndex - 1 + galleryImages.length) % galleryImages.length]);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeImage, activeIndex]);

    const goToHome = () => {
        window.history.pushState({}, '', '/');
        onReturn();
    };

    return <main className="pirate-page">
        <style>{pageStyles}{brandOverrides}</style>
        <header className="site-header">
            <button className="brand-mark" onClick={goToHome} aria-label="Volver al escritorio">
                <span className="brand-symbol">PS</span><span className="brand-name">DAVID SANTIAGO<br />AMAYA REYES</span>
            </button>
            <button className={`menu-toggle${menuOpen ? ' is-open' : ''}`} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                <span /><span />
            </button>
            {menuOpen && <nav className="menu-panel" aria-label="Navegación del proyecto">
                <a href="#proyecto" onClick={() => setMenuOpen(false)}>El proyecto</a>
                <a href="#proceso" onClick={() => setMenuOpen(false)}>Proceso</a>
                <a href="#galeria" onClick={() => setMenuOpen(false)}>Galería</a>
            </nav>}
        </header>

        <section className="project-hero" id="proyecto">
            <img className="hero-image" src={galleryImages[0]?.src} alt="Vista superior del barco pirata sobre la superficie del océano" />
            <div className="hero-shade" />
            <div className="hero-content">
                <p className="eyebrow">PROYECTO MULTIMEDIA <span>—</span> 2026</p>
                <h1><span>01+</span> PIRATE SHIP<br /><em>SIMULATOR</em></h1>
                <p className="hero-copy">Navegación marítima, física interactiva y un control construido para tomar el timón.</p>
                <a className="hero-link" href="#atributos">Descubrir el proyecto <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-index"><span>01</span><i />03</div>
        </section>

        <div className="paper-flow">
            <section className="content-section skills-section" id="atributos">
                <div className="section-heading">
                    <p className="eyebrow">ATRIBUTOS DEL PROYECTO</p>
                    <h2>Una idea que<br /><em>se puede navegar.</em></h2>
                </div>
                <div className="skills-grid">
                    <article className="skill-visual-card">
                        <img src={galleryImages[3]?.src} alt="Modelo 3D del barco pirata con su vela y timón" loading="lazy" />
                        <div className="red-skill-card"><span>01 / SIMULACIÓN</span><h3>Física<br />del mar</h3><p>Flotación y movimiento del barco sobre el agua.</p></div>
                        <img className="skill-detail-image" src={galleryImages[0]?.src} alt="Superficie del océano recreada en Unity" loading="lazy" />
                    </article>
                    <article className="skill-info-card">
                        <span className="card-index">02 / CONTROL</span>
                        <h3>El timón<br />en tus manos.</h3>
                        <p>Un control físico de madera conecta la experiencia digital con el movimiento real.</p>
                        <img src={galleryImages.find(({ title }) => title === 'Elementos 3D')?.src} alt="Prototipo físico con Arduino Uno y engranajes" loading="lazy" />
                        <div className="tech-tags"><span>ARDUINO UNO</span><span>2 POTENCIÓMETROS</span><span>UNITY</span></div>
                    </article>
                </div>
                <div className="project-intent">
                    <span className="section-number">/ OBJETIVO</span>
                    <p>{project?.objective}</p>
                    <span className="intent-signature">DAVID SANTIAGO AMAYA REYES<br />ESTUDIANTE DE INGENIERÍA MULTIMEDIA</span>
                </div>
            </section>

            <section className="content-section process-section" id="proceso">
                <div className="section-heading process-heading">
                    <p className="eyebrow">DEL CONCEPTO AL MOVIMIENTO</p>
                    <h2>Proceso de<br /><em>construcción.</em></h2>
                    <p className="section-intro">Tres etapas conectan el barco virtual con una experiencia física e interactiva.</p>
                </div>
                <div className="process-timeline">
                    <article className="timeline-step">
                        <span className="timeline-node">01</span><div className="timeline-copy"><span className="eyebrow">ATRIBUTOS</span><h3>Concepto y objetivo</h3><p>{project?.concept} {project?.objective}</p></div>
                    </article>
                    <article className="timeline-step">
                        <span className="timeline-node">02</span><div className="timeline-copy"><span className="eyebrow">PRIMERA ETAPA</span><h3>Simulación física</h3><p>Modelado del barco y el mástil; simulación de la superficie del océano, la flotación y el comportamiento del barco en Unity.</p></div>
                    </article>
                    <article className="timeline-step">
                        <span className="timeline-node">03</span><div className="timeline-copy"><span className="eyebrow">SEGUNDA ETAPA</span><h3>Control e integración</h3><p>Arduino Uno y dos potenciómetros conectan el control de madera con Unity: el timón gira y la vela sube o baja.</p></div>
                    </article>
                    <article className="timeline-step timeline-gallery-step">
                        <span className="timeline-node">04</span><div className="timeline-copy"><span className="eyebrow">REGISTRO VISUAL</span><h3>Imágenes del proceso</h3><p>Explora el prototipo, el modelo 3D y las pruebas de navegación en la galería.</p><a href="#galeria">Ir a la galería <span aria-hidden="true">↗</span></a></div>
                    </article>
                </div>
            </section>

            <section className="content-section gallery-section" id="galeria">
                <div className="section-heading gallery-heading">
                    <p className="eyebrow">PIRATE SHIP SIMULATOR / ARCHIVO</p>
                    <h2>Imágenes del<br /><em>proyecto.</em></h2>
                    <p className="section-intro">Modelado, simulación y construcción del control físico. Selecciona cualquier imagen para verla en grande.</p>
                </div>
                {Object.entries(groupedImages).map(([section, images]) => <div className="gallery-group" key={section}>
                    <h3>{section}</h3>
                    <div className="gallery-grid">{images.map((image) => <button className="gallery-card" key={image.src} onClick={() => setActiveImage(image)} aria-label={`Ampliar imagen: ${image.title}`}>
                        <span className="gallery-image-wrap"><img src={image.src} alt={image.alt} loading="lazy" decoding="async" /></span>
                        <span className="gallery-caption"><span>{image.title}</span><b aria-hidden="true">↗</b></span>
                    </button>)}</div>
                </div>)}
            </section>
        </div>

        <footer className="site-footer">
            <div className="footer-topline"><span>DAVID SANTIAGO AMAYA REYES</span><span>BOGOTÁ, COLOMBIA · 2026</span></div>
            <div className="footer-main"><p className="eyebrow">DISEÑO · MODELADO 3D · DESARROLLO</p><h2>Gracias por<br /><em>navegar.</em></h2><div className="social-actions">
                <a className="social-button instagram-button" href="https://instagram.com" target="_blank" rel="noreferrer noopener"><InstagramIcon />Instagram</a>
                <a className="social-button linkedin-button" href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><LinkedInIcon />LinkedIn</a>
            </div></div>
            <div className="footer-bottom"><button onClick={goToHome}>Volver al escritorio 3D <span aria-hidden="true">↗</span></button><a href={project?.repository} target="_blank" rel="noreferrer noopener">Repositorio del proyecto</a></div>
        </footer>

        {activeImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Vista ampliada: ${activeImage.title}`} onClick={() => setActiveImage(null)}>
            <button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Cerrar imagen">×</button>
            <button className="lightbox-arrow lightbox-prev" onClick={(event) => { event.stopPropagation(); setActiveImage(galleryImages[(activeIndex - 1 + galleryImages.length) % galleryImages.length]); }} aria-label="Imagen anterior">‹</button>
            <figure onClick={(event) => event.stopPropagation()}><img src={activeImage.src} alt={activeImage.alt} /><figcaption>{activeImage.title}</figcaption></figure>
            <button className="lightbox-arrow lightbox-next" onClick={(event) => { event.stopPropagation(); setActiveImage(galleryImages[(activeIndex + 1) % galleryImages.length]); }} aria-label="Imagen siguiente">›</button>
        </div>}
    </main>;
}

export default function App() {
    const [showProject, setShowProject] = useState(isProjectRoute);

    useEffect(() => {
        const syncRoute = () => setShowProject(isProjectRoute());
        window.addEventListener('popstate', syncRoute);
        window.addEventListener('portfolio:navigate', syncRoute);
        return () => {
            window.removeEventListener('popstate', syncRoute);
            window.removeEventListener('portfolio:navigate', syncRoute);
        };
    }, []);

    return showProject ? <PirateShipPage onReturn={() => setShowProject(false)} /> : <Experience />;
}

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
.pirate-page{--ink:#111;--paper:#f1efe8;--red:#c62923;--muted:#a8a59e;background:#101010;color:var(--paper);font-family:'DM Sans',Arial,sans-serif;min-height:100vh;overflow:hidden;position:relative}.pirate-page *{box-sizing:border-box}.pirate-page a{color:inherit}.site-header{align-items:center;display:flex;justify-content:space-between;left:0;padding:24px clamp(22px,6vw,86px);position:absolute;right:0;top:0;z-index:10}.brand-mark{align-items:center;background:none;border:0;color:white;display:flex;gap:12px;padding:0;text-align:left}.brand-symbol{align-items:center;border:1px solid #ffffff80;display:grid;font:600 15px 'Oswald',sans-serif;height:42px;letter-spacing:.08em;place-items:center;width:42px}.brand-name{font:600 10px/1.3 'Oswald',sans-serif;letter-spacing:.16em}.menu-toggle{align-items:center;background:#10101090;border:1px solid #ffffff80;display:grid;gap:6px;height:44px;justify-items:center;width:48px}.menu-toggle span{background:white;height:1px;transition:transform .2s;width:20px}.menu-toggle.is-open span:first-child{transform:translateY(3.5px) rotate(45deg)}.menu-toggle.is-open span:last-child{transform:translateY(-3.5px) rotate(-45deg)}.menu-panel{background:#111;border:1px solid #ffffff40;display:grid;gap:18px;min-width:190px;padding:22px;position:absolute;right:clamp(22px,6vw,86px);top:78px}.menu-panel a{font:500 13px 'Oswald',sans-serif;letter-spacing:.1em;text-decoration:none;text-transform:uppercase}.project-hero{background:#101010;height:min(900px,100svh);min-height:650px;overflow:hidden;position:relative}.hero-image{height:100%;inset:0;object-fit:cover;object-position:center 48%;position:absolute;width:100%}.hero-shade{background:linear-gradient(90deg,#090909df 0%,#09090988 46%,#09090918 100%),linear-gradient(0deg,#090909a8 0%,transparent 65%);inset:0;position:absolute}.hero-shade:after{background:radial-gradient(ellipse at 73% 62%,#c62a2375 0%,#a51a1e2b 25%,transparent 57%);content:'';inset:0;mix-blend-mode:screen;position:absolute}.hero-content{left:clamp(25px,11vw,160px);max-width:800px;position:absolute;top:50%;transform:translateY(-43%);z-index:1}.eyebrow{color:var(--red);font-size:10px;font-weight:700;letter-spacing:.2em;margin:0 0 15px;text-transform:uppercase}.hero-content .eyebrow{color:#f7b0a9}.hero-content .eyebrow span{margin:0 8px}.hero-content h1,.section-heading h2,.footer-main h2{font:600 clamp(4.2rem,10.2vw,10.2rem)/.88 'Oswald',Impact,sans-serif;letter-spacing:-.045em;margin:0;text-transform:uppercase}.hero-content h1>span{color:#ef4b42;display:block;font-size:.36em;letter-spacing:.02em;margin:0 0 15px}.hero-content h1 em,.section-heading h2 em,.footer-main h2 em{color:#e5443b;font-style:normal}.hero-copy{color:#e5e1da;font-size:clamp(14px,1.5vw,18px);line-height:1.7;margin:23px 0;max-width:430px}.hero-link{align-items:center;border-bottom:1px solid #ffffff9c;display:inline-flex;font:600 11px 'Oswald',sans-serif;gap:20px;letter-spacing:.13em;padding:0 0 11px;text-decoration:none;text-transform:uppercase}.hero-link span{color:#ef4b42;font-size:18px}.hero-index{align-items:center;bottom:38px;color:#ffffffae;display:flex;font:500 10px 'Oswald',sans-serif;gap:12px;letter-spacing:.1em;position:absolute;right:clamp(25px,6vw,88px)}.hero-index span{color:white}.hero-index i{background:#ffffff90;height:1px;width:54px}.paper-flow{background-color:var(--paper);background-image:radial-gradient(#1717170b .7px,transparent .7px),linear-gradient(90deg,#17171708 1px,transparent 1px),linear-gradient(#17171707 1px,transparent 1px);background-size:5px 5px,38px 38px,38px 38px;color:var(--ink);isolation:isolate;overflow:hidden;position:relative}.paper-flow:before{background:#111;clip-path:polygon(40% 0,65% 2%,54% 4%,71% 6%,48% 8%,59% 10%,35% 12%,54% 14%,68% 16%,42% 18%,59% 20%,39% 22%,65% 24%,49% 26%,70% 28%,46% 30%,58% 32%,37% 34%,61% 36%,48% 38%,69% 40%,43% 42%,58% 44%,38% 46%,63% 48%,47% 50%,68% 52%,44% 54%,60% 56%,38% 58%,55% 60%,70% 62%,44% 64%,60% 66%,40% 68%,63% 70%,47% 72%,69% 74%,43% 76%,57% 78%,38% 80%,62% 82%,47% 84%,67% 86%,42% 88%,58% 90%,37% 92%,63% 94%,45% 96%,59% 98%,43% 100%,0 100%,0 0);content:'';inset:0 auto 0 50%;position:absolute;transform:translateX(-50%);width:112px;z-index:-1}.content-section{margin:0 auto;max-width:1280px;padding:115px clamp(25px,8vw,116px);position:relative;z-index:1}.section-heading{margin:0 0 52px;max-width:730px}.section-heading h2{font-size:clamp(3.7rem,7vw,7rem);line-height:.93}.section-heading>.eyebrow{margin-bottom:18px}.skills-grid{align-items:stretch;display:grid;gap:22px;grid-template-columns:1.1fr .9fr}.skill-visual-card{display:grid;gap:14px;grid-template-columns:1fr .82fr;grid-template-rows:minmax(230px,370px) 170px;position:relative}.skill-visual-card>img:first-child{height:100%;object-fit:cover;width:100%}.red-skill-card{align-content:center;background:var(--red);color:white;display:grid;padding:24px}.red-skill-card>span,.card-index{font:600 9px 'Oswald',sans-serif;letter-spacing:.16em}.red-skill-card h3,.skill-info-card h3{font:600 clamp(2rem,3.3vw,3.2rem)/.95 'Oswald',sans-serif;margin:13px 0;text-transform:uppercase}.red-skill-card p,.skill-info-card>p{font-size:13px;line-height:1.6;margin:0;max-width:230px}.skill-detail-image{grid-column:1/3;height:100%;object-fit:cover;object-position:center 48%;width:100%}.skill-info-card{align-content:start;background:#fff;padding:clamp(25px,4vw,48px)}.skill-info-card .card-index{color:var(--red)}.skill-info-card h3{font-size:clamp(2.5rem,4.5vw,4.2rem);margin:38px 0 13px}.skill-info-card>p{color:#53514c;font-size:14px;max-width:340px}.skill-info-card>img{background-color:#eeece5;background-image:linear-gradient(45deg,#dedbd2 25%,transparent 25%),linear-gradient(-45deg,#dedbd2 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#dedbd2 75%),linear-gradient(-45deg,transparent 75%,#dedbd2 75%);background-position:0 0,0 8px,8px -8px,-8px 0;background-size:16px 16px;display:block;height:210px;margin:26px 0 18px;object-fit:contain;width:100%}.tech-tags{display:flex;flex-wrap:wrap;gap:7px}.tech-tags span{border:1px solid #2222;color:#45423c;font:600 9px 'Oswald',sans-serif;letter-spacing:.08em;padding:7px 9px}.project-intent{border-top:1px solid #1114;display:grid;gap:25px;grid-template-columns:.65fr 1.4fr .8fr;margin:70px 0 0;padding:25px 0 0}.section-number{color:var(--red);font:600 10px 'Oswald',sans-serif;letter-spacing:.17em}.project-intent>p{font:500 clamp(1.2rem,2vw,1.8rem)/1.5 'Oswald',sans-serif;margin:0;max-width:610px}.intent-signature{align-self:end;color:#77736d;font-size:9px;font-weight:700;letter-spacing:.12em;line-height:1.6;text-align:right}.process-section{padding-bottom:135px;padding-top:140px}.process-heading{margin-left:auto;text-align:right}.section-intro{color:#68645e;font-size:14px;line-height:1.7;margin:18px 0 0;max-width:500px}.process-heading .section-intro{margin-left:auto}.process-timeline{margin:25px auto 0;max-width:810px;position:relative}.process-timeline:before{background:#111;bottom:25px;content:'';left:25px;position:absolute;top:20px;width:1px}.timeline-step{display:grid;gap:30px;grid-template-columns:52px 1fr;padding:0 0 57px;position:relative}.timeline-node{align-items:center;background:var(--paper);border:1px solid var(--red);border-radius:50%;color:var(--red);display:grid;font:600 10px 'Oswald',sans-serif;height:52px;place-items:center;width:52px}.timeline-copy{padding:5px 0 0}.timeline-copy .eyebrow{margin:0 0 8px}.timeline-copy h3{font:600 clamp(1.75rem,3.4vw,2.9rem) 'Oswald',sans-serif;letter-spacing:.01em;margin:0 0 10px;text-transform:uppercase}.timeline-copy p{color:#5d5953;font-size:14px;line-height:1.75;margin:0;max-width:630px}.timeline-gallery-step{padding-bottom:0}.timeline-copy>a{color:var(--red);display:inline-flex;font:600 10px 'Oswald',sans-serif;gap:20px;letter-spacing:.13em;margin-top:18px;text-decoration:none;text-transform:uppercase}.gallery-section{padding-bottom:150px;padding-top:120px}.gallery-heading{margin-bottom:68px}.gallery-group{margin:55px 0 0}.gallery-group>h3{border-bottom:1px solid #1113;font:600 19px 'Oswald',sans-serif;letter-spacing:.07em;margin:0 0 19px;padding-bottom:12px;text-transform:uppercase}.gallery-grid{display:grid;gap:16px;grid-template-columns:repeat(3,minmax(0,1fr))}.gallery-card{background:#fff;border:0;color:var(--ink);cursor:zoom-in;min-width:0;padding:8px;text-align:left;transition:transform .2s ease,box-shadow .2s ease}.gallery-card:hover{box-shadow:0 12px 35px #1112;transform:translateY(-4px)}.gallery-image-wrap{align-items:center;background:#eeece5;display:flex;height:clamp(160px,20vw,250px);justify-content:center;overflow:hidden;width:100%}.gallery-image-wrap img{height:100%;object-fit:contain;transition:transform .35s ease;width:100%}.gallery-card:hover img{transform:scale(1.035)}.gallery-caption{align-items:center;display:flex;font:500 12px 'Oswald',sans-serif;justify-content:space-between;letter-spacing:.045em;min-height:43px;padding:8px 5px 2px;text-transform:uppercase}.gallery-caption b{color:var(--red);font-size:17px}.site-footer{background:#111;color:var(--paper);padding:27px clamp(25px,8vw,116px) 24px;position:relative}.footer-topline,.footer-bottom{align-items:center;border-bottom:1px solid #ffffff30;display:flex;font:500 9px 'Oswald',sans-serif;justify-content:space-between;letter-spacing:.12em;padding:0 0 18px}.footer-topline span:last-child{color:#aaa69f}.footer-main{padding:74px 0 80px}.footer-main .eyebrow{color:#f17a70}.footer-main h2{font-size:clamp(4rem,9vw,8.6rem)}.social-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:38px}.social-button{align-items:center;display:inline-flex;font:600 12px 'Oswald',sans-serif;gap:11px;justify-content:center;letter-spacing:.1em;min-height:56px;min-width:200px;padding:0 22px;text-decoration:none;text-transform:uppercase;transition:background .2s,color .2s,transform .2s}.social-button:hover{transform:translateY(-3px)}.social-icon{height:19px;width:19px}.instagram-button{background:var(--red);border:1px solid var(--red);color:white}.instagram-button:hover{background:#a51d19}.linkedin-button{border:1px solid #e5e0d7;color:white}.linkedin-button:hover{background:#f1efe8;color:#111}.footer-bottom{border-bottom:0;border-top:1px solid #ffffff30;padding:18px 0 0}.footer-bottom button,.footer-bottom a{background:none;border:0;color:#aaa69f;font:500 10px 'Oswald',sans-serif;letter-spacing:.08em;text-decoration:none;text-transform:uppercase}.footer-bottom button{cursor:pointer}.footer-bottom span{color:#ef4b42;margin-left:7px}.lightbox{align-items:center;background:#090909f2;display:flex;inset:0;justify-content:center;padding:50px 80px;position:fixed;z-index:30}.lightbox figure{margin:0;max-height:100%;max-width:1200px;text-align:center}.lightbox figure img{max-height:calc(100vh - 115px);max-width:100%;object-fit:contain}.lightbox figcaption{color:white;font:500 12px 'Oswald',sans-serif;letter-spacing:.11em;margin-top:10px;text-transform:uppercase}.lightbox-close,.lightbox-arrow{background:#111;border:1px solid #ffffff80;color:white;cursor:pointer;height:46px;position:absolute;width:46px}.lightbox-close{font-size:30px;right:25px;top:25px}.lightbox-arrow{font-size:34px;top:50%;transform:translateY(-50%)}.lightbox-prev{left:20px}.lightbox-next{right:20px}
@media(max-width:800px){.project-hero{min-height:600px}.content-section{padding-bottom:85px;padding-top:85px}.skills-grid{grid-template-columns:1fr}.skill-visual-card{grid-template-rows:minmax(220px,55vw) 155px}.skill-info-card{padding:30px}.skill-info-card>img{height:240px}.project-intent{grid-template-columns:1fr 2fr}.intent-signature{grid-column:2;text-align:left}.process-heading{text-align:left}.process-heading .section-intro{margin-left:0}.gallery-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.paper-flow:before{width:66px}.process-section,.gallery-section{padding-bottom:90px;padding-top:90px}}
@media(max-width:520px){.site-header{padding-top:17px}.project-hero{height:88svh;min-height:590px}.hero-image{object-position:55% center}.hero-content{left:23px;right:20px;top:53%}.hero-content h1{font-size:clamp(3.6rem,17vw,5.7rem)}.hero-copy{max-width:300px}.hero-shade{background:linear-gradient(90deg,#090909d9,#09090955),linear-gradient(0deg,#090909a8,transparent 70%)}.content-section{padding-left:22px;padding-right:22px}.section-heading h2{font-size:clamp(3.4rem,15vw,5.2rem)}.skill-visual-card{grid-template-columns:1fr 1fr;grid-template-rows:230px 160px}.red-skill-card{padding:17px}.red-skill-card h3{font-size:2rem}.skill-info-card>img{height:175px}.project-intent{gap:14px;grid-template-columns:1fr}.intent-signature{grid-column:1}.process-timeline:before{left:20px}.timeline-step{gap:16px;grid-template-columns:42px 1fr}.timeline-node{height:42px;width:42px}.gallery-grid{gap:10px;grid-template-columns:1fr}.gallery-image-wrap{height:64vw;max-height:340px}.footer-main{padding:60px 0}.footer-topline{align-items:flex-start;flex-direction:column;gap:8px}.footer-bottom{align-items:flex-start;flex-direction:column;gap:14px}.social-button{width:100%}.lightbox{padding:45px 15px}.lightbox-prev{left:7px}.lightbox-next{right:7px}.lightbox-arrow{height:38px;width:38px}.lightbox figure img{max-height:calc(100vh - 130px)}}
`;

const brandOverrides = `
.pirate-page{--paper:#f5f5f0;--red:#ff6b35;--purple:#4b2e83}
.paper-flow:before{display:none}
.brand-symbol{border-color:var(--red);color:var(--red)}
.hero-content .eyebrow,.footer-main .eyebrow{color:#ff9a73}
.hero-shade:after{background:radial-gradient(ellipse at 73% 62%,#ff6b3575 0%,#ff6b352b 25%,transparent 57%)}
.hero-content h1>span,.hero-content h1 em,.hero-link span,.footer-bottom span{color:var(--red)}
.section-heading h2{color:var(--purple)}
.section-heading h2 em{color:var(--red)}
.footer-main h2 em{color:var(--red)}
.red-skill-card{background:var(--red);color:var(--purple)}
.skill-info-card .card-index{color:var(--purple)}
.timeline-node{border-color:var(--red);color:var(--red)}
.gallery-group>h3{color:var(--purple)}
.instagram-button{background:var(--red);border-color:var(--red);color:#fff}
.instagram-button:hover{background:#e85e2c}
.linkedin-button{border-color:var(--purple);color:#fff}
.linkedin-button:hover{background:var(--purple);color:#fff}
`;
