import { Float } from '@react-three/drei';

function Animated({ animated, children, floatIntensity = 1.1, rotationIntensity = 0.35, speed = 1.2 }) {
    return <Float floatIntensity={floatIntensity} rotationIntensity={rotationIntensity} speed={animated ? speed : 0}>{children}</Float>;
}

function Pencil({ animated, color, position, rotation }) {
    return <Animated animated={animated}><group position={position} rotation={rotation}><mesh rotation-z={Math.PI / 2}><cylinderGeometry args={[0.045, 0.045, 0.85, 8]} /><meshStandardMaterial color={color} roughness={0.55} /></mesh><mesh position={[0.46, 0, 0]} rotation-z={-Math.PI / 2}><coneGeometry args={[0.075, 0.16, 8]} /><meshStandardMaterial color="#f5f5f0" /></mesh></group></Animated>;
}

function PaperPlane({ animated, position, rotation }) {
    return <Animated animated={animated} floatIntensity={1.5} rotationIntensity={0.45} speed={1.5}><mesh position={position} rotation={rotation}><coneGeometry args={[0.28, 0.65, 3]} /><meshStandardMaterial color="#ffffff" roughness={0.85} /></mesh></Animated>;
}



export function StudioFurniture({ animated }) {
    return <group>
        <Pencil animated={animated} color="#ff6b35" position={[-2.6, 2.7, -1.7]} rotation={[0.2, 0.4, 0.35]} />
        <Pencil animated={animated} color="#4b2e83" position={[2.8, 2.9, -2.2]} rotation={[0.5, -0.2, -0.5]} />
        <PaperPlane animated={animated} position={[-3.3, 2.3, -2.8]} rotation={[0.2, 0.1, -0.9]} />
        <PaperPlane animated={animated} position={[3.4, 3.2, -3.1]} rotation={[0.35, -0.4, 0.7]} />
        <Animated animated={animated} floatIntensity={1.3} rotationIntensity={0.5} speed={1}><mesh position={[-3.1, 3.7, -1.5]}><octahedronGeometry args={[0.27]} /><meshStandardMaterial color="#ff6b35" roughness={0.45} /></mesh></Animated>
        <Animated animated={animated} floatIntensity={1.7} rotationIntensity={0.4} speed={1.3}><mesh position={[3.1, 2.45, -1.3]}><octahedronGeometry args={[0.21]} /><meshStandardMaterial color="#4b2e83" roughness={0.45} /></mesh></Animated>
    </group>;
}
