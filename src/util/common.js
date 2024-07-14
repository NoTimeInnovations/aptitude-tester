"use client"

export function scrollToTop() {
    const isBrowser = () => typeof window !== 'undefined';
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
var mdWindow = undefined;
export function setMdWindow(x) {
    mdWindow = x;
}
export function md(isPhone, isLap) {
    const isBrowser = () => (mdWindow ? typeof mdWindow : typeof window) !== 'undefined';
    if (!isBrowser()) return 0;
    return (mdWindow ? mdWindow : window).innerWidth < 720 ? isPhone : isLap;
}
import { useState, useEffect } from 'react';

export function usePageVisibility() {
    const isBrowser = () => typeof window !== 'undefined';
    if (!isBrowser()) return;
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };

        const handleBlur = () => {
            setIsVisible(false);
        };

        const handleFocus = () => {
            setIsVisible(true);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleBlur);
        window.addEventListener('focus', handleFocus);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('focus', handleFocus);
        };
    }, []);

    return isVisible;
}

export const BASE_URL = process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_URL
    : "http://localhost:3000/";
