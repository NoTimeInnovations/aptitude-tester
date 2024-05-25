export function scrollToTop() {
    const isBrowser = () => typeof window !== 'undefined';
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
var mdWindow=undefined;
export function setMdWindow(x){
    mdWindow=x;
}
export function md(isPhone,isLap){
    const isBrowser = () => (mdWindow?typeof mdWindow: typeof window) !== 'undefined';
    if (!isBrowser()) return 0;
    return (mdWindow?mdWindow:window).innerWidth < 720 ? isPhone : isLap;
}