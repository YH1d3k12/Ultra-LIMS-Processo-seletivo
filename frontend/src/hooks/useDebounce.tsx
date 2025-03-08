import { useState, useEffect } from 'react';

/**
 * useDebounce hook.
 * This hook allows you to debounce any fast changing value.
 * The debounced value will only reflect the latest value when the useDebounce hook has not been called for the specified delay period.
 *
 * @param initialValue - The initial value to be debounced.
 * @param delay - The delay in milliseconds for the debounce.
 * @returns An array containing the debounced value, the current value, and a setter for the current value.
 */
export default function useDebounce<T>(
    initialValue: T,
    delay: number
): [T, T, React.Dispatch<T>] {
    const [value, setValue] = useState<T>(initialValue);
    const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(debounce);
        };
    }, [value, delay]);

    return [debouncedValue, value, setValue];
}
