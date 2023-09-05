// import React from 'react';
// import { soundFamiliarData } from '../Utils';

// function SoundFamiliar() {
//   return (
//     <div className='w-90 m-auto'>
//       <div className='font-bold px-20 mb-24' style={{ fontSize: '3.5rem' }}>
//         Does this sound familiar...
//       </div>
//       <div
//         className='flex mb-8 scrollbar'
//         style={{
//           overflowX: 'auto',
//           scrollbarWidth: 'none', // Hide the scrollbar in Firefox
//           '-ms-overflow-style': 'none', // Hide the scrollbar in Internet Explorer/Edge
//         }}
//       >
//         {soundFamiliarData.map((item, index) => {
//           return (
//             <div
//               key={item.id}
//               className={`mx-8 rounded-3xl h-60 p-8`}
//               style={{
//                 color:`${item.textColor}`,
//                 background: `${item.color}`,
//                 maxWidth: '350px', // Set a minimum width
//                 flex: '0 0 auto', // Allow the block to shrink when the container is smaller
//                 marginRight: '8px', // Add some spacing between blocks
//               }}
//             >
//               <div>{item.emoji}</div>
//               <div className='text-lg font-medium my-4'>{item.heading}</div>
//               <div className='text-sm'>{item.desc}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default SoundFamiliar;

import React from 'react';
import { soundFamiliarData } from '../Utils';

function SoundFamiliar() {
  return (
    <div className='w-90 m-auto'>
      <div className='font-bold px-20 mb-16' style={{ fontSize: '3.5rem' }}>
        Does this sound familiar...
      </div>
      <div
        className=' relative flex mb-8 scrollbar py-16'
        style={{
          overflowX: 'auto',
          scrollbarWidth: 'none', // Hide the scrollbar in Firefox
          '-ms-overflow-style': 'none', // Hide the scrollbar in Internet Explorer/Edge
        }}
      >
        {soundFamiliarData.map((item, index) => {
            const rotation = item.tilted === 'yes' ? 'rotate(-5deg)' : 'none';
          return (
            <div
              key={item.id}
              className={`mx-8 rounded-3xl h-60 p-8 `}
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
  );
}

export default SoundFamiliar;
