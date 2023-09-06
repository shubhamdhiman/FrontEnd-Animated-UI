import gsap  from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export function mainHeading(heading, floatFish) {
    // Define the animation for the main heading
    gsap.fromTo(
      heading,
      {
        scale: 0,
        opacity: 0,
        x: '-70%',
      },
      {
        scale: 1,
        opacity: 1,
        x: '0%',
        duration: 1,
        ease: 'back',
        scrollTrigger: {
          trigger: heading, // The element that triggers the animation
          start: 'top 80%', // Start animation when the top of the element is 80% in the viewport
          end: 'bottom 20%', // End animation when the bottom of the element is 20% in the viewport
        //   scrub: true, // Smoothly scrub the animation as you scroll
        //   markers: true, // Add markers for debugging (optional)
        },
      }
    );
  
    // Define the animation for the floating fish
    gsap.to(floatFish, {
      scale: 1,
      transform: 'rotate(-40deg)',
      opacity: 1,
      x: '0%',
      duration: 2,
      ease: 'ease',
      right: '45%',
      top: '20%',
      scrollTrigger: {
        trigger: floatFish, // The element that triggers the animation
        start: 'top 80%', // Start animation when the top of the element is 80% in the viewport
        end: 'bottom 20%', // End animation when the bottom of the element is 20% in the viewport
        // scrub: true, // Smoothly scrub the animation as you scroll
        // markers: true, // Add markers for debugging (optional)
      },
    });
  }
  

  export function scrollContentAnimation() {
    gsap.to('.container', {
      x: '-52%', // Scroll the content to the left by 50%
      duration:1,
      ease:"ease",
      scrollTrigger: {
        trigger: '.container',
        start: 'top 80%',
        end: 'top 30%', // Change this end value to control when scrolling should stop
        // scrub: true,
        
      },
    });
  }