import gsap  from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export function selfImpJellyFish(){
        // Define the animation for the floating fish
        gsap.to(".floatFish2", {
            scale: 1,
            transform: 'rotate(-40deg)',
            opacity: 1,
            x: '0%',
            duration: 2,
            ease: 'ease',
            right: '45%',
            top: '20%',
            scrollTrigger: {
              trigger: ".floatFish2", // The element that triggers the animation
              start: 'top 70%', // Start animation when the top of the element is 80% in the viewport
              end: 'bottom 20%', // End animation when the bottom of the element is 20% in the viewport
              // scrub: true, // Smoothly scrub the animation as you scroll
              // markers: true, // Add markers for debugging (optional)
            },
          });
}