import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function wwuHeading(leftheading,rightheading,container,val){
    gsap.fromTo(
        leftheading, // Target the heading container by its ID
        {
          opacity: 0,
          x: "-100%",
        scale:0
        },
        {
          opacity: 1,
          scale:1,
          x: "0%",
          duration: 1, // Adjust the duration as needed
          ease: "ease", // Use the ease of your choice
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    gsap.fromTo(
        rightheading, // Target the heading container by its ID
        {
          opacity: 0,
          x: "100%",
        scale:0
        },
        {
          opacity: 1,
          scale:1,
          x: "0%",
          duration: 1, // Adjust the duration as needed
          ease: "ease", // Use the ease of your choice
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            
          },
        }
      );
}