// import React from 'react'
// import sign from '../Assets/signature.svg'
// function Note() {
//   return (
//     <div className='w-1/4 flex justify-center items-center mx-auto' style={{height:"80vh"}}>
//         <div className='text-center'>
//             <p className='text-lg'>We take privacy seriously</p>
//             <p className='text-3xl font-semibold my-4'>Before you get started</p>
//             <p className='text-xl'>&quot;We won't share your answers with anyone &#40;and won't tell you which friends said what about you&#41;&quot;</p>
//             <div className='flex justify-center items-center'>
//                 <p>with love,</p>
//                 <img style={{transform:"rotate(20deg)"}} src={sign} width={200} height={100}/>
//             </div>
//             <button className='bg-black text-white rounded-full px-8 py-4 my-4'>Start Test</button>
//             <p>Take only 5 minutes</p>
//         </div>
//     </div>
//   )
// }

// export default Note

import React, { useEffect } from "react";
import sign from "../Assets/signature.svg";
import gsap  from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Note() {
  useEffect(() => {
    const signature = document.getElementById("signaturePath");
    gsap.to(signature, {
      duration: 3,
      strokeDashoffset: 0, // Animate the stroke dash offset to 0
      ease: "power1.inOut", // Use an easing function
    });
  }, []);

  return (
    <div
      className="w-1/4 flex justify-center items-center mx-auto"
      style={{ height: "80vh" }}
    >
      <div className="text-center">
        <p className="text-lg">We take privacy seriously</p>
        <p className="text-3xl font-semibold my-4">Before you get started</p>
        <p className="text-xl">
          &quot;We won't share your answers with anyone &#40;and won't tell you
          which friends said what about you&#41;&quot;
        </p>
        <div className="flex justify-center items-center">
          <p>with love,</p>
          <img
            id="signatureImage"
            style={{ transform: "rotate(20deg)" }}
            src={sign}
            width={200}
            height={100}
            alt="Signature"
          />
        </div>
        <button className="bg-black text-white rounded-full px-8 py-4 my-4">
          Start Test
        </button>
        <p>Take only 5 minutes</p>
      </div>
    </div>
  );
}

export default Note;
