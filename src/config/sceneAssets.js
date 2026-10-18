// Change `src`, visibility or transformations here without changing camera or
// interaction logic. The final models can replace these files independently.
export const sceneAssets = {
    desk: { src: '/Desk.gltf', visible: true, position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 },
    // Monitor.gltf contains one monitor. Keep a single instance here so a
    // replacement cannot accidentally create a duplicate model.
    monitor: { src: '/Monitor.gltf', interactionId: 'projects', visible: true, position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 },
    graphicsTablet: { src: '/HUION.gltf', interactionId: 'artwork', visible: true, position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 },
    keyboard: { src: '/Keyboard.gltf', interactionId: 'keyboard', visible: true, position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 },
    // JBL.gltf now publishes only the JBL node, preventing duplicate props.
    speaker: { src: '/JBL.gltf', hitArea: { position: [1.04, 1.08, 0.65], size: [0.46, 0.42, 0.4] }, interactionId: 'music', visible: true, position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 }
};
