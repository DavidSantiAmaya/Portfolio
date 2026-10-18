import { CameraControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';

import { defaultCamera, sceneInteractions } from '../../config/sceneInteractions';

export function CameraRig({ activeId, selectedProject }) {
    const controls = useRef();
    useEffect(() => {
        const destination = selectedProject
            ? { position: [0, 3.05, 6.15], target: [0, 1.75, -1.05] }
            : activeId ? sceneInteractions[activeId]?.camera : defaultCamera;
        if (!destination || !controls.current) return;
        controls.current.setLookAt(...destination.position, ...destination.target, true);
    }, [activeId, selectedProject]);

    return <CameraControls ref={controls} makeDefault maxDistance={22} minDistance={4} smoothTime={0.7} maxPolarAngle={Math.PI * 0.48} minPolarAngle={Math.PI * 0.13} />;
}
