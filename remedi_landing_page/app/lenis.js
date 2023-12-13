import Lenis from '@studio-freight/lenis';
import './lenis.css';

let lenis;
if (typeof window !== 'undefined') {

    // Your code that uses the window object
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
} else {
    // Handle the case where window is not defined (e.g., server-side rendering, as you know
    //                                               in our terminal their is no window object right ?)
    console.warn('The code is not running in a browser environment. Check your environment.');
}

export default lenis;