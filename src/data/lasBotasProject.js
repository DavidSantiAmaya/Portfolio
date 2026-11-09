const base = `${import.meta.env.BASE_URL}las-botas-viejas-de-papa/`;

export const lasBotasProjectCard = {
    slug: 'las-botas-viejas-de-papa',
    title: 'Las botas viejas de papá',
    category: 'Narrativa interactiva',
    summary: 'Un cómic digital que se lee bajando, se mueve cuando inclinas el teléfono y te deja elegir desde los ojos de quién vivirlo. Una historia llevada a una experiencia interactiva.',
    cover: `${base}portada.png`,
    coverContain: true,
    tools: ['Guion', 'Storyboard', 'Sketch', 'Lineart', 'Color', 'Desarrollo']
};

export const lasBotasProject = {
    ...lasBotasProjectCard,
    subtitle: 'Narrativa Interactiva, Proyecto 2',
    institution: 'Universidad de Boyacá',
    program: 'Programa de Ingeniería en Multimedia',
    course: 'Narrativa Interactiva',
    accreditation: 'Acreditación Nacional en Alta Calidad - C.N.A. · Reacreditación Internacional Plena - RIEV.',
    author: 'David Santiago Amaya',
    source: 'Cuento original de Manuel Alejandro Estupiñán, ganador Categoría A del concurso La Pera de Oro.',
    description: 'Un cómic digital que se lee bajando, se mueve cuando inclinas el teléfono y te deja elegir desde los ojos de quién vivirlo. Una historia llevada a una experiencia interactiva.',
    about: 'El proyecto consistió en desarrollar una narrativa interactiva a partir del cuento seleccionado, organizando sus elementos narrativos y visuales para construir una experiencia digital.',
    role: 'Lineart + Color',
    roleDescription: 'Mi trabajo fue la construcción gráfica de las ilustraciones. Realicé el lineart y entintado de los bocetos del equipo, sobre personajes y escenarios, definiendo trazado final, limpieza de líneas, grosores y construcción visual para la siguiente etapa. También hice el acabado de color de 2 ilustraciones seleccionadas.',
    contribution: 'Lineart / Entintado en personajes + escenarios, Color en 2 ilustraciones.',
    lineart: 'A partir de los bocetos de mis compañeros, desarrollé el lineart manteniendo la intención original del dibujo, con línea más limpia, definida y consistente.',
    lineartSteps: [
        { title: 'Limpieza de línea', body: 'Eliminación de trazos innecesarios y corrección del dibujo.' },
        { title: 'Definición de personajes', body: 'Mayor claridad en siluetas, expresiones, ropa y detalles.' }
    ],
    process: ['Guion', 'Storyboard', 'Sketch', 'Lineart', 'Color', 'Desarrollo'],
    result: 'Una narrativa interactiva que integra las ilustraciones del equipo dentro de una experiencia digital.',
    gallery: [
        { title: 'Niño con bota · personaje', category: 'Personajes', src: `${base}nino-bota.png`, alt: 'Ilustración a color de un niño con una bota grande y expresión preocupada' },
        { title: 'Taza con rosas · sketch y color', category: 'Objetos y color', src: `${base}taza-rosas.png`, alt: 'Comparación de una taza con rosas en versión a color y lineart' },
        { title: 'Botas viejas · resultado a color', category: 'Botas · Sketch / Lineart / Color', src: `${base}botas-proceso.png`, alt: 'Las botas en boceto, lineart y color, mostradas juntas para comparar las etapas' },
        { title: 'Detalle de las botas', category: 'Botas · Sketch / Lineart / Color', src: `${base}botas-color.png`, alt: 'Detalle a color de las botas viejas con barro' },
        { title: 'Personajes · exploración y lineart', category: 'Personajes y escenarios', src: `${base}personajes.png`, alt: 'Lámina de personajes con mujer de ruana y falda, hombre con sombrero y bigote' }
    ],
    team: [
        'Mauricio Ochoa Echeverria, Director del Programa',
        'Manuel Francisco Corredor, Dirección de Arte',
        'Sofía Gamboa Becerra, Voz de Narrador y Mamá',
        'Tatiana Carolina Cano, Sketch',
        'José Edilson Soler Rocha, Tester',
        'Juan Esteban Niño, Dirección de Color',
        'Oscar Leonardo Pérez, Voz de Don Antonio',
        'Isabella García Mora, Sketch',
        'Wilmar Angel Ramirez Valbuena, Tester',
        'Jose Manuel Renteria, Desarrollo de App',
        'Diana Sofia Benavides, Voz de Daniel',
        'Juliana Yamile Florez, Lineart',
        'David Santiago Amaya, Lineart'
    ]
};
