import { useEffect, useState } from 'react';

import { lasBotasProject as project } from '../../../data/lasBotasProject';
import SocialLinks from './SocialLinks';
import './LasBotasProjectPage.css';

function ImageGallery({ onSelect }) {
    const groups = project.gallery.reduce((result, image) => {
        (result[image.category] ??= []).push(image);
        return result;
    }, {});

    return Object.entries(groups).map(([category, images]) => <section className="botas-gallery-group" key={category}>
        <h3><span>{category}</span><i aria-hidden="true">✳</i></h3>
        <div className="botas-gallery-grid">{images.map((image, index) => <button className="botas-photo" key={image.src} onClick={() => onSelect(image)} aria-label={`Ampliar: ${image.title}`}>
            <span className="botas-photo-image"><img src={image.src} alt={image.alt} loading="lazy" /></span>
            <span className="botas-photo-caption"><b>0{index + 1}</b>{image.title}<i aria-hidden="true">↗</i></span>
        </button>)}</div>
    </section>);
}

export default function LasBotasProjectPage({ onReturn }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const activeIndex = project.gallery.findIndex((image) => image.src === activeImage?.src);

    useEffect(() => {
        if (!activeImage) return undefined;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setActiveImage(null);
            if (event.key === 'ArrowRight') setActiveImage(project.gallery[(activeIndex + 1) % project.gallery.length]);
            if (event.key === 'ArrowLeft') setActiveImage(project.gallery[(activeIndex - 1 + project.gallery.length) % project.gallery.length]);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeImage, activeIndex]);

    const navigateHome = () => {
        window.history.pushState({}, '', '/');
        onReturn();
    };

    return <main className="botas-page">
        <header className="botas-header">
            <button className="botas-wordmark" onClick={navigateHome} aria-label="Volver al portafolio"><span>DB</span> DAVID SANTIAGO AMAYA</button>
            <button className={`botas-menu${menuOpen ? ' is-open' : ''}`} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i /><i /></button>
            {menuOpen && <nav className="botas-menu-panel" aria-label="Secciones del proyecto">
                <a href="#sobre-botas" onClick={() => setMenuOpen(false)}>Sobre el proyecto</a><a href="#mi-rol" onClick={() => setMenuOpen(false)}>Mi rol</a><a href="#proceso-botas" onClick={() => setMenuOpen(false)}>Proceso</a><a href="#galeria-botas" onClick={() => setMenuOpen(false)}>Galería</a><a href="#creditos-botas" onClick={() => setMenuOpen(false)}>Créditos</a>
            </nav>}
        </header>

        <section className="botas-hero" id="inicio-botas">
            <div className="botas-hero-copy">
                <p className="botas-eyebrow"><span>PROYECTO 2</span> · NARRATIVA INTERACTIVA</p>
                <h1>Las botas<br /><em>viejas de papá</em></h1>
                <p className="botas-subtitle">{project.subtitle}</p>
                <p className="botas-hero-description">{project.description}</p>
                <div className="botas-school"><b>{project.institution}</b><span>{project.program}</span><small>{project.accreditation}</small></div>
                <a className="botas-button" href="#sobre-botas">Bajar por la historia <span aria-hidden="true">↓</span></a>
            </div>
            <figure className="botas-cover"><img src={project.cover} alt="Portada de Las botas viejas de papá con una casa campesina boyacense y el sello del proyecto" /><figcaption>CUENTO DE MANUEL ALEJANDRO ESTUPIÑÁN · LA PERA DE ORO</figcaption></figure>
            <span className="botas-hero-note">UN CUENTO QUE SE CAMINA</span>
        </section>

        <section className="botas-section botas-about" id="sobre-botas">
            <div className="botas-section-title"><p className="botas-eyebrow">01 / SOBRE EL PROYECTO</p><h2>Una historia<br /><em>para recorrer.</em></h2></div>
            <div className="botas-about-grid">
                <article className="botas-torn-paper"><span>EL CUENTO</span><p>{project.source}</p><p>{project.about}</p></article>
                <div className="botas-about-copy"><h3>La experiencia</h3><p>{project.description}</p><p>La lectura avanza hacia abajo, responde a la inclinación del teléfono y permite elegir desde la mirada de quién vivir la historia.</p><div className="botas-award">CONCURSO DEPARTAMENTAL<br /><b>LA PERA DE ORO</b></div></div>
            </div>
        </section>

        <section className="botas-section botas-role" id="mi-rol">
            <div className="botas-section-title"><p className="botas-eyebrow">02 / MI ROL</p><h2>Línea, tinta<br /><em>y color.</em></h2></div>
            <div className="botas-role-card"><div className="botas-role-tag">DAVID SANTIAGO AMAYA · LINEART + COLOR</div><p>{project.roleDescription}</p><div className="botas-contribution"><span>RESUMEN DE APORTE</span><b>{project.contribution}</b></div></div>
        </section>

        <section className="botas-section botas-process" id="proceso-botas">
            <div className="botas-section-title"><p className="botas-eyebrow">03 / PROCESO</p><h2>Del guion<br /><em>a la pantalla.</em></h2><p>Etapas del desarrollo de la narrativa interactiva.</p></div>
            <ol className="botas-timeline">{project.process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b></li>)}</ol>
        </section>

        <section className="botas-section botas-lineart" id="lineart-botas">
            <div className="botas-section-title"><p className="botas-eyebrow">04 / PROCESO DE LINEART</p><h2>Del boceto<br /><em>a una línea clara.</em></h2><p>{project.lineart}</p></div>
            <div className="botas-lineart-details">{project.lineartSteps.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
            <figure className="botas-comparison"><img src={project.gallery[2].src} alt={project.gallery[2].alt} loading="lazy" /><figcaption><span>SKETCH</span><i>→</i><span>LINEART</span><i>→</i><span>COLOR FINAL</span></figcaption></figure>
        </section>

        <section className="botas-section botas-gallery-section" id="galeria-botas">
            <div className="botas-section-title"><p className="botas-eyebrow">05 / GALERÍA DEL PROCESO</p><h2>Personajes,<br /><em>objetos y memoria.</em></h2><p>Sketches, lineart y acabados de color del proyecto.</p></div>
            <ImageGallery onSelect={setActiveImage} />
        </section>

        <section className="botas-section botas-result" id="resultado-botas">
            <div className="botas-result-copy"><p className="botas-eyebrow">06 / RESULTADO FINAL</p><h2>Una narración<br /><em>que se mueve.</em></h2><p>{project.result}</p><div className="botas-contribution"><span>MI APORTE</span><b>{project.contribution}</b></div><a className="botas-button" href="#sobre-botas">Ver proyecto interactivo <span aria-hidden="true">↗</span></a></div>
            <figure className="botas-final-image"><img src={project.gallery[2].src} alt="Proceso de las botas en sketch, lineart y color final" loading="lazy" /><figcaption>SKETCH · LINEART · COLOR</figcaption></figure>
        </section>

        <section className="botas-section botas-credits" id="creditos-botas">
            <div className="botas-section-title"><p className="botas-eyebrow">07 / EQUIPO Y CRÉDITOS</p><h2>Una historia<br /><em>hecha en equipo.</em></h2><p>{project.institution} · {project.program} · {project.course}</p></div>
            <ul className="botas-team">{project.team.map((member) => <li key={member}>{member}</li>)}</ul>
            <div className="botas-institution-note"><span>UNIVERSIDAD DE BOYACÁ</span><b>Concurso Departamental de Cuento<br />La Pera de Oro</b></div>
        </section>

        <footer className="botas-footer"><div><p className="botas-eyebrow">NARRATIVA INTERACTIVA · PROYECTO 2</p><h2>Las botas<br /><em>viejas de papá.</em></h2><SocialLinks /></div><button className="botas-return" onClick={navigateHome}>Volver al portafolio <span aria-hidden="true">↗</span></button></footer>

        {activeImage && <div className="botas-lightbox" role="dialog" aria-modal="true" aria-label={`Vista ampliada: ${activeImage.title}`} onClick={() => setActiveImage(null)}>
            <button className="botas-lightbox-close" onClick={() => setActiveImage(null)} aria-label="Cerrar imagen">×</button>
            <button className="botas-lightbox-arrow prev" onClick={(event) => { event.stopPropagation(); setActiveImage(project.gallery[(activeIndex - 1 + project.gallery.length) % project.gallery.length]); }} aria-label="Imagen anterior">‹</button>
            <figure onClick={(event) => event.stopPropagation()}><img src={activeImage.src} alt={activeImage.alt} /><figcaption>{activeImage.title}</figcaption></figure>
            <button className="botas-lightbox-arrow next" onClick={(event) => { event.stopPropagation(); setActiveImage(project.gallery[(activeIndex + 1) % project.gallery.length]); }} aria-label="Imagen siguiente">›</button>
        </div>}
    </main>;
}
