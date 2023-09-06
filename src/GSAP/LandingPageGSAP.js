import gsap from 'gsap';

export function animateMainHeading(mainHeadingSelector, subheadingSelector) {
  const mainHeadingElement = document.querySelector(mainHeadingSelector);
  const subheadingElement = document.querySelector(subheadingSelector);

  gsap.fromTo(
    [mainHeadingElement, subheadingElement], // Pass an array of elements to animate
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1, // Adjust the duration if needed
      ease: 'ease', // Adjust the easing function as desired
      // stagger: 0.2, // Optional: Add stagger to animate elements with a delay between them
    }
  );
}

// Animation function for a different element
export function revolveAnimationWhole(blob,mobile,modal) {
  const backgroundBlob = document.querySelector(blob);
  const mobileImg = document.querySelector(mobile);
  const modalbox = document.querySelector(modal);

  gsap.fromTo(
    backgroundBlob,
    {
      scale:0.5,
    },
    {
      // Define ending properties
      scale:1,
      duration:1,
      ease:"elastic"
    }
  );
 gsap.fromTo(
   mobileImg, // Target the element using a class selector
  {
    scale: 0.1,
    transform: 'rotate(-20deg) ',
  },
  {
    // Define ending properties
    scale: 1,
    duration: 1,
    ease: 'ease',
    transform: 'rotate(0deg)',
    transform:'translate(-50%,-50%)'
  }
);
gsap.fromTo(
  modalbox,
  {
    scale: 0.1,
    // transform: 'rotate(-20deg)',
    transform:'translate(30%,40%)'
  },
  {
    // Define ending properties
    scale: 1,
    duration: 1,
    ease: 'ease',
    // transform: 'rotate(0deg)',
    transform:'translate(-30%,90%)'
  }
);
// const circleDia = document.querySelector(".circle");
// const fish1 = document.querySelector(".jellyfish1");
// const fish2 = document.querySelector(".jellyfish2");
// const fish3 = document.querySelector(".jellyfish3");


// // gsap.to([fish1,fish2,fish3], {
// //   duration: 2, // Duration of the animation
// //   rotation: 360, // Rotate 360 degrees
// //   transformOrigin: "200% 200%", // Set the origin for the box's rotation at the top center of the circle
// // //   repeat: 1, // Repeat the animation infinitely
// //   ease: "elastic easeOut", // Linear easing for constant speed
// // });
// gsap.to([fish1, fish2, fish3], {
//   duration: 2,
//   rotation: 360,
//   transformOrigin: "center center", // Set the origin to the center of the circle
//   repeat: -1, // Repeat the animation indefinitely (-1 means infinite)
//   ease: "linear", // Use a linear ease for constant speed
// });
}

