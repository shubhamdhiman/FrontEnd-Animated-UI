import React, { useEffect } from "react";
import jellyfish from "../Assets/jellyfish/jellyfish.png";
import { animateHeading, jellyFishFocus } from "../GSAP/MeetAheadGSAP";
function MeetAhead() {
    useEffect(() => {
      animateHeading("#headingContainer","#asideContainer",".blob1",".coin1"); // Call the animation function
      jellyFishFocus()
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
        <p className="xl:text-2xl lg:text-xl font-normal subHeading">Built out of frustation</p>
        <p className="font-semibold mainHeading xl:text-6xl lg:text-5xl" style={{ }}>
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
              className="coin1  absolute left-1/2 -top-44 w-12 h-12 -ml-6 rounded-full flex justify-center items-center"
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
          <p className="xl:text-3xl lg:text-2xl text-left mb-8">
            A personalized pocket coach that provides bite-sized science driven
            tools to boost emotional intellegence.
          </p>
          <p className="xl:text-3xl lg:text-2xl text-left">
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </div>
      </div>
      <div
        className="h-80 w-80 rounded-full absolute -z-1 blob1"
        style={{ background: "#fae8dc", left: "-100px", bottom: "100px" }}
      ></div>
    </div>
  );
}

export default MeetAhead;
