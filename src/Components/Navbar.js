import React, { useEffect, useRef, useState } from 'react';
import jellyfishNoScroll from '../Assets/jellyfish/jellyfishNoScroll.png'
import jellyfishScroll from '../Assets/jellyfish/jellyfishScroll.png'
import { changeImage } from '../GSAP/NavbarGSAP';
function Navbar() {
  const imageRef = useRef(null);
  const [imageChanged, setImageChanged] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled and the image has not been changed yet
      if (!imageChanged && window.scrollY > 10) {
        // Call the changeImage function to change the image
        changeImage(imageRef.current, jellyfishScroll); // Replace 'new_image_url.jpg' with the new image URL
        // Set the imageChanged flag to true to prevent further changes
        setImageChanged(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageChanged]);
  return (
    <div className='flex justify-around items-center p-6 fixed top-0 left-0 w-full bg-white z-50'>
        <div>
            <img  ref={imageRef} src={jellyfishNoScroll} width={100}height={50}/>
        </div>
        <div className='flex justify-between gap-8 font-medium'>
            <p>Emotions</p>
            <p>Manifesto</p>
            <p>Self-awareness-test</p>
            <p>Work With Us</p>
        </div>
        <button className='bg-black rounded-full text-white px-8 py-4 font-medium'>Download App</button>
    </div>
  )
}

export default Navbar