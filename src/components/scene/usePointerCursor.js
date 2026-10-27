import { useEffect, useRef } from 'react';

const activeOwners = new Set();

function updateCursor(owner, active) {
    if (active) {
        activeOwners.add(owner);
    } else {
        activeOwners.delete(owner);
    }

    document.body.style.cursor = activeOwners.size > 0 ? 'pointer' : 'auto';
}

export function usePointerCursor(active) {
    const owner = useRef(Symbol());

    useEffect(() => {
        const currentOwner = owner.current;
        updateCursor(currentOwner, active);
        return () => updateCursor(currentOwner, false);
    }, [active]);
}
