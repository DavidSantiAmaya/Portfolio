const accents = ['#ff6b35', '#4b2e83', '#f4b942', '#ff6b35', '#6f55af'];

// The monitor model owns the only screen; this component adds workstation accents.
export function ProjectWorkstation({ project, projectIndex }) {
    const accent = accents[projectIndex % accents.length];

    return <group name={`workstation-${project.slug}`}>
        <group position={[1.58, 1.11, 0.3]} rotation-y={-0.2}>
            <mesh><boxGeometry args={[0.72, 0.12, 0.98]} /><meshStandardMaterial color="#ffffff" roughness={0.8} /></mesh>
            <mesh position={[0, 0.07, 0]}><boxGeometry args={[0.58, 0.02, 0.78]} /><meshBasicMaterial color={accent} /></mesh>
        </group>
        <mesh position={[-1.12, 1.35, -0.22]} rotation-z={Math.PI / 4}><torusGeometry args={[0.18, 0.04, 8, 16]} /><meshStandardMaterial color={accent} /></mesh>
        <mesh position={[2.2, 1.35, -0.15]}><octahedronGeometry args={[0.19]} /><meshStandardMaterial color="#4b2e83" roughness={0.45} /></mesh>
        <pointLight color={accent} intensity={4} distance={3.5} position={[0.862, 1.7, 0.1]} />
    </group>;
}
