import { sceneAssets } from '../../config/sceneAssets';
import { projects } from '../../data/projects';
import { ModelAsset } from './ModelAsset';
import { MusicStation } from './MusicStation';
import { ProjectGallery } from './ProjectGallery';
import { ProjectWorkstation } from './ProjectWorkstation';
import { StudioFurniture } from './StudioFurniture';

export function DeskScene({ activeId, animationState, music, onSelect, onSelectProject, selectedProject }) {
    const projectIndex = selectedProject ? projects.findIndex((project) => project.slug === selectedProject.slug) : 0;
    const animated = animationState === 'running';

    return (
        <>
            <ambientLight intensity={1.5} />
            <hemisphereLight args={['#fff7e9', '#4b2e83', 1.5]} />
            <directionalLight castShadow color="#ffb496" intensity={3.2} position={[5, 8, 6]} shadow-mapSize={[1024, 1024]} />
            <pointLight color="#ff6b35" intensity={16} position={[-4, 4, -2]} />
            <group>
                {activeId === 'projects' && !selectedProject && <ProjectGallery onSelectProject={onSelectProject} />}
                {selectedProject && <ProjectWorkstation project={selectedProject} projectIndex={projectIndex} />}
                {activeId === 'music' && <MusicStation music={music} />}
                <StudioFurniture animated={animated} />
                {Object.entries(sceneAssets).map(([id, asset]) => <ModelAsset asset={asset} key={id} onSelect={asset.interactionId ? () => {
                    onSelect(asset.interactionId);
                    if (asset.interactionId === 'music') music.play();
                } : undefined} />)}
            </group>
            <gridHelper args={[200, 200, '#ffffff', '#ffffff']} position={[0, -0.72, 0]} />
        </>
    );
}
