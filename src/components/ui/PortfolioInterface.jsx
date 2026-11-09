import { useEffect, useRef, useState } from 'react';
import { sceneInteractions } from '../../config/sceneInteractions';
import SocialLinks from './SocialLinks';
import { projects } from '../../data/projects';
import './project-three.css';

function Doodles() {
    return <div aria-hidden="true" className="doodles">
        <span className="doodle star-one">*</span><span className="doodle smile">:)</span>
        <span className="doodle arrow">-&gt;</span><span className="doodle spark">+</span>
        <span className="tape tape-one" /><span className="tape tape-two" /></div>;
}

function ProjectList({ onOpenProject }) {
    return <section aria-label="Proyectos de David Santiago Amaya Reyes" className="project-list">{projects.map((project, index) => <article className={`project-card project-card-${index + 1}`} key={project.slug}><span className="card-index">0{index + 1}</span>{project.cover ? <img className="project-card-cover" src={project.cover} alt={`Portada de ${project.title}`} /> : <div className="polaroid-hole" />}<p>{project.category}</p><h3>{project.title}</h3><span className="card-summary">{project.summary}</span><button onClick={() => onOpenProject(project)}>Abrir proyecto <b>-&gt;</b></button></article>)}</section>;
}

function GalleryHud({ onCloseInteraction, onOpenPortfolio }) {
    return <aside aria-live="polite" className="gallery-hud"><button aria-label="Cerrar galería" className="close-button" onClick={onCloseInteraction}>x</button><p>GALERÍA 3D</p><h2>Elige una pieza<br />en el espacio.</h2><span>Seis proyectos flotan al fondo del escritorio. Selecciona uno para abrir su caso.</span><button className="text-button" onClick={onOpenPortfolio}>Ver lista completa</button></aside>;
}

function SceneProjectPanel({ onClearSceneProject, onOpenProject, project }) {
    return <aside aria-live="polite" className={`scene-project-panel paper-sheet${project.cover ? ' has-cover' : ''}`}><button aria-label="Volver a la galería" className="close-button" onClick={onClearSceneProject}>x</button>{project.cover && <img className="scene-project-cover" src={project.cover} alt={`Portada de ${project.title}`} />}<span className="detail-sticker">ESTACIÓN DE TRABAJO</span><p>{project.category}</p><h2>{project.title}</h2><span>{project.summary}</span><h3>Elementos relacionados</h3><ul>{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul><button className="text-button" onClick={() => onOpenProject(project)}>Abrir ficha completa</button></aside>;
}

function ObjectPanel({ interaction, onCloseInteraction, onOpenPortfolio }) {
    const isKeyboard = interaction === sceneInteractions.keyboard;
    return <aside aria-live="polite" className="interaction-panel paper-sheet"><button aria-label="Cerrar" className="close-button" onClick={onCloseInteraction}>x</button><p>{isKeyboard ? 'HERRAMIENTAS DIGITALES' : 'ILUSTRACIÓN Y PROCESO'}</p><h2>{interaction.label.split(' - ')[1]}</h2><div className="artwork-panel"><div className="artwork-swatch">{isKeyboard ? <>Atajos,<br />ritmo y<br />proceso.</> : <>Bocetos,<br />color y<br />personajes.</>}</div><button onClick={onOpenPortfolio}>Ver portafolio completo -&gt;</button></div></aside>;
}

function About() {
    return <section className="about-card paper-sheet"><span className="intro-tag">SOBRE MÍ</span><h2>DAVID SANTIAGO<br /><em>AMAYA REYES</em></h2><p>Estudiante de Ingeniería Multimedia con formación en diseño gráfico, ilustración y desarrollo web. Apasionado por crear experiencias digitales innovadoras y funcionales. Experiencia en proyectos de branding, diseño de interfaces y desarrollo de aplicaciones web.</p><span className="about-stamp">DISEÑO<br />+ 3D<br />+ WEB</span></section>;
}

function BattleProjectCaseStudy({ onCloseProject, onReturnToScene, project }) {
    const [activeImage, setActiveImage] = useState(null);
    const imageIndex = project.gallery.findIndex(({ src }) => src === activeImage?.src);
    useEffect(() => {
        if (!activeImage) return undefined;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setActiveImage(null);
            if (event.key === 'ArrowRight') setActiveImage(project.gallery[(imageIndex + 1) % project.gallery.length]);
            if (event.key === 'ArrowLeft') setActiveImage(project.gallery[(imageIndex - 1 + project.gallery.length) % project.gallery.length]);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeImage, imageIndex, project.gallery]);

    const groups = project.gallery.reduce((result, image) => {
        (result[image.section] ??= []).push(image);
        return result;
    }, {});

    return <main className="battle-project-page">
        <header className="battle-header"><button className="battle-brand" onClick={onReturnToScene}><b>03</b> DAVID SANTIAGO AMAYA REYES</button><button className="battle-back" onClick={onCloseProject}>Todos los proyectos <span>↗</span></button></header>
        <section className="battle-hero" id="battle-start">
            <img src={project.cover} alt="Ilustración monocromática de la Batalla del Pantano de Vargas" />
            <div className="battle-hero-shade" />
            <div className="battle-hero-copy"><p>PROYECTO MULTIMEDIA <i>—</i> PORTAFOLIO 2026</p><h1>Narrativa web<br /><em>interactiva.</em></h1><span>{project.summary}</span><a href="#battle-about">Descubrir el proyecto <b>↓</b></a></div>
            <span className="battle-hero-index">03 <i /> 06</span>
        </section>
        <div className="battle-paper-flow">
            <section className="battle-section" id="battle-about">
                <div className="battle-heading"><p>01 / EL PROYECTO</p><h2>Memoria que<br /><em>se recorre.</em></h2></div>
                <div className="battle-about-grid"><p>{project.concept}</p><p>{project.objective}</p></div>
                <div className="battle-fact-strip"><span>25 JULIO 1819</span><i /> <span>PAIPA, BOYACÁ</span><i /> <span>HISTORIA Y CULTURA</span></div>
            </section>
            <section className="battle-section battle-process" id="battle-process">
                <div className="battle-heading"><p>02 / DISEÑO Y DESARROLLO</p><h2>Una experiencia<br /><em>por capítulos.</em></h2></div>
                <div className="battle-contributions">{project.contributions.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
            </section>
            <section className="battle-section battle-gallery" id="battle-gallery">
                <div className="battle-heading"><p>03 / GALERÍA</p><h2>Historia en<br /><em>imágenes.</em></h2><span>Escenas, navegación y proceso de desarrollo.</span></div>
                {Object.entries(groups).map(([group, images]) => <div className="battle-gallery-group" key={group}><h3>{group}</h3><div className="battle-gallery-grid">{images.map((image, index) => <button className="battle-photo" key={image.src} onClick={() => setActiveImage(image)} aria-label={`Ampliar imagen: ${image.title}`}><span><img src={image.src} alt={image.alt} loading="lazy" /></span><b><i>0{index + 1}</i>{image.title}<em>↗</em></b></button>)}</div></div>)}
            </section>
            <section className="battle-closing">
                <div><p>04 / PUBLICACIÓN Y AUTORÍA</p><h2>Del archivo<br />a la experiencia.</h2><span>David Santiago Amaya Reyes · Estudiante de Ingeniería Multimedia</span><small>Investigación histórica, diseño de contenidos, ilustración y desarrollo frontend.</small><div className="battle-tech">{project.tools.map((tool) => <b key={tool}>{tool}</b>)}</div></div>
                <div className="battle-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visitar experiencia <span>↗</span></a>}{project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer">Ver repositorio <span>↗</span></a>}</div>
            </section>
            <footer className="battle-footer"><span>BATALLA DEL PANTANO DE VARGAS · NARRATIVA WEB INTERACTIVA</span><SocialLinks className="detail-social" /></footer>
        </div>
        {activeImage && <div className="battle-lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={() => setActiveImage(null)}><button aria-label="Cerrar imagen" onClick={() => setActiveImage(null)}>×</button><figure onClick={(event) => event.stopPropagation()}><img src={activeImage.src} alt={activeImage.alt} /><figcaption>{activeImage.title}</figcaption></figure><button className="battle-lightbox-prev" aria-label="Imagen anterior" onClick={(event) => { event.stopPropagation(); setActiveImage(project.gallery[(imageIndex - 1 + project.gallery.length) % project.gallery.length]); }}>‹</button><button className="battle-lightbox-next" aria-label="Imagen siguiente" onClick={(event) => { event.stopPropagation(); setActiveImage(project.gallery[(imageIndex + 1) % project.gallery.length]); }}>›</button></div>}
    </main>;
}

function CaronteProjectCaseStudy({ onCloseProject, onReturnToScene, project }) {
    const [activeImage, setActiveImage] = useState(null);
    const activeIndex = project.gallery.findIndex(({ src }) => src === activeImage?.src);
    const animaticRef = useRef(null);
    const finalRef = useRef(null);
    useEffect(() => {
        if (!activeImage) return undefined;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setActiveImage(null);
            if (event.key === 'ArrowRight') setActiveImage(project.gallery[(activeIndex + 1) % project.gallery.length]);
            if (event.key === 'ArrowLeft') setActiveImage(project.gallery[(activeIndex - 1 + project.gallery.length) % project.gallery.length]);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeImage, activeIndex, project.gallery]);
    const galleryGroups = project.gallery.reduce((result, image) => {
        (result[image.section] ??= []).push(image);
        return result;
    }, {});
    const fullscreen = (ref) => {
        const video = ref.current;
        if (video?.requestFullscreen) video.requestFullscreen();
        else if (video?.webkitRequestFullscreen) video.webkitRequestFullscreen();
    };

    return <main className="caronte-project-page">
        <aside className="caronte-follow-characters" aria-hidden="true"><img className="caronte-follow-boatman" src={`${import.meta.env.BASE_URL}caronte/caronte-floating.png`} alt="" /><img className="caronte-follow-dog" src={`${import.meta.env.BASE_URL}caronte/perrito-floating.png`} alt="" /></aside>
        <header className="caronte-header"><button className="caronte-brand" onClick={onReturnToScene}><span>DB</span> DAVID SANTIAGO AMAYA REYES</button><nav aria-label="Secciones de Caronte"><a href="#caronte-historia">Historia</a><a href="#caronte-personajes">Personajes</a><a href="#caronte-proceso">Proceso 3D</a><a href="#caronte-animatic">Animático</a><a href="#caronte-final">Final</a><a href="#caronte-galeria">Galería</a></nav><button className="caronte-back" onClick={onCloseProject}>Todos los proyectos <b>↗</b></button></header>

        <section className="caronte-hero" id="caronte-inicio">
            <div className="caronte-hero-copy"><p className="caronte-eyebrow"><span>PROYECTO 05</span> · ANIMACIÓN 3D</p><h1>CARONTE<em>.</em></h1><p className="caronte-hero-subtitle">Una travesía al inframundo, interrumpida por una pequeña vida.</p><p className="caronte-hero-description">Un cortometraje 3D contado sin palabras, a través de miradas, gestos y ladridos.</p><a className="caronte-hero-link" href="#caronte-historia">Conocer la historia <span>↓</span></a></div>
            <figure className="caronte-cover"><img src={project.cover} alt="Portada del portafolio 2026 con una escena de Caronte y el perrito en la isla" /><figcaption>ANIMACIÓN 3D · BLENDER</figcaption></figure>
            <span className="caronte-hero-stamp">UNA HISTORIA<br />SIN PALABRAS</span>
        </section>

        <div className="caronte-paper-flow">
            <section className="caronte-section caronte-story" id="caronte-historia"><div className="caronte-section-heading"><p className="caronte-eyebrow">01 / SINOPSIS</p><h2>La rutina se<br /><em>rompe.</em></h2></div><div className="caronte-story-copy"><p>{project.concept}</p><p>{project.objective}</p><span className="caronte-story-note">UNA AVENTURA CÓMICA RUMBO A LAS PUERTAS DEL INFRAMUNDO</span></div></section>

            <section className="caronte-section caronte-cast" id="caronte-personajes"><div className="caronte-section-heading"><p className="caronte-eyebrow">02 / PERSONAJES</p><h2>Dos viajeros,<br /><em>dos mundos.</em></h2></div><div className="caronte-cast-grid">
                <article className="caronte-character caronte-character-main"><figure><img src={`${import.meta.env.BASE_URL}caronte/caronte-personaje-frontal.png`} alt="Caronte, esqueleto barquero" /></figure><div><span>01 · EL BARQUERO</span><h3>Caronte</h3><p>{project.caronteDescription}</p></div></article>
                <article className="caronte-character caronte-character-dog"><figure><img src={`${import.meta.env.BASE_URL}caronte/perrito-personaje-frontal.png`} alt="El perrito que llega en el misterioso paquete" /></figure><div><span>02 · EL PASAJERO</span><h3>El perrito</h3><p>{project.dogDescription}</p></div></article>
            </div></section>

            <section className="caronte-section caronte-process" id="caronte-proceso"><div className="caronte-section-heading"><p className="caronte-eyebrow">03 / MODELADO Y ANIMACIÓN</p><h2>De la forma<br /><em>al movimiento.</em></h2><p>{project.production}</p></div><div className="caronte-process-timeline">{[
                ['01', 'Bocetos del personaje', 'Exploración inicial de las formas y siluetas de Caronte y el perrito.'],
                ['02', 'Topología y malla low-poly', 'Construcción de los modelos 3D y desarrollo de la malla low-poly.'],
                ['03', 'Rig y controles', 'Preparación de rigs y controles para el cuerpo y los ojos de los personajes.'],
                ['04', 'Escenario 3D de la isla', 'Modelado base, texturizado y render final del escenario con océano.'],
                ['05', 'Animación', 'Key poses, extreme poses, breakdowns, secondary poses e inbetweens.'],
                ['06', 'Timing, spacing y pulido', 'Ajuste del tiempo y el espaciado entre poses, con una etapa final de pulido.']
            ].map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
                <div className="caronte-image-stream">{project.gallery.filter(({ section }) => section === 'Modelado y rig').map((image) => <button key={image.src} onClick={() => setActiveImage(image)} aria-label={`Ampliar: ${image.title}`}><img src={image.src} alt={image.alt} loading="lazy" /><span>{image.title} <b>↗</b></span></button>)}</div>
            </section>

            <section className="caronte-section caronte-island"><div className="caronte-section-heading"><p className="caronte-eyebrow">04 / ESCENARIO 3D</p><h2>La isla,<br /><em>paso a paso.</em></h2><p>El escenario se desarrolla desde la malla base hasta el render final con océano.</p></div><div className="caronte-island-steps">{project.islandStages.map((stage, index) => <figure key={stage.src}><span>0{index + 1} / {stage.title}</span><button onClick={() => setActiveImage({ ...stage, title: stage.title })} aria-label={`Ampliar: ${stage.title}`}><img src={stage.src} alt={stage.alt} loading="lazy" /></button><figcaption>{stage.title}</figcaption></figure>)}</div></section>

            <section className="caronte-video-section" id="caronte-animatic"><div className="caronte-video-copy"><p className="caronte-eyebrow">05 / ANIMÁTICO</p><h2>Antes de<br /><em>la travesía.</em></h2><p>Una primera versión para recorrer el ritmo y la secuencia de la historia.</p><a href={project.animatic} download>Descargar animático <span>↓</span></a></div><div className="caronte-video-frame"><span className="caronte-frame-label">ANIMATIC · CARONTE</span><video ref={animaticRef} controls playsInline preload="metadata" poster={`${import.meta.env.BASE_URL}caronte/isla-render-oceano.png`} aria-label="Animático de Caronte"><source src={project.animatic} type="video/x-matroska" />Tu navegador no pudo reproducir el archivo Matroska. Usa el botón para descargar el animático.</video><button onClick={() => fullscreen(animaticRef)}>Ver a pantalla completa <span>⛶</span></button></div></section>

            <section className="caronte-video-section caronte-final-section" id="caronte-final"><div className="caronte-video-copy"><p className="caronte-eyebrow">06 / RESULTADO FINAL</p><h2>El viaje<br /><em>completo.</em></h2><p>El cortometraje final de Caronte. Reprodúcelo aquí o expándelo a pantalla completa.</p><a href={project.finalVideo} target="_blank" rel="noopener noreferrer">Abrir video aparte <span>↗</span></a></div><div className="caronte-video-frame"><span className="caronte-frame-label">CARONTE · ANIMACIÓN 3D FINAL</span><video ref={finalRef} controls playsInline preload="metadata" poster={`${import.meta.env.BASE_URL}caronte/portada.png`} aria-label="Cortometraje final de Caronte"><source src={project.finalVideo} type="video/mp4" />Tu navegador no pudo reproducir el video.</video><button onClick={() => fullscreen(finalRef)}>Ver a pantalla completa <span>⛶</span></button></div></section>

            <section className="caronte-section caronte-gallery" id="caronte-galeria"><div className="caronte-section-heading"><p className="caronte-eyebrow">07 / CUADERNO VISUAL</p><h2>Personajes,<br /><em>escenario y proceso.</em></h2><p>Explora los modelos, vistas y capturas de trabajo. Selecciona una imagen para verla en grande.</p></div>{Object.entries(galleryGroups).map(([group, images]) => <div className="caronte-gallery-group" key={group}><h3>{group}</h3><div className="caronte-gallery-grid">{images.map((image, index) => <button key={image.src} onClick={() => setActiveImage(image)} aria-label={`Ampliar: ${image.title}`}><span><img src={image.src} alt={image.alt} loading="lazy" /></span><b><i>{String(index + 1).padStart(2, '0')}</i>{image.title}<em>↗</em></b></button>)}</div></div>)}</section>

            <section className="caronte-credits"><div><p className="caronte-eyebrow">AUTORÍA Y HERRAMIENTAS</p><h2>Hecho en<br /><em>Blender.</em></h2><span>{project.author} · {project.role}</span><p>{project.production}</p><div className="caronte-tech">{project.tools.map((tool) => <b key={tool}>{tool}</b>)}</div></div><figure><img src={`${import.meta.env.BASE_URL}caronte/caronte-y-perrito-escena.png`} alt="Caronte y el perrito juntos en una escena" loading="lazy" /></figure></section>
            <footer className="caronte-footer"><div><span>PROYECTO 05 · ANIMACIÓN 3D</span><h2>Gracias por<br /><em>acompañarlos.</em></h2><SocialLinks className="social-actions caronte-social-actions" /></div><button onClick={onReturnToScene}>Volver al escritorio 3D <span>↗</span></button></footer>
        </div>
        {activeImage && <div className="caronte-lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={() => setActiveImage(null)}><button className="caronte-lightbox-close" aria-label="Cerrar imagen" onClick={() => setActiveImage(null)}>×</button><button className="caronte-lightbox-prev" aria-label="Imagen anterior" onClick={(event) => { event.stopPropagation(); setActiveImage(project.gallery[(activeIndex - 1 + project.gallery.length) % project.gallery.length]); }}>‹</button><figure onClick={(event) => event.stopPropagation()}><img src={activeImage.src} alt={activeImage.alt} /><figcaption>{activeImage.title}</figcaption></figure><button className="caronte-lightbox-next" aria-label="Imagen siguiente" onClick={(event) => { event.stopPropagation(); setActiveImage(project.gallery[(activeIndex + 1) % project.gallery.length]); }}>›</button></div>}
    </main>;
}

function ProjectCaseStudy({ onCloseProject, onReturnToScene, project }) {
    if (project.slug === 'caronte') return <CaronteProjectCaseStudy onCloseProject={onCloseProject} onReturnToScene={onReturnToScene} project={project} />;
    if (project.slug === 'batalla-pantano-de-vargas') return <BattleProjectCaseStudy onCloseProject={onCloseProject} onReturnToScene={onReturnToScene} project={project} />;
    const gallerySections = project.gallery?.reduce((sections, image) => {
        sections[image.section] ??= [];
        sections[image.section].push(image);
        return sections;
    }, {});

    return <article className={`project-detail paper-sheet${project.slug === 'batalla-pantano-de-vargas' ? ' project-detail-battle' : ''}`}>
        <div className="case-topline"><span className="detail-sticker">CASO DE ESTUDIO</span><span>{project.year || 'PORTAFOLIO'}</span></div>
        <button className="text-button back-button" onClick={onCloseProject}>&lt;- Todos los proyectos</button>
        <p className="case-category">{project.category}</p>
        <h1>{project.fullTitle || project.title}</h1>
        <p className="summary">{project.summary}</p>
        <div className="case-meta">
            <div><span>Autor</span><strong>{project.author || 'David Santiago Amaya Reyes'}</strong></div>
            <div><span>Perfil</span><strong>{project.role || 'Diseño y desarrollo multimedia'}</strong></div>
            <div><span>Año</span><strong>{project.year || '2026'}</strong></div>
        </div>

        {project.cover && <figure className="project-cover-figure">
            <img fetchPriority="high" src={project.cover} alt={`Portada de ${project.title}`} />
            <figcaption>PORTADA DEL PROYECTO</figcaption>
        </figure>}

        {(project.concept || project.objective) && <section className="case-concept">
            <div><span className="section-eyebrow">01 / IDEA</span><h2>Concepto</h2><p>{project.concept}</p></div>
            <div><span className="section-eyebrow">02 / PROPÓSITO</span><h2>Objetivo</h2><p>{project.objective}</p></div>
        </section>}

        {project.contributions?.length > 0 && <section className="case-contributions">
            <div className="case-section-heading"><span className="section-eyebrow">03 / PROCESO</span><h2>Mi aporte</h2></div>
            <div className="contribution-grid">{project.contributions.map((item) => <article className="contribution-card" key={item.number}>
                <span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p>
            </article>)}</div>
        </section>}

        {gallerySections && <section className="case-gallery">
            <div className="case-section-heading"><span className="section-eyebrow">04 / REGISTRO VISUAL</span><h2>{project.slug === 'batalla-pantano-de-vargas' ? 'Historia en imágenes' : 'Del prototipo al proyecto'}</h2><p>{project.slug === 'batalla-pantano-de-vargas' ? 'Escenas históricas, capítulos y vistas de la experiencia digital.' : 'Simulación, modelado y pruebas del control físico.'}</p></div>
            {Object.entries(gallerySections).map(([section, images]) => <div className="gallery-group" key={section}>
                <h3>{section}</h3>
                <div className="project-images">{images.map((image, index) => <figure className="project-image-card" key={image.src}>
                    <img loading="lazy" decoding="async" src={image.src} alt={image.alt} />
                    <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{image.title}</figcaption>
                </figure>)}</div>
            </div>)}
        </section>}

        {(project.repository || project.liveUrl) && <section className="case-repository"><div><span className="section-eyebrow">CÓDIGO Y EXPERIENCIA</span><h2>Explora el proyecto</h2></div>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visitar experiencia <span aria-hidden="true">↗</span></a>}{project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer">Ver repositorio <span aria-hidden="true">↗</span></a>}</section>}
        <div className="detail-footer"><div><h2>Herramientas</h2><ul>{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div><span className="detail-doodle">*</span></div>
        <SocialLinks className="social-actions detail-social" />
    </article>;
}

function TraditionalPortfolio({ onCloseProject, onOpenProject, onReturnToScene, project }) {
    if (project?.slug === 'batalla-pantano-de-vargas') return <BattleProjectCaseStudy onCloseProject={onCloseProject} onReturnToScene={onReturnToScene} project={project} />;
    if (project?.slug === 'caronte') return <CaronteProjectCaseStudy onCloseProject={onCloseProject} onReturnToScene={onReturnToScene} project={project} />;
    return <div className="traditional-portfolio"><Doodles /><header className="portfolio-header"><button className="wordmark" onClick={onReturnToScene}><i>D</i>avid Santiago Amaya Reyes</button><button className="text-button" onClick={onReturnToScene}>Volver al escritorio</button></header>{project ? <ProjectCaseStudy onCloseProject={onCloseProject} project={project} /> : <><section className="portfolio-intro paper-sheet"><span className="intro-tag">PORTAFOLIO 2026</span><p>HOLA, SOY DAVID</p><h1>Ideas que<br /><em>hacen ruido.</em></h1><span>Diseño, ilustración, 3D y experiencias digitales hechas con intención, curiosidad y mucho marcador.</span><div className="intro-scribble">CREAR<br />SIN MIEDO</div></section><About /><ProjectList onOpenProject={onOpenProject} /></>}</div>;
}

export function PortfolioInterface({ activeId, onClearSceneProject, onCloseInteraction, onCloseProject, onOpenPortfolio, onOpenProject, onReturnToScene, project, sceneProject, showPortfolio }) {
    const interaction = activeId ? sceneInteractions[activeId] : null;
    if (showPortfolio) return <TraditionalPortfolio onCloseProject={onCloseProject} onOpenProject={onOpenProject} onReturnToScene={onReturnToScene} project={project} />;

    const isMusic = activeId === 'music';
    return <><Doodles /><header className="scene-header"><button className="wordmark" onClick={onCloseInteraction}><i>D</i>AVID SANTIAGO AMAYA REYES</button><button className="text-button" onClick={onOpenPortfolio}>Portafolio en papel</button></header><div className="scene-copy"><span className="scribble-label">HOLA!</span><p>{sceneProject ? 'PROYECTO SELECCIONADO' : isMusic ? 'MÚSICA AMBIENTAL' : activeId === 'projects' ? 'EXPLORA LA GALERÍA' : 'DISEÑO / ILUSTRACIÓN / 3D'}</p><h1>{sceneProject ? <>{sceneProject.title}<br /><em>en proceso.</em></> : isMusic ? <>Sube el<br /><em>volumen.</em></> : activeId === 'projects' ? <>Proyectos<br /><em>en el aire.</em></> : <>Ideas con<br /><em>mucho color.</em></>}</h1><span>{sceneProject ? 'El monitor activo muestra la estación de trabajo asociada.' : isMusic ? 'Usa los tres botones de la tarjeta para cambiar o pausar la canción.' : activeId === 'projects' ? 'Mueve la vista y selecciona una tarjeta.' : 'Toca los modelos para explorar el estudio.'}</span></div>{sceneProject ? <SceneProjectPanel onClearSceneProject={onClearSceneProject} onOpenProject={onOpenProject} project={sceneProject} /> : interaction && (activeId === 'projects' ? <GalleryHud onCloseInteraction={onCloseInteraction} onOpenPortfolio={onOpenPortfolio} /> : !isMusic && <ObjectPanel interaction={interaction} onCloseInteraction={onCloseInteraction} onOpenPortfolio={onOpenPortfolio} />)}</>;
}
