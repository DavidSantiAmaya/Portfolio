import { Text } from '@react-three/drei';
import { useEffect, useState } from 'react';

function TransportButton({ children, color = '#4b2e83', onPress, position, primary = false }) {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
        return () => { document.body.style.cursor = 'auto'; };
    }, [hovered]);

    const radius = primary ? 0.16 : 0.10;
    return <group position={position} onClick={(event) => { event.stopPropagation(); onPress(); }} onPointerOut={() => setHovered(false)} onPointerOver={() => setHovered(true)} scale={hovered ? 1.08 : 1}>
        <mesh><circleGeometry args={[radius, 28]} /><meshStandardMaterial color={color} roughness={0.55} /></mesh>
        <Text anchorX="center" anchorY="middle" color="#fffdf8" fontSize={primary ? 0.13 : 0.1} position={[0, 0, 0.035]}>{children}</Text>
    </group>;
}

// A compact record-player card placed above the desk. It intentionally keeps
// only the current track and the three essential transport controls.
export function MusicStation({ music }) {
    return <group name="music-station" position={[0.9, 2.57, -2.1]}>
        <mesh position={[0, 0, -0.08]}><boxGeometry args={[2.72, 1.56, 0.15]} /><meshStandardMaterial color="#4b2e83" roughness={0.6} /></mesh>
        <mesh position={[0, 0, 0.01]}><planeGeometry args={[2.5, 1.34]} /><meshStandardMaterial color="#fffdf8" roughness={0.95} /></mesh>
        <mesh position={[-0.82, 0.08, 0.05]}><circleGeometry args={[0.43, 36]} /><meshStandardMaterial color="#ff6b35" roughness={0.45} /></mesh>
        <mesh position={[-0.82, 0.08, 0.07]}><circleGeometry args={[0.18, 24]} /><meshStandardMaterial color="#4b2e83" roughness={0.45} /></mesh>
        <mesh position={[-0.82, 0.08, 0.09]}><circleGeometry args={[0.05, 16]} /><meshStandardMaterial color="#fffdf8" roughness={0.45} /></mesh>
        <Text anchorX="left" anchorY="middle" color="#4b2e83" fontSize={0.1} position={[-0.2, 0.47, 0.05]}>JBL / NOW PLAYING</Text>
        <Text anchorX="left" anchorY="middle" color="#ff6b35" fontSize={0.15} maxWidth={1.38} position={[-0.2, 0.13, 0.05]}>{music.track.title.toUpperCase()}</Text>
        <Text anchorX="left" anchorY="middle" color="#4b2e83" fontSize={0.12} maxWidth={1.35} position={[-0.2, -0.14, 0.05]}>{music.track.artist}</Text>
        <Text anchorX="left" anchorY="middle" color="#4b2e83" fontSize={0.09} position={[-0.2, -0.42, 0.05]}>{music.isPlaying ? 'SONANDO' : 'EN PAUSA'}</Text>
        <TransportButton onPress={music.previousTrack} position={[0.45, -0.42, 0.08]}>‹</TransportButton>
        <TransportButton color="#ff6b35" onPress={music.togglePlayback} position={[0.78, -0.42, 0.08]} primary>{music.isPlaying ? '||' : '▶'}</TransportButton>
        <TransportButton onPress={music.nextTrack} position={[1.1, -0.42, 0.08]}>›</TransportButton>
        <pointLight color="#ff6b35" intensity={2.1} distance={2.5} position={[-0.82, 0.08, 0.55]} />
    </group>;
}
