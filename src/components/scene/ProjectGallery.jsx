import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

import { projects } from '../../data/projects';
import { usePointerCursor } from './usePointerCursor';

const placements = [
    { position: [-4.2, 2.25, -4.15], rotation: [0, 0.08, 0] },
    { position: [-2.1, 2.25, -4.15], rotation: [0, 0.04, 0] },
    { position: [0, 2.25, -4.15], rotation: [0, 0, 0] },
    { position: [2.1, 2.25, -4.15], rotation: [0, -0.04, 0] },
    { position: [4.2, 2.25, -4.15], rotation: [0, -0.08, 0] }
];
const palettes = [['#ff6b35', '#4b2e83'], ['#4b2e83', '#ff6b35'], ['#f4b942', '#4b2e83'], ['#ff6b35', '#3a2367'], ['#6f55af', '#ff6b35']];
const cardSize = [1.72, 2.22];

function useProjectTexture(project, index) {
    const texture = useMemo(() => {
        const [accent, secondary] = palettes[index];
        const canvas = document.createElement('canvas');
        canvas.width = 700;
        canvas.height = 900;
        const context = canvas.getContext('2d');
        context.fillStyle = '#f5f5f0';
        context.fillRect(0, 0, 700, 900);
        context.strokeStyle = '#4b2e8324';
        context.lineWidth = 2;
        for (let line = 0; line < 700; line += 35) { context.beginPath(); context.moveTo(line, 0); context.lineTo(line, 900); context.stroke(); }
        for (let line = 0; line < 900; line += 35) { context.beginPath(); context.moveTo(0, line); context.lineTo(700, line); context.stroke(); }
        context.fillStyle = accent;
        context.fillRect(70, 165, 560, 210);
        context.strokeStyle = secondary;
        context.lineWidth = 9;
        context.beginPath();
        context.arc(570, 145, 42, 0, Math.PI * 2);
        context.stroke();
        context.fillStyle = secondary;
        context.font = '700 26px Arial';
        context.fillText(`0${index + 1} / 0${projects.length}`, 62, 92);
        context.fillStyle = '#f5f5f0';
        context.font = '900 45px Impact, Arial Black, Arial';
        project.title.split(' ').slice(0, 2).forEach((word, wordIndex) => context.fillText(word.toUpperCase(), 96, 235 + wordIndex * 55));
        context.fillStyle = secondary;
        context.font = '700 23px Arial';
        context.fillText(project.category.toUpperCase(), 64, 712);
        context.font = '900 34px Arial';
        context.fillText('>', 590, 782);
        const result = new THREE.CanvasTexture(canvas);
        result.colorSpace = THREE.SRGBColorSpace;
        return result;
    }, [index, project]);
    useEffect(() => () => texture.dispose(), [texture]);
    return texture;
}

function GalleryCard({ index, onSelectProject, project }) {
    const [hovered, setHovered] = useState(false);
    const texture = useProjectTexture(project, index);
    const layout = placements[index];
    usePointerCursor(hovered);

    return <group position={layout.position} rotation={layout.rotation} scale={hovered ? 1.045 : 1}><mesh position={[0, 0, -0.05]}><boxGeometry args={[cardSize[0] + 0.12, cardSize[1] + 0.12, 0.12]} /><meshStandardMaterial color="#4b2e83" metalness={0.05} roughness={0.82} /></mesh><mesh onClick={(event) => { event.stopPropagation(); onSelectProject(project); }} onPointerOut={() => setHovered(false)} onPointerOver={() => setHovered(true)} position={[0, 0, 0.02]}><planeGeometry args={cardSize} /><meshBasicMaterial map={texture} toneMapped={false} /></mesh></group>;
}

export function ProjectGallery({ onSelectProject }) {
    return <group>{projects.map((project, index) => <GalleryCard index={index} key={project.slug} onSelectProject={onSelectProject} project={project} />)}</group>;
}
