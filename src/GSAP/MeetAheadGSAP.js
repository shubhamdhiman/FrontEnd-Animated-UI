import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function animateHeading(headContainer,asideContainer,blobid,coinid) {
  


    gsap.fromTo(
      coinid,
      {
        y:"300px"
      },
      {
        y:"160px",
        duration: 1, // Adjust the duration as needed
        ease: "ease",
        scrollTrigger:{
          trigger: "#headingContainer",
        start: "top 80%",
        end: "bottom 20%",
        }
      }
    )
  
  gsap.fromTo(
    [headContainer,asideContainer], // Target the heading container by its ID
    {
      opacity: 0,
      x: -100,
      scale:0
    },
    {
      opacity: 1,
      scale:1,
      x: 0,
      duration: 1, // Adjust the duration as needed
      ease: "ease", // Use the ease of your choice
      scrollTrigger: {
        trigger: "#headingContainer",
        start: "top 80%",
        end: "bottom 20%",
      },
    }
  );
  gsap.fromTo(
    blobid, // Target the heading container by its ID
      {
        x: "600px",
        y:"150px",
      },
      {
          // opacity:1,
        x: "30px",
        y:"50px",
        duration: 2, // Adjust the duration as needed
        ease: "ease", // Use the ease of your choice
        scrollTrigger: {
          trigger: "#headingContainer",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  
}

export function jellyFishFocus() {
    gsap.fromTo(
      '.jellyFishImg', // Target the heading container by its ID
      {
        transform:"rotate(90deg)",
      scale:0
      },
      {
        opacity: 1,
        scale:1,
        transform:"rotate(0deg)",
        duration: 1, // Adjust the duration as needed
        ease: "ease", // Use the ease of your choice
        scrollTrigger: {
          trigger: "#headingContainer",
          start: "top 80%",
          end: "bottom 20%",
        
        },
      }
    );
  }
  