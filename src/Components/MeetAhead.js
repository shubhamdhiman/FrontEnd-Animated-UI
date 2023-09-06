import React, { useEffect } from "react";
import jellyfish from "../Assets/jellyfish/jellyfish.png";
import { animateHeading, blob, jellyFishFocus } from "../GSAP/MeetAheadGSAP";
function MeetAhead() {
    useEffect(() => {
      animateHeading("#headingContainer","#asideContainer"); // Call the animation function
      jellyFishFocus()
      blob()
    }, []);
  return (

    <div
      className="relative w-4/5 m-auto mb-32 flex flex-col justify-center -z-2"
      style={{
        overflow: "hidden",
        height: "80vh",
        background: "#fef7f1",
        borderRadius: "3rem",
      }}
    >
      <div className="px-16 " id="headingContainer">
        <p className="text-2xl font-normal subHeading">Built out of frustation</p>
        <p className="font-semibold mainHeading" style={{ fontSize: "4rem" }}>
          Meet the ahead app
        </p>
      </div>
      <div className="flex">
        <div className=" w-1/2 p-20 pl-32 pt-12 text-slate-500 flex justify-start items-center relative z-10">
          <div
            className="relative h-72 w-72 rounded-full flex justify-center items-center"
            style={{ backgroundColor: "#f6f6f6" }}
          >
            <div className="h-60 w-60 rounded-full bg-white flex justify-center items-center">
              <img className="jellyFishImg" src={jellyfish} width={170} />
            </div>
            <div
              className="absolute left-1/2 -top-5 w-12 h-12 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#e7c27b" }}
            >
              <div
                className="w-8 h-8 rounded-full flex justify-center items-center text-white text-lg"
                style={{ backgroundColor: "#d58e4c" }}
              >
                1
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-20 pl-4" id="asideContainer">
          <p className="text-3xl text-left mb-8">
            A personalized pocket coach that provides bite-sized science driven
            tools to boost emotional intellegence.
          </p>
          <p className="text-3xl text-left">
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </div>
      </div>
      <div
        className="h-80 w-80 rounded-full absolute -z-1 blob"
        style={{ background: "#fae8dc", left: "-400px", bottom: "240px" }}
      ></div>
    </div>
  );
}

export default MeetAhead;

// import React from 'react';

// function MeetAhead() {
//   return (
//     <div className='relative w-4/5 m-auto mb-32 flex flex-col justify-center -z-2' style={{ overflow: "hidden", height: "80vh", background: "#fef7f1", borderRadius: "3rem" }}>
//       <div className='px-6 md:px-16'>
//         <p className='text-lg md:text-2xl font-normal'>Built out of frustration</p>
//         <p className='font-semibold text-3xl md:text-4xl' style={{ fontSize: "4rem" }}>Meet the ahead app</p>
//       </div>
//       <div className='flex flex-col md:flex-row'>
//         <div className='w-full md:w-1/2 p-6 md:p-20 pl-4 md:pl-32 pt-12 text-slate-500 flex justify-center md:justify-start items-center relative z-10'>
//           <div className='h-52 md:h-72 w-52 md:w-72 rounded-full flex justify-center items-center' style={{ backgroundColor: "#f6f6f6" }}>
//             <div className='h-44 md:h-60 w-44 md:w-60 rounded-full bg-white'></div>
//           </div>
//         </div>
//         <div className='w-full md:w-1/2 p-6 md:p-20 pl-4'>
//           <p className="text-lg md:text-3xl text-left md:mb-8">A personalized pocket coach that provides bite-sized science-driven tools to boost emotional intelligence.</p>
//           <p className="text-lg md:text-3xl text-left">Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
//         </div>
//       </div>
//       <div className='h-52 md:h-80 w-52 md:w-80 rounded-full absolute -z-1' style={{ background: "#fae8dc", left: "-100px", bottom: "40px" }}></div>
//     </div>
//   );
// }

// export default MeetAhead;
