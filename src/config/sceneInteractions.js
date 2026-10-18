// IDs and camera targets remain stable even if meshes inside the models change.
export const sceneInteractions = {
    projects: {
        label: 'Monitor - explorar proyectos',
        camera: { position: [7.5, 4.7, 9.5], target: [-0.8, 1.35, -1.8] }
    },
    artwork: {
        label: 'Tableta gráfica - ver ilustraciones',
        camera: { position: [2.8, 3.4, 4.1], target: [-0.13, 1.2, -0.82] }
    },
    keyboard: {
        label: 'Teclado - ver herramientas',
        camera: { position: [3.2, 2.55, 4.2], target: [0.57, 1.03, -0.29] }
    },
    music: {
        label: 'Parlante JBL - controlar música',
        camera: { position: [4.2, 3.65, 5.4], target: [0.9, 2.57, -2.1] }
    }
};

export const defaultCamera = { position: [5.4, 3.6, 6.6], target: [0, 1.15, -0.45] };
