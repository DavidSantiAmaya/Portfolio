// Replace the copy and images below with David's final project information.
// The data shape is reused by the 3D cards, paper portfolio and individual URLs.
export const projects = [
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
