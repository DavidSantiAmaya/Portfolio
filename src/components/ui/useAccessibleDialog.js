import { useCallback, useEffect, useRef } from 'react';

const focusableSelector = 'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])';

export function useAccessibleDialog(isOpen) {
    const dialogRef = useRef(null);
    const returnFocusRef = useRef(null);

    useEffect(() => {
        if (!isOpen || !dialogRef.current) return undefined;

        returnFocusRef.current = document.activeElement;
        const firstFocusable = dialogRef.current.querySelector(focusableSelector);
        (firstFocusable ?? dialogRef.current).focus();

        return () => {
            const returnTarget = returnFocusRef.current;
            if (returnTarget?.isConnected && typeof returnTarget.focus === 'function') {
                returnTarget.focus();
            }
        };
    }, [isOpen]);

    const onDialogKeyDown = useCallback((event) => {
        if (event.key !== 'Tab' || !dialogRef.current) return;

        const focusable = [...dialogRef.current.querySelectorAll(focusableSelector)]
            .filter((element) => element.getClientRects().length > 0 && !element.hasAttribute('disabled'));

        if (!focusable.length) {
            event.preventDefault();
            dialogRef.current.focus();
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const focusIsInside = dialogRef.current.contains(document.activeElement);

        if (!focusIsInside) {
            event.preventDefault();
            (event.shiftKey ? last : first).focus();
        } else if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) {
            event.preventDefault();
            first.focus();
        }
    }, []);

    return { dialogRef, onDialogKeyDown };
}
