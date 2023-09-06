

import React, { useEffect } from 'react';
import { soundFamiliarData } from '../Utils';
import { scrollContentAnimation, mainHeading } from '../GSAP/SoundFamiliarGSAP';
import jellyFish from '../Assets/jellyfish/jellyfish.png'
function SoundFamiliar() {
  useEffect(() => {
    // Use GSAP to animate the element
    mainHeading(".soundFamiliarHeading",".floatFish")
    scrollContentAnimation()
  }, []);
  return (
    <div className='w-90 m-auto mb-32'>
      <div className='relative font-bold px-20 mb-16' style={{ fontSize: '3.5rem' }}>
        <p className='soundFamiliarHeading overflow-hidden'>Does this sound familiar...</p>
        <img className='absolute top-0 right-0 floatFish rotate-12' width={70} src={jellyFish} alt='Not found'/>
      </div>
      <div
        className=' relative flex mb-8 scrollbar py-16'
        style={{
          overflowX: 'auto',
          scrollbarWidth: 'none', // Hide the scrollbar in Firefox
          msOverflowStyle: 'none', // Hide the scrollbar in Internet Explorer/Edge
        }}
      >
        <div className='container flex'>
        {soundFamiliarData.map((item, index) => {
            const rotation = item.tilted === 'yes' ? 'rotate(-5deg)' : 'none';
          return (
            <div
              key={item.id}
              className="mx-8 rounded-3xl h-60 p-8 boxes"
              style={{
                color: `${item.textColor}`,
                background: `${item.color}`,
                maxWidth: '350px', // Set a minimum width
                flex: '0 0 auto', // Allow the block to shrink when the container is smaller
                marginRight: '8px', // Add some spacing between blocks
                transform:rotation,

              }}
            >
              <div  style={{ fontSize: '2rem' }}  dangerouslySetInnerHTML={{ __html: item.emoji }}></div>
              <div className='text-lg font-medium my-4'>{item.heading}</div>
              <div className='text-sm'>{item.desc}</div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default SoundFamiliar;
