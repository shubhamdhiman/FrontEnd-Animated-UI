import gsap from 'gsap';

export function changeImage(imageElement, newImageUrl) {
  gsap.to(imageElement, {
    // opacity: 0, // Fade out the current image
    duration: 0,
    onComplete: () => {
      // Change the image source
      imageElement.src = newImageUrl;
      gsap.to(imageElement, {
        // opacity: 1, // Fade in the new image
        duration: 0,
        ease:"ease"
      });
    },
  });
}
