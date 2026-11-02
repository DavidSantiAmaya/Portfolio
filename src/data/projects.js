// Replace the copy and images below with David's final project information.
// The data shape is reused by the 3D cards, paper portfolio and individual URLs.
export const projects = [
    {
        slug: 'pirate-ship-simulator',
        title: 'Pirate Ship Simulator',
        category: '3D y web',
        summary: 'Un simulador de barco pirata en 3D con navegación espacial y física realista.',
        tools: ['Blender', 'Three.js', 'React'],
        images: [
            '/Pirate Ship simulator/0001.png',
            '/Pirate Ship simulator/0004.png',
            '/Pirate Ship simulator/arduino_morado (1).png',
            '/Pirate Ship simulator/arduino_naranja.png',
            '/Pirate Ship simulator/FIGURAS_HD_TRANSPARENTE (1).png',
            '/Pirate Ship simulator/IMG_2707.HEIC',
            '/Pirate Ship simulator/IMG_2708.HEIC',
            '/Pirate Ship simulator/IMG_2709.HEIC',
            '/Pirate Ship simulator/mockup_con_escritorio_transparente.png',
            '/Pirate Ship simulator/mockup_minimalista_transparente_final.png',
            '/Pirate Ship simulator/pngtree-a-vintage-wooden-ship-s-helm-intricately-crafted-with-spokes-and-png-image_17722266.webp',
            '/Pirate Ship simulator/unity_morado (1).png',
            '/Pirate Ship simulator/unity_naranja.png',
            '/Pirate Ship simulator/WhatsApp Image 2026-05-26 at 1.33.37 PM.jpeg'
        ],
        aporte: [
            'Physical simulation in Unity',
            '3D modeling of the ship and mastil',
            'Programming and integration'
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
