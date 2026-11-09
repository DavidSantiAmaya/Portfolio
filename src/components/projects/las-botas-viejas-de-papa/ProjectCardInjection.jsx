import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { lasBotasProject as project } from '../../../data/lasBotasProject';
import './ProjectCardInjection.css';

export default function ProjectCardInjection() {
    const [target, setTarget] = useState(null);

    useEffect(() => {
        const findProjectList = () => setTarget(document.querySelector('.project-list'));
        findProjectList();
        const observer = new MutationObserver(findProjectList);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    if (!target) return null;
    return createPortal(<article className="botas-portfolio-card">
        <span className="botas-card-index">PROYECTO 02</span>
        <img src={project.cover} alt="Portada de Las botas viejas de papá" />
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <span className="botas-card-description">{project.summary}</span>
        <button onClick={() => {
            window.history.pushState({}, '', '/projects/las-botas-viejas-de-papa');
            window.dispatchEvent(new Event('portfolio:navigate'));
        }}>Abrir proyecto <b aria-hidden="true">-&gt;</b></button>
    </article>, target);
}
