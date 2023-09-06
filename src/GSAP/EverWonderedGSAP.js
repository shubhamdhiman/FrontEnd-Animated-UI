import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function timeLineInitial(){
    const bulletPoints = document.querySelectorAll(".bulletPoint");
    const bulletPointDescs = document.querySelectorAll(".bulletPointDesc");
    const bulletPoints2 = document.querySelectorAll(".bulletPoint2");
    const bullet2Descs = document.querySelectorAll(".bullet2Desc");

    // Function to animate a single bullet point and description
    const animateBulletPoint = (bulletPoint, bulletPointDesc, delay) => {
      gsap.fromTo(
        [bulletPoint, bulletPointDesc],
        {
          opacity: 0,
        //   y: 20,
          x:20,
          scale:0,
        },
        {
          opacity: 1,
        //   y: 0,
          x:0,
          duration: 0.5,
          delay,
          scale:1,
          ease: "ease",
          scrollTrigger:{
            trigger:".everWonderedContainer",
            start:"top 80%"
          }
        }
      );
    };

    // Animate the first bullet point and description immediately
    animateBulletPoint(bulletPoints[0], bulletPointDescs[0], 0);

    // Animate the remaining bullet points and descriptions with a delay
    for (let i = 1; i < bulletPoints.length; i++) {
      animateBulletPoint(
        bulletPoints[i],
        bulletPointDescs[i],
        i * 0.3 // Adjust the delay duration as needed
      );
    }
    // Animate the first bullet point and description immediately
    animateBulletPoint(bulletPoints2[0], bullet2Descs[0], 0);

    // Animate the remaining bullet points and descriptions with a delay
    for (let i = 1; i < bulletPoints2.length; i++) {
      animateBulletPoint(
        bulletPoints2[i],
        bullet2Descs[i],
        i * 0.3 // Adjust the delay duration as needed
      );
    }
}