export function SceneAnimationControls({ animationState, onSetAnimationState }) {
    const isRunning = animationState === 'running';
    const isPaused = animationState === 'paused';

    return <aside className="scene-animation-controls" aria-label="Controles de animación">
        <span>OBJETOS 3D</span>
        <div>
            <button disabled={isRunning} onClick={() => onSetAnimationState('running')}>Iniciar</button>
            <button disabled={!isRunning} onClick={() => onSetAnimationState('paused')}>Pausar</button>
            <button disabled={!isPaused} onClick={() => onSetAnimationState('running')}>Reanudar</button>
            <button disabled={animationState === 'stopped'} onClick={() => onSetAnimationState('stopped')}>Detener</button>
        </div>
    </aside>;
}
