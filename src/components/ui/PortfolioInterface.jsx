import { sceneInteractions } from '../../config/sceneInteractions';
import SocialLinks from './SocialLinks';
import { projects } from '../../data/projects';

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

function ProjectCaseStudy({ onCloseProject, project }) {
    const gallerySections = project.gallery?.reduce((sections, image) => {
        sections[image.section] ??= [];
        sections[image.section].push(image);
        return sections;
    }, {});

    return <article className="project-detail paper-sheet">
        <div className="case-topline"><span className="detail-sticker">CASO DE ESTUDIO</span><span>{project.year || 'PORTAFOLIO'}</span></div>
        <button className="text-button back-button" onClick={onCloseProject}>&lt;- Todos los proyectos</button>
        <p className="case-category">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="summary">{project.summary}</p>
        <div className="case-meta">
            <div><span>Autor</span><strong>{project.author || 'David Santiago Amaya Reyes'}</strong></div>
            <div><span>Perfil</span><strong>{project.role || 'Diseño y desarrollo multimedia'}</strong></div>
            <div><span>Año</span><strong>{project.year || '2026'}</strong></div>
        </div>

        {project.cover && <figure className="project-cover-figure">
            <img fetchPriority="high" src={project.cover} alt={`Portada de ${project.title}: barco pirata en el mar`} />
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
            <div className="case-section-heading"><span className="section-eyebrow">04 / REGISTRO VISUAL</span><h2>Del prototipo al proyecto</h2><p>Simulación, modelado y pruebas del control físico.</p></div>
            {Object.entries(gallerySections).map(([section, images]) => <div className="gallery-group" key={section}>
                <h3>{section}</h3>
                <div className="project-images">{images.map((image, index) => <figure className="project-image-card" key={image.src}>
                    <img loading="lazy" decoding="async" src={image.src} alt={image.alt} />
                    <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{image.title}</figcaption>
                </figure>)}</div>
            </div>)}
        </section>}

        {project.repository && <section className="case-repository"><div><span className="section-eyebrow">CÓDIGO Y DOCUMENTACIÓN</span><h2>Explora el proyecto</h2></div><a href={project.repository} target="_blank" rel="noopener noreferrer">Ver repositorio <span aria-hidden="true">↗</span></a></section>}
        <div className="detail-footer"><div><h2>Herramientas</h2><ul>{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div><span className="detail-doodle">*</span></div>
        <SocialLinks className="social-actions detail-social" />
    </article>;
}

function TraditionalPortfolio({ onCloseProject, onOpenProject, onReturnToScene, project }) {
    return <div className="traditional-portfolio"><Doodles /><header className="portfolio-header"><button className="wordmark" onClick={onReturnToScene}><i>D</i>avid Santiago Amaya Reyes</button><button className="text-button" onClick={onReturnToScene}>Volver al escritorio</button></header>{project ? <ProjectCaseStudy onCloseProject={onCloseProject} project={project} /> : <><section className="portfolio-intro paper-sheet"><span className="intro-tag">PORTAFOLIO 2026</span><p>HOLA, SOY DAVID</p><h1>Ideas que<br /><em>hacen ruido.</em></h1><span>Diseño, ilustración, 3D y experiencias digitales hechas con intención, curiosidad y mucho marcador.</span><div className="intro-scribble">CREAR<br />SIN MIEDO</div></section><About /><ProjectList onOpenProject={onOpenProject} /></>}</div>;
}

export function PortfolioInterface({ activeId, onClearSceneProject, onCloseInteraction, onCloseProject, onOpenPortfolio, onOpenProject, onReturnToScene, project, sceneProject, showPortfolio }) {
    const interaction = activeId ? sceneInteractions[activeId] : null;
    if (showPortfolio) return <TraditionalPortfolio onCloseProject={onCloseProject} onOpenProject={onOpenProject} onReturnToScene={onReturnToScene} project={project} />;

    const isMusic = activeId === 'music';
    return <><Doodles /><header className="scene-header"><button className="wordmark" onClick={onCloseInteraction}><i>D</i>AVID SANTIAGO AMAYA REYES</button><button className="text-button" onClick={onOpenPortfolio}>Portafolio en papel</button></header><div className="scene-copy"><span className="scribble-label">HOLA!</span><p>{sceneProject ? 'PROYECTO SELECCIONADO' : isMusic ? 'MÚSICA AMBIENTAL' : activeId === 'projects' ? 'EXPLORA LA GALERÍA' : 'DISEÑO / ILUSTRACIÓN / 3D'}</p><h1>{sceneProject ? <>{sceneProject.title}<br /><em>en proceso.</em></> : isMusic ? <>Sube el<br /><em>volumen.</em></> : activeId === 'projects' ? <>Proyectos<br /><em>en el aire.</em></> : <>Ideas con<br /><em>mucho color.</em></>}</h1><span>{sceneProject ? 'El monitor activo muestra la estación de trabajo asociada.' : isMusic ? 'Usa los tres botones de la tarjeta para cambiar o pausar la canción.' : activeId === 'projects' ? 'Mueve la vista y selecciona una tarjeta.' : 'Toca los modelos para explorar el estudio.'}</span></div>{sceneProject ? <SceneProjectPanel onClearSceneProject={onClearSceneProject} onOpenProject={onOpenProject} project={sceneProject} /> : interaction && (activeId === 'projects' ? <GalleryHud onCloseInteraction={onCloseInteraction} onOpenPortfolio={onOpenPortfolio} /> : !isMusic && <ObjectPanel interaction={interaction} onCloseInteraction={onCloseInteraction} onOpenPortfolio={onOpenPortfolio} />)}</>;
}
