import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo, useState } from 'react';

function LoadedModel({ hitArea, onSelect, src, ...transform }) {
    const { scene } = useGLTF(src);
    const [hovered, setHovered] = useState(false);
    const clone = useMemo(() => {
        const nextScene = scene.clone(true);
        nextScene.traverse((node) => {
            if (!node.isMesh) return;
            node.castShadow = true;
            node.receiveShadow = true;
        });
        return nextScene;
    }, [scene]);

    useEffect(() => {
        document.body.style.cursor = hovered && onSelect ? 'pointer' : 'auto';
        return () => { document.body.style.cursor = 'auto'; };
    }, [hovered, onSelect]);

    // Attach events to imported meshes. The speaker adds a compact, fully
    // invisible proxy because its physical mesh is exceptionally small.
    const interactionHandlers = onSelect ? {
        onClick: (event) => { event.stopPropagation(); onSelect(); },
        onPointerOut: () => setHovered(false),
        onPointerOver: () => setHovered(true)
    } : {};

    return <group {...transform} {...interactionHandlers}>
        <primitive object={clone} dispose={null} />
        {hitArea && onSelect && <mesh position={hitArea.position}>
            <boxGeometry args={hitArea.size} />
            <meshBasicMaterial depthWrite={false} transparent opacity={0} />
        </mesh>}
    </group>;
}

function Placeholder({ type, position, rotation, scale }) {
    const common = { position, rotation, scale };

    if (type === 'monitor') return <group {...common}><mesh><boxGeometry args={[4.3, 2.6, 0.22]} /><meshStandardMaterial color="#24243b" metalness={0.35} roughness={0.45} /></mesh><mesh position={[0, 0, 0.13]}><planeGeometry args={[3.9, 2.2]} /><meshBasicMaterial color="#7656ff" /></mesh><mesh position={[0, -1.7, 0]}><boxGeometry args={[0.34, 0.95, 0.34]} /><meshStandardMaterial color="#202033" /></mesh></group>;
    if (type === 'tablet') return <group {...common}><mesh><boxGeometry args={[2.6, 0.16, 1.85]} /><meshStandardMaterial color="#202033" roughness={0.35} /></mesh><mesh position={[0, 0.09, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[2.1, 1.35]} /><meshBasicMaterial color="#e98a68" /></mesh></group>;
    if (type === 'chair') return <group {...common}><mesh position={[0, 0.7, 0]}><boxGeometry args={[2.1, 1.3, 1.8]} /><meshStandardMaterial color="#35354a" roughness={0.75} /></mesh><mesh position={[0, 2.05, 0.55]} rotation={[-0.18, 0, 0]}><boxGeometry args={[2.1, 1.9, 0.35]} /><meshStandardMaterial color="#35354a" roughness={0.75} /></mesh></group>;
    if (type === 'accessories') return <group {...common}><mesh position={[0, 0.2, 0]}><cylinderGeometry args={[0.32, 0.32, 0.5, 24]} /><meshStandardMaterial color="#e9b44c" /></mesh><mesh position={[0.7, 0.15, 0.1]}><sphereGeometry args={[0.28, 24, 24]} /><meshStandardMaterial color="#87c38f" /></mesh></group>;

    return <group {...common}><mesh><boxGeometry args={[7.8, 0.35, 4.4]} /><meshStandardMaterial color="#594536" roughness={0.85} /></mesh><mesh position={[0, -1.55, 0]}><boxGeometry args={[0.45, 2.8, 0.45]} /><meshStandardMaterial color="#382c26" /></mesh></group>;
}

export function ModelAsset({ asset, onSelect }) {
    if (!asset.visible) return null;
    const transform = { position: asset.position, rotation: asset.rotation, scale: asset.scale };
    return asset.src ? <LoadedModel hitArea={asset.hitArea} onSelect={onSelect} src={asset.src} {...transform} /> : <Placeholder type={asset.placeholder} {...transform} />;
}

['/Desk.gltf', '/Monitor.gltf', '/HUION.gltf', '/Keyboard.gltf', '/JBL.gltf'].forEach((src) => useGLTF.preload(src));
