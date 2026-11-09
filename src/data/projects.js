// Replace the copy and images below with David's final project information.
// The data shape is reused by the 3D cards, paper portfolio and individual URLs.
import { lasBotasProjectCard } from './lasBotasProject';

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
    lasBotasProjectCard,
    {
        slug: 'batalla-pantano-de-vargas',
        title: 'Batalla del Pantano de Vargas',
        fullTitle: 'Narrativa Web Interactiva para Divulgar la Historia de la Batalla del Pantano de Vargas, Paipa',
        category: 'Narrativa web interactiva',
        summary: 'Narrativa interactiva que divulga la Batalla del Pantano de Vargas mediante investigación, texto, ilustración y navegación por capítulos.',
        author: 'David Santiago Amaya Reyes',
        role: 'Estudiante de Ingeniería Multimedia · Investigación histórica, diseño de contenidos, ilustración y desarrollo frontend',
        year: 'Portafolio 2026',
        concept: 'Una narrativa web interactiva que acerca al público a la Batalla del Pantano de Vargas, librada el 25 de julio de 1819 en Paipa, Boyacá.',
        objective: 'Divulgar su valor histórico y cultural mediante una experiencia digital que combina investigación, texto, ilustración y navegación por capítulos.',
        cover: `${import.meta.env.BASE_URL}batalla-pantano-vargas/portada.png`,
        coverContain: true,
        tools: ['React', 'TypeScript', 'Visual Studio Code'],
        contributions: [
            { number: '01', title: 'Dirección visual', description: 'La interfaz combina una estética editorial con escenas históricas monocromáticas. El blanco y negro mantiene el tono documental; el morado y el naranja sirven como acentos para destacar títulos, navegación y llamadas a la acción.' },
            { number: '02', title: 'Experiencia de navegación', description: 'El recorrido vertical organiza el relato por momentos: contexto, cruce del río, batalla, protagonistas y memoria del monumento. Las ilustraciones y escenas 3D ayudan a marcar cambios de tiempo y lugar.' },
            { number: '03', title: 'Estructura narrativa', description: 'Las secciones guían al usuario por la batalla, la línea temporal, los personajes y el contexto histórico.' },
            { number: '04', title: 'Desarrollo frontend', description: 'La interfaz se construyó con React y TypeScript, trabajando el código en Visual Studio Code.' }
        ],
        gallery: [
            { section: 'Experiencia web', title: 'Portada · Batalla del Pantano de Vargas', alt: 'Portada monocromática de la Batalla del Pantano de Vargas', src: `${import.meta.env.BASE_URL}batalla-pantano-vargas/portada.png` },
            { section: 'Experiencia web', title: 'Escena narrativa por capítulos', alt: 'Escena ilustrada monocromática de soldados durante la batalla', src: `${import.meta.env.BASE_URL}batalla-pantano-vargas/escena-capitulos.png` },
            { section: 'Diseño y navegación', title: 'Experiencia en pantalla', alt: 'Vista de la experiencia narrativa web en pantalla', src: `${import.meta.env.BASE_URL}batalla-pantano-vargas/experiencia-escritorio.png` },
            { section: 'Diseño y navegación', title: 'Navegación en móvil', alt: 'Vista móvil de la narrativa web histórica', src: `${import.meta.env.BASE_URL}batalla-pantano-vargas/experiencia-movil.png` },
            { section: 'Investigación y desarrollo', title: 'Investigación histórica', alt: 'Ilustración histórica de planificación y estudio de la batalla', src: `${import.meta.env.BASE_URL}batalla-pantano-vargas/investigacion.png` },
            { section: 'Investigación y desarrollo', title: 'Desarrollo frontend', alt: 'Código del proyecto en Visual Studio Code', src: `${import.meta.env.BASE_URL}batalla-pantano-vargas/desarrollo.png` },
            { section: 'Memoria del monumento', title: 'Memoria del monumento', alt: 'Escultura conmemorativa de la Batalla del Pantano de Vargas', src: `${import.meta.env.BASE_URL}batalla-pantano-vargas/monumento.png` }
        ],
        repository: 'https://github.com/DavidSantiAmaya/Semillero-de-Investigacion',
        liveUrl: 'https://davidsantiamaya.github.io/Semillero-de-Investigacion/'
    },
    {
        slug: 'gus-estuvo-aqui',
        title: 'Gus Estuvo Aquí',
        category: 'Animación 2D',
        summary: 'Cortometraje de animación 2D, capítulo piloto. Ingeniería Multimedia, 2025.',
        author: 'David Santiago Amaya Reyes',
        role: 'Estudiante de Ingeniería Multimedia',
        year: '2025',
        format: 'Cortometraje de animación 2D · Capítulo piloto',
        premise: 'En el año 2552, Gus, un robot de apoyo en una misión de exploración espacial, ignora una alerta que anuncia la destrucción del planeta Meridian. Cuando un agujero de gusano arrastra su nave al futuro, encuentra una versión deteriorada y cínica de sí mismo. Para evitar la catástrofe y redimirse, deberá enfrentarse a las consecuencias de su negligencia.',
        genre: 'Ciencia ficción, humor ácido y una aventura sobre responsabilidad, tiempo y segundas oportunidades.',
        universe: 'ExoGenesis envía una sonda a explorar otros planetas. Gus mantiene la nave en soledad junto a Dumbot, un robot que muestra «Error 404», y Amanda, una pequeña planta por la que siente un cariño desmedido.',
        storyStartingPoint: 'Cuando Meridian es absorbido por un agujero de gusano, los sistemas fallan y la nave atraviesa una ruptura espacio-temporal. En un futuro devastado, Gus se encuentra con su versión vieja, corroída y cínica.',
        characters: [
            {
                name: 'Gus',
                role: 'Robot de apoyo de la sonda ExoGenesis',
                description: 'Es un esqueleto. Sus cuencas vacías revelan una mirada tranquila y cansada. Sus movimientos son pausados y exactos, como alguien acostumbrado a una rutina eterna. A pesar de su apariencia inquietante, tiene una personalidad serena, paciente y reflexiva. Observa el mundo con melancolía, pero también con cierta sensibilidad, capaz de mostrar ternura cuando algo rompe la monotonía de su labor.',
                image: `${import.meta.env.BASE_URL}gus-estuvo-aqui/gus-personajes.png`
            },
            {
                name: 'Dumbot',
                role: 'Compañero robot de Gus',
                description: 'El perrito es pequeño, de pelaje café claro y brillante, aunque llega un poco mojado y desordenado por haber sido dejado dentro de una caja. No parece traumatizado; más bien está confundido y lleno de energía, como si no entendiera del todo lo que pasó. Sus ojos grandes transmiten curiosidad y un toque de picardía. Apenas sale de la caja, se muestra juguetón, inquieto y rápido para corretear por todos lados.',
                image: `${import.meta.env.BASE_URL}gus-estuvo-aqui/dumbot-diseno.png`
            },
            {
                name: 'Gus del futuro',
                role: 'La versión futura de Gus',
                description: 'En un futuro devastado, Gus se encuentra con su versión vieja, corroída y cínica. La lámina de diseño muestra su silueta envejecida, la capa oscura y las piezas desgastadas que lo distinguen del Gus del presente.',
                image: `${import.meta.env.BASE_URL}gus-estuvo-aqui/gus-del-futuro-y-storyboard.png`
            }
        ],
        storyboard: {
            overview: 'La planificación visual recorre la rutina de Gus en la sonda, la alarma por Meridian, el fallo de gravedad, el viaje a través del agujero de gusano y el encuentro con Gus corroído.',
            shotPlanning: 'Cada plano se organiza con escenario, tipo de plano, ángulo, movimiento, descripción, sonido, diálogo y duración. El documento muestra el desarrollo visual del piloto, no una animación finalizada.',
            beats: [
                'La sonda de ExoGenesis avanza entre planetas y asteroides. En la rutina de la nave, Gus aparece rodeado de objetos flotantes mientras cumple sus tareas.',
                'La alerta anuncia el peligro para Meridian. La gravedad falla y Gus flota por la nave, entre dormitorios y objetos; la planificación incluye el intento de restablecerla desde un botón.',
                'Gus sale de su dormitorio, saluda al capitán e imita su voz. La secuencia cambia el ritmo cotidiano con sus gestos y con su relación afectuosa con Amanda, la planta.',
                'Dumbot aparece y se mueve por la nave. Sus sonidos y la indicación «Error 404» interrumpen a Gus y aportan humor físico a la escena.',
                'Una segunda alarma conduce a Gus y Dumbot hacia el centro de control. Allí revisan las advertencias y la pantalla relacionada con Meridian.',
                'El fallo del sistema deriva en un cortocircuito y prepara la ruptura espacio-temporal que atraviesa la nave.',
                'La nave cruza el agujero de gusano y llega a un futuro devastado, donde Gus conoce a su versión vieja, deteriorada y cínica.'
            ],
            document: `${import.meta.env.BASE_URL}gus-estuvo-aqui/portafolio-2026-gus-storyboard-animacion.pdf`
        },
        animationProcess: 'En Krita, se dibuja sobre los fotogramas de referencia y se comienza con una o dos poses clave para las expresiones cortas. Se agregan solo los intermedios imprescindibles, sin calcar cada cuadro. Cada toma se separa en un archivo .kra, se organizan las capas, se define la resolución al inicio y luego se revisa el ritmo en la línea de tiempo.',
        cover: `${import.meta.env.BASE_URL}gus-estuvo-aqui/gus-estuvo-aqui-portada.jpg`,
        gallery: [
            { section: 'Universo y narrativa', title: 'Premisa y universo narrativo', alt: 'Lámina ilustrada con la premisa de Gus Estuvo Aquí y el universo ExoGenesis', src: `${import.meta.env.BASE_URL}gus-estuvo-aqui/premisa-y-universo.png` },
            { section: 'Personajes', title: 'Gus y exploraciones de diseño', alt: 'Diseño de Gus y exploraciones de sus expresiones y formas', src: `${import.meta.env.BASE_URL}gus-estuvo-aqui/gus-personajes.png` },
            { section: 'Personajes', title: 'Dumbot', alt: 'Bocetos y variaciones del robot Dumbot', src: `${import.meta.env.BASE_URL}gus-estuvo-aqui/dumbot-diseno.png` },
            { section: 'Personajes y storyboard', title: 'Gus del futuro', alt: 'Diseño de Gus del futuro y lámina de storyboard', src: `${import.meta.env.BASE_URL}gus-estuvo-aqui/gus-del-futuro-y-storyboard.png` },
            { section: 'Proceso de animación', title: 'Animación en Krita', alt: 'Capturas del proceso de animación 2D en Krita', src: `${import.meta.env.BASE_URL}gus-estuvo-aqui/proceso-de-animacion.png` },
            { section: 'Portada', title: 'Gus Estuvo Aquí', alt: 'Portada del cortometraje con Gus, Dumbot y Gus del futuro en la nave', src: `${import.meta.env.BASE_URL}gus-estuvo-aqui/gus-estuvo-aqui-portada.jpg` }
        ],
        documents: [
            { title: 'Portafolio 2026 · Premisa y personajes', src: `${import.meta.env.BASE_URL}gus-estuvo-aqui/portafolio-2026-gus-personajes.pdf` },
            { title: 'Portafolio 2026 · Storyboard y animación', src: `${import.meta.env.BASE_URL}gus-estuvo-aqui/portafolio-2026-gus-storyboard-animacion.pdf` }
        ],
        tools: ['Krita', 'Animación 2D', 'Storyboard']
    },
    {
        slug: 'caronte',
        title: 'Caronte',
        category: 'Animación 3D',
        summary: 'En el silencioso mar de las almas, Caronte cumple su rutina eterna. Un misterioso paquete y un perrito travieso lo llevan a una aventura cómica rumbo a las puertas del inframundo.',
        author: 'David Santiago Amaya Reyes',
        role: 'Estudiante de Ingeniería Multimedia',
        cover: `${import.meta.env.BASE_URL}caronte/portada.png`,
        coverContain: true,
        concept: 'En el silencioso mar de las almas, Caronte cumple su rutina eterna. Hasta que un misterioso paquete interrumpe su día. Dentro, un perrito travieso y lleno de vida pondrá a prueba la paciencia del barquero, llevándolos a ambos a una aventura cómica rumbo a las puertas del inframundo.',
        objective: 'Sin palabras, solo miradas, gestos y ladridos. El viaje transformará para siempre la soledad de Caronte.',
        caronteDescription: 'Es un esqueleto. Sus cuencas vacías revelan una mirada tranquila y cansada. Sus movimientos son pausados y exactos, como alguien acostumbrado a una rutina eterna. A pesar de su apariencia inquietante, tiene una personalidad serena, paciente y reflexiva. Observa el mundo con melancolía, pero también con cierta sensibilidad, capaz de mostrar ternura cuando algo rompe la monotonía de su labor.',
        dogDescription: 'El perrito es pequeño, de pelaje café claro y brillante, aunque llega un poco mojado y desordenado por haber sido dejado dentro de una caja. No parece traumatizado; más bien está confundido y lleno de energía, como si no entendiera del todo lo que pasó. Sus ojos grandes transmiten curiosidad y un toque de picardía. Apenas sale de la caja, se muestra juguetón, inquieto y rápido para corretear por todos lados.',
        production: 'Proyecto realizado completamente en Blender: modelado, texturizado, rig de personajes, animación, iluminación y render.',
        tools: ['Blender', 'Modelado 3D', 'Rig de personajes', 'Animación', 'Iluminación', 'Render'],
        animationStages: ['Key poses', 'Extreme poses', 'Breakdowns', 'Secondary poses', 'Inbetweens', 'Timing and spacing', 'Polishing'],
        islandStages: [
            { title: 'Modelado base', src: `${import.meta.env.BASE_URL}caronte/isla-modelado-base.png`, alt: 'Malla base de la isla y el muelle en Blender' },
            { title: 'Texturizado', src: `${import.meta.env.BASE_URL}caronte/isla-texturizado.png`, alt: 'Malla de la isla con texturas aplicadas en Blender' },
            { title: 'Render final con océano', src: `${import.meta.env.BASE_URL}caronte/isla-render-oceano.png`, alt: 'Render final de la isla con océano y muelle' }
        ],
        animatic: `${import.meta.env.BASE_URL}caronte/animatic-caronte.mkv`,
        finalVideo: `${import.meta.env.BASE_URL}caronte/caronte-final.mp4`,
        gallery: [
            { section: 'Personajes · Caronte', title: 'Caronte · frontal', alt: 'Diseño frontal del personaje Caronte', src: `${import.meta.env.BASE_URL}caronte/caronte-personaje-frontal.png` },
            { section: 'Personajes · Caronte', title: 'Caronte · perfil', alt: 'Diseño de perfil del personaje Caronte', src: `${import.meta.env.BASE_URL}caronte/caronte-personaje-perfil.png` },
            { section: 'Personajes · Caronte', title: 'Caronte · posterior', alt: 'Vista posterior del personaje Caronte', src: `${import.meta.env.BASE_URL}caronte/caronte-personaje-posterior.png` },
            { section: 'Personajes · Caronte', title: 'Rostro de Caronte', alt: 'Detalle ilustrado del rostro de Caronte', src: `${import.meta.env.BASE_URL}caronte/detalle-caronte-cabeza.png` },
            { section: 'Personajes · Perrito', title: 'Perrito · frontal', alt: 'Diseño frontal del perrito', src: `${import.meta.env.BASE_URL}caronte/perrito-personaje-frontal.png` },
            { section: 'Personajes · Perrito', title: 'Perrito · perfil', alt: 'Diseño de perfil del perrito', src: `${import.meta.env.BASE_URL}caronte/perrito-personaje-perfil.png` },
            { section: 'Personajes · Perrito', title: 'Perrito · posterior', alt: 'Vista posterior del perrito', src: `${import.meta.env.BASE_URL}caronte/perrito-personaje-posterior.png` },
            { section: 'Personajes · Perrito', title: 'Detalle del perrito', alt: 'Detalle ilustrado del rostro del perrito', src: `${import.meta.env.BASE_URL}caronte/detalle-perrito.png` },
            { section: 'Personajes · Escena', title: 'Caronte y el perrito', alt: 'Caronte y el perrito juntos en la barca', src: `${import.meta.env.BASE_URL}caronte/caronte-y-perrito-escena.png` },
            { section: 'Modelado y rig', title: 'Caronte · exploración de modelo 01', alt: 'Vista de modelado de Caronte en Blender', src: `${import.meta.env.BASE_URL}caronte/caronte-modelado-01.png` },
            { section: 'Modelado y rig', title: 'Caronte · exploración de modelo 02', alt: 'Otra vista del modelado de Caronte en Blender', src: `${import.meta.env.BASE_URL}caronte/caronte-modelado-02.png` },
            { section: 'Modelado y rig', title: 'Malla de Caronte', alt: 'Malla del personaje Caronte en Blender', src: `${import.meta.env.BASE_URL}caronte/caronte-malla-01.png` },
            { section: 'Modelado y rig', title: 'Topología low-poly de Caronte', alt: 'Topología low-poly del personaje Caronte', src: `${import.meta.env.BASE_URL}caronte/caronte-topologia.png` },
            { section: 'Modelado y rig', title: 'Rig del perrito', alt: 'Rig del perrito preparado para animación en Blender', src: `${import.meta.env.BASE_URL}caronte/perrito-rig.png` },
            { section: 'Modelado y rig', title: 'Topología del perrito', alt: 'Topología low-poly del modelo 3D del perrito', src: `${import.meta.env.BASE_URL}caronte/perrito-topologia.png` },
            { section: 'Escenario · Isla', title: 'Modelado base de la isla', alt: 'Malla base de la isla en Blender', src: `${import.meta.env.BASE_URL}caronte/isla-modelado-base.png` },
            { section: 'Escenario · Isla', title: 'Isla texturizada', alt: 'Escenario de isla con texturas', src: `${import.meta.env.BASE_URL}caronte/isla-texturizado.png` },
            { section: 'Escenario · Isla', title: 'Render final con océano', alt: 'Render del escenario de isla rodeado por el océano', src: `${import.meta.env.BASE_URL}caronte/isla-render-oceano.png` },
            { section: 'Animación', title: 'Animación en Blender · poses clave', alt: 'Proceso de animación y poses clave en Blender', src: `${import.meta.env.BASE_URL}caronte/animacion-keyframes-01.png` },
            { section: 'Animación', title: 'Animación · poses secundarias', alt: 'Edición de poses secundarias en la línea de tiempo de Blender', src: `${import.meta.env.BASE_URL}caronte/animacion-keyframes-02.png` },
            { section: 'Animación', title: 'Timing, spacing y pulido', alt: 'Curvas de animación para ajustar timing, spacing y pulido', src: `${import.meta.env.BASE_URL}caronte/animacion-timing-spacing.png` }
        ]
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
