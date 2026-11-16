import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import { CameraRig } from './components/scene/CameraRig';
import { DeskScene } from './components/scene/DeskScene';
import { useMusicPlayer } from './components/ui/MusicPlayer';
import { PortfolioInterface } from './components/ui/PortfolioInterface';
import { SceneAnimationControls } from './components/ui/SceneAnimationControls';
import { homePath, projectPath, projectSlugFromPath } from './config/routes';
import { getProjectBySlug } from './data/projects';

const projectFromLocation = () => getProjectBySlug(projectSlugFromPath());

export default function Experience() {
    const [selectedInteraction, setSelectedInteraction] = useState(null);
    const [showPortfolio, setShowPortfolio] = useState(Boolean(projectFromLocation()));
    const [project, setProject] = useState(projectFromLocation);
    const [sceneProject, setSceneProject] = useState(null);
    const [isMobileCanvas, setIsMobileCanvas] = useState(() => (
        typeof window.matchMedia === 'function' && window.matchMedia('(max-width: 768px), (pointer: coarse)').matches
    ));
    const [animationState, setAnimationState] = useState(() => (
        typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'paused'
            : 'running'
    ));
    const music = useMusicPlayer();

    useEffect(() => {
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const respectPreference = (event) => {
            if (event.matches) setAnimationState('paused');
        };

        if (preference.addEventListener) preference.addEventListener('change', respectPreference);
        else preference.addListener(respectPreference);
        return () => {
            if (preference.removeEventListener) preference.removeEventListener('change', respectPreference);
            else preference.removeListener(respectPreference);
        };
    }, []);

    useEffect(() => {
        const preference = window.matchMedia('(max-width: 768px), (pointer: coarse)');
        const updateCanvasQuality = (event) => setIsMobileCanvas(event.matches);

        if (preference.addEventListener) preference.addEventListener('change', updateCanvasQuality);
        else preference.addListener(updateCanvasQuality);
        return () => {
            if (preference.removeEventListener) preference.removeEventListener('change', updateCanvasQuality);
            else preference.removeListener(updateCanvasQuality);
        };
    }, []);

    useEffect(() => {
        const onPopState = () => {
            const nextProject = projectFromLocation();
            setProject(nextProject);
            setShowPortfolio(Boolean(nextProject));
            setSelectedInteraction(null);
            setSceneProject(null);
        };
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    useEffect(() => {
        const title = project?.fullTitle || project?.title || 'Portafolio';
        document.title = `${title} — David Santiago Amaya Reyes`;

        const heading = document.querySelector(
            '.scene-copy h1, .traditional-portfolio h1, .battle-project-page h1, .caronte-project-page h1'
        );
        if (heading) {
            heading.tabIndex = -1;
            window.scrollTo(0, 0);
            heading.focus({ preventScroll: true });
        }
    }, [project, showPortfolio]);

    const openProject = (nextProject) => {
        window.history.pushState({}, '', projectPath(nextProject.slug));
        setProject(nextProject);
        setShowPortfolio(true);
        window.dispatchEvent(new Event('portfolio:navigate'));
    };
    const closeProject = () => {
        window.history.pushState({}, '', homePath);
        setProject(null);
    };
    const returnToScene = () => {
        window.history.pushState({}, '', homePath);
        setProject(null);
        setShowPortfolio(false);
        setSelectedInteraction(null);
        setSceneProject(null);
    };

    const selectSceneProject = (nextProject) => {
        setSceneProject(nextProject);
        setSelectedInteraction('projects');
    };

    const selectSceneInteraction = (interactionId) => setSelectedInteraction(interactionId);

    return (
        <div className="experience">
            {!showPortfolio && (
                <Canvas
                    aria-hidden="true"
                    camera={{ fov: 38, near: 0.1, far: 100, position: [10, 7, 12] }}
                    dpr={isMobileCanvas ? [1, 1.2] : [1, 1.5]}
                    gl={{ antialias: true, powerPreference: 'high-performance' }}
                    shadows
                >
                    <color attach="background" args={['#f5f5f0']} />
                    <Suspense fallback={null}>
                        <CameraRig activeId={selectedInteraction} reduceMotion={animationState !== 'running'} selectedProject={sceneProject} />
                        <DeskScene
                            activeId={selectedInteraction}
                            animationState={animationState}
                            music={music}
                            onSelect={setSelectedInteraction}
                            onSelectProject={selectSceneProject}
                            selectedProject={sceneProject}
                        />
                    </Suspense>
                </Canvas>
            )}
            <PortfolioInterface
                activeId={selectedInteraction}
                music={music}
                onCloseInteraction={() => { setSelectedInteraction(null); setSceneProject(null); }}
                onOpenPortfolio={() => setShowPortfolio(true)}
                onOpenProject={openProject}
                onCloseProject={closeProject}
                onReturnToScene={returnToScene}
                onSelectInteraction={selectSceneInteraction}
                project={project}
                sceneProject={sceneProject}
                onClearSceneProject={() => setSceneProject(null)}
                showPortfolio={showPortfolio}
            />
            {music.audioElement}
            {!showPortfolio && <SceneAnimationControls animationState={animationState} onSetAnimationState={setAnimationState} />}
        </div>
    );
}
