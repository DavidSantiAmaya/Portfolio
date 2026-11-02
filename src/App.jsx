import { useEffect, useMemo, useState } from 'react';

import Experience from './Experience';
import SocialLinks from './components/ui/SocialLinks';
import { projects } from './data/projects';

const project = projects.find(({ slug }) => slug === 'pirate-ship-simulator');
const galleryImages = project?.gallery ?? [];

function customProjectRoute() {
    const path = window.location.pathname.replace(/\/$/, '');
    const match = path.match(/\/projects\/([^/]+)$/);
    return ['pirate-ship-simulator', 'gus-estuvo-aqui'].includes(match?.[1]) ? match[1] : null;
}

const gusProject = projects.find(({ slug }) => slug === 'gus-estuvo-aqui');

function GusProjectPage({ onReturn }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const activeIndex = gusProject.gallery.findIndex(({ src }) => src === activeImage?.src);
    const galleryGroups = useMemo(() => gusProject.gallery.reduce((groups, image) => {
        groups[image.section] ??= [];
        groups[image.section].push(image);
        return groups;
    }, {}), []);

    useEffect(() => {
        if (!activeImage) return undefined;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setActiveImage(null);
            if (event.key === 'ArrowRight') setActiveImage(gusProject.gallery[(activeIndex + 1) % gusProject.gallery.length]);
            if (event.key === 'ArrowLeft') setActiveImage(gusProject.gallery[(activeIndex - 1 + gusProject.gallery.length) % gusProject.gallery.length]);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeImage, activeIndex]);

    const goToHome = () => {
        window.history.pushState({}, '', '/');
        onReturn();
    };

    return <main className="gus-page">
        <style>{gusStyles}</style>
        <header className="gus-header">
            <button className="gus-brand" onClick={goToHome} aria-label="Volver al escritorio">
                <span className="gus-brand-mark">G</span><span>DAVID SANTIAGO<br />AMAYA REYES</span>
            </button>
            <button className={`gus-menu-button${menuOpen ? ' open' : ''}`} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
            {menuOpen && <nav className="gus-nav" aria-label="Secciones del proyecto">
                <a href="#relato" onClick={() => setMenuOpen(false)}>Relato</a><a href="#personajes" onClick={() => setMenuOpen(false)}>Personajes</a><a href="#storyboard" onClick={() => setMenuOpen(false)}>Storyboard</a><a href="#galeria-gus" onClick={() => setMenuOpen(false)}>Galería</a>
            </nav>}
        </header>

        <section className="gus-hero" id="proyecto-gus">
            <div className="gus-hero-copy">
                <p className="gus-eyebrow">CORTOMETRAJE DE ANIMACIÓN 2D <span>·</span> 2025</p>
                <h1>Gus estuvo<br /><em>aquí.</em></h1>
                <p className="gus-hero-summary">Capítulo piloto · Ingeniería Multimedia</p>
                <p className="gus-hero-description">Ciencia ficción, humor ácido y una aventura sobre responsabilidad, tiempo y segundas oportunidades.</p>
                <a className="gus-link" href="#relato">Entrar en la historia <span aria-hidden="true">↓</span></a>
            </div>
            <figure className="gus-cover"><img src={gusProject.cover} alt="Portada de Gus Estuvo Aquí: Gus, Dumbot y Gus del futuro dentro de la nave" /><figcaption>UNIVERSO EXOGÉNESIS · AÑO 2552</figcaption></figure>
            <span className="gus-hero-number">PILOTO / 01</span>
        </section>

        <section className="gus-section gus-story" id="relato">
            <div className="gus-section-heading"><p className="gus-eyebrow">01 / UNIVERSO Y NARRATIVA</p><h2>Una alerta<br /><em>ignorada.</em></h2></div>
            <div className="gus-story-layout">
                <article className="gus-paper-note"><span className="gus-note-label">LA PREMISA</span><p>{gusProject.premise}</p><small>{gusProject.genre}</small></article>
                <div className="gus-story-side"><div><span className="gus-side-label">EL UNIVERSO</span><p>{gusProject.universe}</p></div><div><span className="gus-side-label">EL PUNTO DE PARTIDA</span><p>{gusProject.storyStartingPoint}</p></div></div>
            </div>
            <div className="gus-author-line"><span>David Santiago Amaya Reyes</span><span>Estudiante de Ingeniería Multimedia · 2025</span></div>
        </section>

        <section className="gus-section gus-characters" id="personajes">
            <div className="gus-section-heading"><p className="gus-eyebrow">02 / DISEÑO Y PERSONALIDAD</p><h2>Personajes<br /><em>del viaje.</em></h2><p className="gus-section-lede">Tres versiones y miradas sobre una misma historia. Las descripciones conservan el material narrativo del proyecto.</p></div>
            <div className="gus-character-grid">{gusProject.characters.map((character, index) => <article className="gus-character-card" key={character.name}>
                <div className="gus-character-image"><img src={character.image} alt={`Lámina de diseño de ${character.name}`} loading="lazy" /></div>
                <div className="gus-character-copy"><span>PERSONAJE / 0{index + 1}</span><h3>{character.name}</h3><h4>{character.role}</h4><p>{character.description}</p></div>
            </article>)}</div>
        </section>

        <section className="gus-section gus-process" id="proceso-gus">
            <div className="gus-section-heading"><p className="gus-eyebrow">03 / DESARROLLO DEL RELATO</p><h2>Del día a día<br /><em>al futuro.</em></h2></div>
            <div className="gus-beat-list">{gusProject.storyboard.beats.map((beat, index) => <article className="gus-beat" key={beat}><span>{String(index + 1).padStart(2, '0')}</span><p>{beat}</p></article>)}</div>
            <div className="gus-storyboard-intro"><div><span className="gus-side-label">PLANOS · ENCUADRES · ACCIÓN</span><h3>Storyboard del capítulo piloto</h3><p>{gusProject.storyboard.overview}</p><p>{gusProject.storyboard.shotPlanning}</p></div><img src={`${import.meta.env.BASE_URL}gus-estuvo-aqui/gus-del-futuro-y-storyboard.png`} alt="Diseño de Gus del futuro y encabezado visual del storyboard" loading="lazy" /></div>
        </section>

        <section className="gus-section gus-animation">
            <div className="gus-animation-copy"><p className="gus-eyebrow">04 / PROCESO DE ANIMACIÓN</p><h2>Un cuadro<br /><em>a la vez.</em></h2><p>{gusProject.animationProcess}</p><div className="gus-tools"><span>KRITA</span><span>POSES CLAVE</span><span>LÍNEA DE TIEMPO</span></div></div>
            <img src={`${import.meta.env.BASE_URL}gus-estuvo-aqui/proceso-de-animacion.png`} alt="Proceso de animación 2D en Krita" loading="lazy" />
        </section>

        <section className="gus-section gus-documents" id="storyboard">
            <div className="gus-section-heading"><p className="gus-eyebrow">05 / DOCUMENTOS ÍNTEGROS</p><h2>Storyboard<br /><em>y láminas.</em></h2><p className="gus-section-lede">Consulta los PDF completos para recorrer los planos, encuadres, acciones y notas del proceso sin perder ninguna página.</p></div>
            <div className="gus-document-list">{gusProject.documents.map((document) => <details className="gus-document" key={document.src}>
                <summary><span>{document.title}</span><b aria-hidden="true">＋</b></summary>
                <div className="gus-document-actions"><a href={document.src} target="_blank" rel="noopener noreferrer">Abrir PDF en otra pestaña ↗</a><a href={document.src} download>Descargar PDF ↓</a></div>
                <iframe src={document.src} title={document.title} loading="lazy" />
            </details>)}</div>
        </section>

        <section className="gus-section gus-gallery" id="galeria-gus">
            <div className="gus-section-heading"><p className="gus-eyebrow">06 / ARCHIVO VISUAL</p><h2>Arte del<br /><em>proyecto.</em></h2><p className="gus-section-lede">Explora las láminas de premisa, personajes, storyboard y desarrollo de la animación.</p></div>
            {Object.entries(galleryGroups).map(([section, images]) => <div className="gus-gallery-group" key={section}><h3>{section}</h3><div className="gus-gallery-grid">{images.map((image) => <button className="gus-gallery-card" key={image.src} onClick={() => setActiveImage(image)} aria-label={`Ampliar: ${image.title}`}>
                <span><img src={image.src} alt={image.alt} loading="lazy" decoding="async" /></span><b>{image.title}<i aria-hidden="true">↗</i></b>
            </button>)}</div></div>)}
        </section>

        <footer className="gus-footer"><div><p className="gus-eyebrow">CORTOMETRAJE 2D · CAPÍTULO PILOTO</p><h2>Gus estuvo<br /><em>aquí.</em></h2><SocialLinks className="social-actions gus-social-actions" /></div><button onClick={goToHome}>Volver al escritorio 3D <span aria-hidden="true">↗</span></button></footer>

        {activeImage && <div className="gus-lightbox" role="dialog" aria-modal="true" aria-label={`Vista ampliada: ${activeImage.title}`} onClick={() => setActiveImage(null)}>
            <button className="gus-lightbox-close" onClick={() => setActiveImage(null)} aria-label="Cerrar imagen">×</button>
            <button className="gus-lightbox-arrow prev" onClick={(event) => { event.stopPropagation(); setActiveImage(gusProject.gallery[(activeIndex - 1 + gusProject.gallery.length) % gusProject.gallery.length]); }} aria-label="Imagen anterior">‹</button>
            <figure onClick={(event) => event.stopPropagation()}><img src={activeImage.src} alt={activeImage.alt} /><figcaption>{activeImage.title}</figcaption></figure>
            <button className="gus-lightbox-arrow next" onClick={(event) => { event.stopPropagation(); setActiveImage(gusProject.gallery[(activeIndex + 1) % gusProject.gallery.length]); }} aria-label="Imagen siguiente">›</button>
        </div>}
    </main>;
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
            <div className="footer-main"><p className="eyebrow">DISEÑO · MODELADO 3D · DESARROLLO</p><h2>Gracias por<br /><em>navegar.</em></h2><SocialLinks /></div>
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
    const [customSlug, setCustomSlug] = useState(customProjectRoute);

    useEffect(() => {
        const syncRoute = () => setCustomSlug(customProjectRoute());
        window.addEventListener('popstate', syncRoute);
        window.addEventListener('portfolio:navigate', syncRoute);
        return () => {
            window.removeEventListener('popstate', syncRoute);
            window.removeEventListener('portfolio:navigate', syncRoute);
        };
    }, []);

    useEffect(() => {
        document.title = customSlug === 'gus-estuvo-aqui'
            ? 'Gus Estuvo Aquí — David Santiago Amaya Reyes'
            : customSlug === 'pirate-ship-simulator'
                ? 'Pirate Ship Simulator — David Santiago Amaya Reyes'
                : 'Portafolio — David Santiago Amaya Reyes';
    }, [customSlug]);

    if (customSlug === 'pirate-ship-simulator') return <PirateShipPage onReturn={() => setCustomSlug(null)} />;
    if (customSlug === 'gus-estuvo-aqui') return <GusProjectPage onReturn={() => setCustomSlug(null)} />;
    return <Experience />;
}

const gusStyles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Kalam:wght@400;700&family=Permanent+Marker&display=swap');
.gus-page{--paper:#f7f6f1;--ink:#201b2c;--purple:#4b3290;--orange:#ff6938;--blue:#48639a;background-color:var(--paper);background-image:linear-gradient(#4b329012 1px,transparent 1px),linear-gradient(90deg,#4b329012 1px,transparent 1px);background-size:30px 30px;color:var(--ink);font-family:'DM Sans',Arial,sans-serif;min-height:100vh;overflow:hidden}.gus-page *{box-sizing:border-box}.gus-page a{color:inherit}.gus-header{align-items:center;background:#f7f6f1e8;backdrop-filter:blur(10px);display:flex;justify-content:space-between;left:0;padding:16px clamp(20px,6vw,84px);position:sticky;top:0;z-index:15}.gus-brand{align-items:center;background:none;border:0;color:var(--purple);display:flex;font:700 10px/1.25 'DM Sans',sans-serif;gap:10px;letter-spacing:.1em;text-align:left}.gus-brand-mark{align-items:center;background:var(--purple);color:#fff;display:grid;font:32px 'Permanent Marker',cursive;height:43px;place-items:center;transform:rotate(-5deg);width:43px}.gus-menu-button{background:var(--orange);border:2px solid var(--purple);box-shadow:3px 3px 0 var(--purple);display:grid;gap:6px;height:42px;place-content:center;width:48px}.gus-menu-button span{background:var(--purple);height:2px;width:20px}.gus-menu-button.open span:first-child{transform:translateY(4px) rotate(45deg)}.gus-menu-button.open span:last-child{transform:translateY(-4px) rotate(-45deg)}.gus-nav{background:var(--paper);border:2px solid var(--purple);box-shadow:5px 5px 0 var(--orange);display:grid;gap:14px;min-width:190px;padding:22px;position:absolute;right:clamp(20px,6vw,84px);top:68px}.gus-nav a{color:var(--purple);font:700 13px 'Kalam',cursive;text-decoration:none;text-transform:uppercase}.gus-hero{align-items:center;display:grid;gap:4vw;grid-template-columns:1.1fr .9fr;margin:0 auto;max-width:1440px;min-height:calc(100svh - 75px);padding:64px clamp(25px,8vw,115px) 84px;position:relative}.gus-hero:before{background:var(--orange);border:3px solid var(--purple);border-radius:50%;content:'';height:21px;position:absolute;right:10%;top:13%;width:21px}.gus-hero-copy{position:relative;z-index:1}.gus-eyebrow{color:var(--purple);font-size:10px;font-weight:700;letter-spacing:.16em;margin:0 0 15px;text-transform:uppercase}.gus-eyebrow span{color:var(--orange);padding:0 5px}.gus-hero h1,.gus-section-heading h2,.gus-animation h2,.gus-footer h2{color:var(--purple);font:400 clamp(4.2rem,9.5vw,9rem)/.92 'Permanent Marker',cursive;letter-spacing:-.035em;margin:0;text-transform:uppercase}.gus-hero h1 em,.gus-section-heading h2 em,.gus-animation h2 em,.gus-footer h2 em{color:var(--orange);font-style:normal}.gus-hero-summary{color:var(--purple);font:700 17px 'Kalam',cursive;margin:22px 0 4px}.gus-hero-description{color:#514d57;font-size:15px;line-height:1.7;margin:8px 0 25px;max-width:475px}.gus-link{align-items:center;background:var(--purple);box-shadow:4px 4px 0 var(--orange);color:white!important;display:inline-flex;font:700 11px 'DM Sans',sans-serif;gap:24px;letter-spacing:.08em;padding:13px 17px;text-decoration:none;text-transform:uppercase}.gus-link span{color:#ffab87;font-size:16px}.gus-cover{background:#fff;border:2px solid var(--purple);box-shadow:9px 10px 0 var(--orange);margin:0;max-width:470px;padding:10px;position:relative;transform:rotate(1.2deg)}.gus-cover:before{background:#ff69389c;content:'';height:14px;left:37%;position:absolute;top:-8px;transform:rotate(-3deg);width:100px;z-index:1}.gus-cover img{display:block;max-height:76svh;object-fit:contain;width:100%}.gus-cover figcaption{color:var(--purple);font:700 9px 'DM Sans',sans-serif;letter-spacing:.12em;padding:10px 5px 4px;text-align:right}.gus-hero-number{bottom:30px;color:#777181;font:700 9px 'DM Sans',sans-serif;letter-spacing:.2em;position:absolute;right:clamp(25px,8vw,115px)}.gus-section{margin:0 auto;max-width:1340px;padding:110px clamp(25px,8vw,115px);position:relative}.gus-section-heading{margin-bottom:44px;max-width:790px}.gus-section-heading h2,.gus-animation h2{font-size:clamp(3.4rem,6.5vw,6rem)}.gus-section-heading .gus-section-lede{color:#5e5a62;font-size:14px;line-height:1.7;margin:19px 0 0;max-width:560px}.gus-story{padding-top:80px}.gus-story-layout{align-items:start;display:grid;gap:35px;grid-template-columns:1.05fr .95fr}.gus-paper-note{background:#fff;border:1px solid #d1cbd0;clip-path:polygon(0 2%,3% 0,8% 1%,15% 0,21% 1%,29% 0,36% 2%,45% 0,55% 1%,64% 0,74% 2%,84% 0,93% 2%,100% 0,99% 12%,100% 22%,98% 34%,100% 46%,98% 60%,100% 71%,98% 83%,100% 98%,91% 100%,82% 98%,73% 100%,64% 98%,55% 100%,45% 98%,35% 100%,25% 98%,15% 100%,5% 98%,0 100%,2% 87%,0 74%,2% 61%,0 49%,2% 36%,0 24%,2% 12%);padding:clamp(28px,4vw,52px);position:relative}.gus-note-label,.gus-side-label{color:var(--purple);font:400 24px 'Permanent Marker',cursive}.gus-paper-note p{color:#393541;font-size:15px;line-height:1.8;margin:18px 0}.gus-paper-note small{border-left:4px solid var(--orange);color:var(--purple);display:block;font:700 15px/1.55 'Kalam',cursive;padding:6px 0 6px 15px}.gus-story-side{display:grid;gap:27px;padding-top:13px}.gus-story-side>div{border-left:3px solid var(--orange);padding:2px 0 2px 20px}.gus-side-label{font-size:17px}.gus-story-side p{color:#514d57;font-size:14px;line-height:1.75;margin:9px 0 0}.gus-author-line{border-top:1px solid #4b329044;color:#736e7b;display:flex;font-size:10px;font-weight:700;justify-content:space-between;letter-spacing:.08em;margin-top:42px;padding-top:15px;text-transform:uppercase}.gus-characters{background:#eeedf0b8;max-width:none;padding-left:max(25px,calc((100vw - 1110px)/2));padding-right:max(25px,calc((100vw - 1110px)/2))}.gus-character-grid{display:grid;gap:18px;grid-template-columns:repeat(3,minmax(0,1fr))}.gus-character-card{background:#fff;border:2px solid var(--purple);box-shadow:5px 6px 0 #4b329033;min-width:0}.gus-character-image{align-items:center;background-color:#f1f0eb;background-image:linear-gradient(#4b32900d 1px,transparent 1px),linear-gradient(90deg,#4b32900d 1px,transparent 1px);background-size:18px 18px;display:flex;height:250px;justify-content:center;overflow:hidden;padding:8px}.gus-character-image img{height:100%;object-fit:contain;width:100%}.gus-character-copy{padding:22px}.gus-character-copy>span{color:var(--orange);font-size:9px;font-weight:700;letter-spacing:.13em}.gus-character-copy h3{color:var(--purple);font:400 clamp(1.8rem,2.5vw,2.6rem) 'Permanent Marker',cursive;line-height:1;margin:10px 0 5px}.gus-character-copy h4{color:#4d4854;font:700 13px 'Kalam',cursive;margin:0 0 13px}.gus-character-copy p{color:#57535d;font-size:12px;line-height:1.7;margin:0}.gus-process{display:grid;gap:60px;grid-template-columns:.85fr 1.15fr}.gus-process .gus-section-heading{position:sticky;top:105px}.gus-beat-list{border-left:2px solid var(--purple);padding-left:27px}.gus-beat{display:grid;gap:14px;grid-template-columns:36px 1fr;margin:0 0 25px;position:relative}.gus-beat:before{background:var(--orange);border:2px solid var(--purple);border-radius:50%;content:'';height:11px;left:-35px;position:absolute;top:7px;width:11px}.gus-beat>span{color:var(--orange);font:400 19px 'Permanent Marker',cursive}.gus-beat p{color:#514d57;font-size:13px;line-height:1.7;margin:0}.gus-storyboard-intro{align-items:center;background:#fff;border:1px solid #d6d2d6;display:grid;gap:30px;grid-column:1/-1;grid-template-columns:1fr .8fr;margin-top:5px;padding:25px}.gus-storyboard-intro .gus-side-label{font-size:20px}.gus-storyboard-intro h3{color:var(--orange);font:400 27px 'Permanent Marker',cursive;margin:10px 0}.gus-storyboard-intro p{color:#55515c;font-size:13px;line-height:1.7;margin:9px 0}.gus-storyboard-intro img{display:block;max-height:340px;object-fit:contain;width:100%}.gus-animation{align-items:center;background:var(--purple);color:#fff;display:grid;gap:40px;grid-template-columns:.9fr 1.1fr;max-width:none;padding-left:max(25px,calc((100vw - 1110px)/2));padding-right:max(25px,calc((100vw - 1110px)/2))}.gus-animation .gus-eyebrow{color:#ffb18b}.gus-animation h2{color:#fff}.gus-animation h2 em{color:#ff8b5e}.gus-animation-copy>p:not(.gus-eyebrow){color:#eeebf3;font-size:14px;line-height:1.8;margin:20px 0}.gus-animation>img{background:#f8f7f1;border:7px solid white;box-shadow:8px 8px 0 var(--orange);display:block;max-height:590px;object-fit:contain;width:100%}.gus-tools{display:flex;flex-wrap:wrap;gap:8px}.gus-tools span{border:1px solid #ffffff70;color:white;font-size:9px;font-weight:700;letter-spacing:.12em;padding:8px 10px}.gus-documents{padding-bottom:85px}.gus-document-list{display:grid;gap:14px}.gus-document{background:#fff;border:1px solid #c9c4cf}.gus-document summary{align-items:center;color:var(--purple);cursor:pointer;display:flex;font:700 14px 'DM Sans',sans-serif;justify-content:space-between;list-style:none;padding:19px 22px}.gus-document summary::-webkit-details-marker{display:none}.gus-document summary b{color:var(--orange);font-size:22px}.gus-document[open] summary{border-bottom:1px solid #ddd8e1}.gus-document-actions{display:flex;gap:18px;padding:15px 20px}.gus-document-actions a{color:var(--purple);font-size:11px;font-weight:700;text-decoration:underline;text-underline-offset:3px}.gus-document iframe{background:#eceaf0;border:0;display:block;height:min(78vh,850px);width:100%}.gus-gallery{padding-top:80px}.gus-gallery-group{margin:42px 0 0}.gus-gallery-group h3{border-bottom:1px solid #4b329033;color:var(--purple);font:400 21px 'Permanent Marker',cursive;margin:0 0 15px;padding-bottom:9px}.gus-gallery-grid{display:grid;gap:16px;grid-template-columns:repeat(3,minmax(0,1fr))}.gus-gallery-card{background:#fff;border:1px solid #d2ced6;color:var(--purple);cursor:zoom-in;min-width:0;padding:8px;text-align:left;transition:transform .18s,box-shadow .18s}.gus-gallery-card:hover{box-shadow:4px 5px 0 var(--orange);transform:translateY(-3px)}.gus-gallery-card>span{align-items:center;background:#eeedf0;display:flex;height:clamp(180px,22vw,300px);justify-content:center;overflow:hidden}.gus-gallery-card img{height:100%;object-fit:contain;width:100%}.gus-gallery-card>b{align-items:center;display:flex;font:700 11px 'DM Sans',sans-serif;justify-content:space-between;min-height:45px;padding:9px 4px 2px;text-transform:uppercase}.gus-gallery-card i{color:var(--orange);font-size:17px;font-style:normal}.gus-footer{align-items:end;background:var(--purple);color:#fff;display:flex;justify-content:space-between;padding:55px clamp(25px,8vw,115px)}.gus-footer .gus-eyebrow{color:#ffab84}.gus-footer h2{color:#fff;font-size:clamp(3.2rem,6vw,5.7rem)}.gus-footer h2 em{color:#ff8b5e}.gus-footer>button{background:var(--orange);border:2px solid white;box-shadow:4px 4px 0 #17121f;color:var(--purple);cursor:pointer;font-size:11px;font-weight:700;padding:14px 18px;text-transform:uppercase}.gus-footer>button span{font-size:17px;margin-left:8px}.gus-lightbox{align-items:center;background:#17131df2;display:flex;inset:0;justify-content:center;padding:45px 75px;position:fixed;z-index:40}.gus-lightbox figure{margin:0;max-height:100%;max-width:1200px;text-align:center}.gus-lightbox figure img{max-height:calc(100vh - 105px);max-width:100%;object-fit:contain}.gus-lightbox figcaption{color:white;font:700 12px 'DM Sans',sans-serif;letter-spacing:.08em;margin-top:10px;text-transform:uppercase}.gus-lightbox-close,.gus-lightbox-arrow{background:var(--purple);border:1px solid #fff;color:white;cursor:pointer;height:44px;position:absolute;width:44px}.gus-lightbox-close{font-size:30px;right:20px;top:20px}.gus-lightbox-arrow{font-size:32px;top:50%;transform:translateY(-50%)}.gus-lightbox-arrow.prev{left:18px}.gus-lightbox-arrow.next{right:18px}
.gus-social-actions{display:flex;flex-wrap:wrap;gap:10px}.gus-footer .social-button{background:var(--purple);border:1px solid var(--purple);color:#fff;min-width:165px;align-items:center;display:inline-flex;font:700 11px 'DM Sans',sans-serif;gap:9px;justify-content:center;letter-spacing:.06em;min-height:48px;padding:0 16px;text-decoration:none;text-transform:uppercase}.gus-footer .social-icon{height:18px;width:18px}.gus-footer .social-button:hover{background:var(--orange);border-color:#fff;color:var(--purple)}.gus-footer .behance-button{background:#fff;border-color:#fff;color:var(--purple)}
@media(max-width:900px){.gus-hero{grid-template-columns:1fr .8fr}.gus-character-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.gus-character-card:last-child{grid-column:1/-1}.gus-process{gap:35px;grid-template-columns:1fr}.gus-process .gus-section-heading{position:static}.gus-storyboard-intro{grid-template-columns:1fr .7fr}}
@media(max-width:600px){.gus-header{padding:12px 17px}.gus-hero{gap:35px;grid-template-columns:1fr;min-height:auto;padding:60px 22px 75px}.gus-hero h1{font-size:clamp(4rem,17vw,6rem)}.gus-cover{justify-self:center;max-width:400px;width:84%}.gus-cover img{max-height:62vh}.gus-hero-number{bottom:23px;right:23px}.gus-section{padding:75px 22px}.gus-section-heading h2,.gus-animation h2{font-size:clamp(3.5rem,15vw,5rem)}.gus-story-layout{grid-template-columns:1fr}.gus-author-line{flex-direction:column;gap:7px}.gus-character-grid{grid-template-columns:1fr}.gus-character-card:last-child{grid-column:auto}.gus-character-image{height:280px}.gus-storyboard-intro{grid-column:auto;grid-template-columns:1fr;padding:18px}.gus-storyboard-intro img{max-height:270px}.gus-animation{grid-template-columns:1fr;padding:60px 22px}.gus-document-actions{flex-direction:column;gap:10px}.gus-document iframe{height:65vh}.gus-gallery-grid{grid-template-columns:1fr}.gus-gallery-card>span{height:70vw;max-height:380px}.gus-footer{align-items:flex-start;flex-direction:column;gap:28px;padding:40px 22px}.gus-lightbox{padding:45px 12px}.gus-lightbox-arrow.prev{left:6px}.gus-lightbox-arrow.next{right:6px}.gus-lightbox-arrow{height:37px;width:37px}.gus-lightbox figure img{max-height:calc(100vh - 125px)}}
`;

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
.behance-button{background:#f5f5f0;border:1px solid #f5f5f0;color:#111}
.behance-button:hover{background:#d9d5e3;color:#111}
.gus-footer .gus-social-actions{margin-top:30px}
.gus-footer .social-button{background:var(--purple);border:1px solid var(--purple);color:#fff;min-width:165px}
.gus-footer .social-button:hover{background:var(--orange);border-color:var(--purple);color:var(--purple)}
.gus-footer .behance-button{background:#fff;border-color:var(--purple);color:var(--purple)}
`;
