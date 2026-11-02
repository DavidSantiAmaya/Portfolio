// Replace the copy and images below with David's final project information.
// The data shape is reused by the 3D cards, paper portfolio and individual URLs.
export const projects = [
    {
        slug: 'pirate-ship-simulator',
        title: 'Pirate Ship Simulator',
        category: '3D y web',
        summary: 'Experiencia interactiva de navegación marítima con simulación física y un control construido para dirigir el barco.',
        author: 'David Santiago Amaya Reyes',
        role: 'Estudiante de Ingeniería Multimedia',
        year: '2026',
        concept: 'Pirate Ship Simulator recrea la superficie del océano y el comportamiento físico de un barco en navegación.',
        objective: 'Ofrecer una experiencia interactiva y tangible que integre simulación física avanzada con controles físicos reales.',
        tools: ['Unity', 'Arduino Uno', 'Blender'],
        cover: `${import.meta.env.BASE_URL}pirate-ship-cover.jpeg`,
        contributions: [
            {
                number: '01',
                title: 'Simulación física en Unity',
                description: 'Simulación de la superficie del océano, la flotación y el comportamiento del barco sobre el agua.'
            },
            {
                number: '02',
                title: 'Modelado del barco y el mástil',
                description: 'Modelado 3D del barco, el mástil y los elementos gráficos relacionados.'
            },
            {
                number: '03',
                title: 'Programación e integración',
                description: 'Construcción e integración de un control físico de madera con Arduino Uno y dos potenciómetros. El control permite girar el timón y subir o bajar la vela desde Unity.'
            }
        ],
        gallery: [
            { section: 'Simulación y desarrollo', title: 'Simulación del océano', alt: 'Captura de la simulación del océano en Unity', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/unity-ocean-simulation.jpg` },
            { section: 'Simulación y desarrollo', title: 'Interfaz de Unity', alt: 'Vista de desarrollo del simulador en Unity, interfaz morada', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/unity-interface-purple.jpg` },
            { section: 'Simulación y desarrollo', title: 'Pruebas de navegación', alt: 'Vista de desarrollo del simulador en Unity, interfaz naranja', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/unity-interface-orange.jpg` },
            { section: 'Barco y modelado', title: 'Detalle del barco', alt: 'Detalle del modelo 3D del barco pirata', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/boat-model-detail.jpg` },
            { section: 'Barco y modelado', title: 'Elementos 3D', alt: 'Elementos gráficos y modelos 3D del proyecto', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/3d-design-elements.png` },
            { section: 'Barco y modelado', title: 'Referencia del timón', alt: 'Referencia visual de un timón de barco', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/ship-wheel-reference.webp` },
            { section: 'Control físico', title: 'Control físico: versión morada', alt: 'Prototipo morado del control físico para el simulador', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/controller-prototype-purple.jpg` },
            { section: 'Control físico', title: 'Control físico: versión naranja', alt: 'Prototipo naranja del control físico para el simulador', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/controller-prototype-orange.jpg` },
            { section: 'Control físico', title: 'Montaje del prototipo 01', alt: 'Fotografía del montaje físico del proyecto, vista 1', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/field-process-01.jpg` },
            { section: 'Control físico', title: 'Montaje del prototipo 02', alt: 'Fotografía del montaje físico del proyecto, vista 2', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/field-process-02.jpg` },
            { section: 'Control físico', title: 'Montaje del prototipo 03', alt: 'Fotografía del montaje físico del proyecto, vista 3', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/field-process-03.jpg` },
            { section: 'Presentación visual', title: 'Composición del proyecto', alt: 'Composición visual del proyecto Pirate Ship Simulator', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/complete-project-mockup.png` },
            { section: 'Presentación visual', title: 'Aplicación de la interfaz', alt: 'Mockup de la interfaz del simulador', src: `${import.meta.env.BASE_URL}pirate-ship-gallery/interface-mockup.png` },
            { section: 'Presentación visual', title: 'Portada del proyecto', alt: 'Portada de Pirate Ship Simulator con el barco navegando en el océano', src: `${import.meta.env.BASE_URL}pirate-ship-cover.jpeg` }
        ],
        repository: 'https://github.com/Alein0/Barco_Simulacion'
    },
    {
        slug: 'identidad-visual',
        title: 'Identidad visual',
        category: 'Branding',
        summary: 'Sistema gráfico, tono visual y piezas de comunicación para una marca con carácter.',
        tools: ['Dirección de arte', 'Illustrator', 'Photoshop']
    },
    {
        slug: 'atlas-ilustrado',
        title: 'Atlas ilustrado',
        category: 'Ilustración',
        summary: 'Serie editorial de personajes, color y mundos dibujados desde el boceto.',
        tools: ['Procreate', 'Photoshop', 'Illustrator']
    },
    {
        slug: 'archivo-en-movimiento',
        title: 'Archivo en movimiento',
        category: 'Motion',
        summary: 'Piezas de animación y composición para una campaña digital en movimiento.',
        tools: ['After Effects', 'Cinema 4D', 'Premiere Pro']
    },
    {
        slug: 'mundo-interactivo',
        title: 'Mundo interactivo',
        category: '3D y web',
        summary: 'Experiencia web espacial que une modelado, interfaz y navegación creativa.',
        tools: ['Blender', 'Three.js', 'React']
    },
    {
        slug: 'cuaderno-de-ideas',
        title: 'Cuaderno de ideas',
        category: 'Editorial',
        summary: 'Exploración visual de tipografía, collage y narrativas hechas a mano.',
        tools: ['InDesign', 'Photoshop', 'Procreate']
    }
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
