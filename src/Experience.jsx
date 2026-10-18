import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import { CameraRig } from './components/scene/CameraRig';
import { DeskScene } from './components/scene/DeskScene';
import { useMusicPlayer } from './components/ui/MusicPlayer';
import { PortfolioInterface } from './components/ui/PortfolioInterface';
import { SceneAnimationControls } from './components/ui/SceneAnimationControls';
import { getProjectBySlug } from './data/projects';

const projectFromLocation = () => {
    const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
    return match ? getProjectBySlug(match[1]) : null;
};

export default function Experience() {
    const [selectedInteraction, setSelectedInteraction] = useState(null);
    const [showPortfolio, setShowPortfolio] = useState(Boolean(projectFromLocation()));
    const [project, setProject] = useState(projectFromLocation);
    const [sceneProject, setSceneProject] = useState(null);
    const [animationState, setAnimationState] = useState('running');
    const music = useMusicPlayer();

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

    const openProject = (nextProject) => {
        window.history.pushState({}, '', `/projects/${nextProject.slug}`);
        setProject(nextProject);
        setShowPortfolio(true);
    };
    const closeProject = () => {
        window.history.pushState({}, '', '/');
        setProject(null);
    };
    const returnToScene = () => {
        window.history.pushState({}, '', '/');
        setProject(null);
        setShowPortfolio(false);
        setSelectedInteraction(null);
        setSceneProject(null);
    };

    const selectSceneProject = (nextProject) => {
        setSceneProject(nextProject);
        setSelectedInteraction('projects');
    };

    return (
        <main className="experience">
            {!showPortfolio && (
                <Canvas
                    aria-label="Escritorio 3D de David Santiago Amaya Reyes"
                    camera={{ fov: 38, near: 0.1, far: 100, position: [10, 7, 12] }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, powerPreference: 'high-performance' }}
                    shadows
                >
                    <color attach="background" args={['#f5f5f0']} />
                    <Suspense fallback={null}>
                        <CameraRig activeId={selectedInteraction} selectedProject={sceneProject} />
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
                onCloseInteraction={() => { setSelectedInteraction(null); setSceneProject(null); }}
                onOpenPortfolio={() => setShowPortfolio(true)}
                onOpenProject={openProject}
                onCloseProject={closeProject}
                onReturnToScene={returnToScene}
                project={project}
                sceneProject={sceneProject}
                onClearSceneProject={() => setSceneProject(null)}
                showPortfolio={showPortfolio}
            />
            {music.audioElement}
            {!showPortfolio && <SceneAnimationControls animationState={animationState} onSetAnimationState={setAnimationState} />}
        </main>
    );
}
