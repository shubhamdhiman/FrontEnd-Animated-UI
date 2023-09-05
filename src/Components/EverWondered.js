import React from "react";

function EverWondered() {
  return (
    <div
      className=" w-4/5 m-auto mb-32 flex flex-col justify-center "
      style={{
        overflow: "hidden",
        height: "80vh",
        background: "#edf8fe",
        borderRadius: "3rem",
      }}
    >
      <div className="px-16 text-center">
        <p className="text-2xl font-normal">
          Let your friend families and co-workers &#40;anonymously&#41; rate
          your social skills.
        </p>
        <p className="font-semibold" style={{ fontSize: "4rem" }}>
          Ever wondered what others think of you?{" "}
        </p>
      </div>
      <div className="mt-32">
        <div className="">
          <div className="relative w-3/5 m-auto border-dashed border-2 border-orange-200 ">
            <div
              className="absolute -left-10 -top-10 w-20 h-20 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#e7c27b" }}
            >
              <div
                className="w-16 h-16 rounded-full flex justify-center items-center text-white text-lg"
                style={{ backgroundColor: "#d58e4c" }}
              >
                1
              </div>
            </div>
            <div
              className="absolute left-2/4 -translate-x-2/4 -top-10 w-20 h-20 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#e7c27b" }}
            >
              <div
                className="w-16 h-16 rounded-full flex justify-center items-center text-white text-lg"
                style={{ backgroundColor: "#d58e4c" }}
              >
                2
              </div>
            </div>
            <div
              className="absolute -right-10 -top-10 w-20 h-20 rounded-full flex justify-center items-center"
              style={{ backgroundColor: "#e7c27b" }}
            >
              <div
                className="w-16 h-16 rounded-full flex justify-center items-center text-white text-lg"
                style={{ backgroundColor: "#d58e4c" }}
              >
                3
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-24 text-center">
          <div className="absolute left-36 -top-10 w-80">
            Answer question on your social skills
          </div>
          <div className="absolute left-2/4 -translate-x-2/4 -top-10 w-80 ">
            Let others anonymously answer the same question about you
          </div>
          <div className="absolute right-36 -top-10 w-80 ">
            Find out where you and others see things the same way and where not
          </div>
        </div>
      </div>
      <div className="w-3/5 h-72 mx-auto rounded-2xl  bg-white mt-12 flex items-center" style={{boxShadow: "0px 20px 50px -10px rgba(0, 0, 0, 0.2)"}} >
        <div className="relative w-3/5 m-auto  border-solid border-2 border-gray-200 ">
          <div
            className="absolute -left-2 -top-2 w-4 h-4 rounded-full flex justify-center items-center"
            style={{ backgroundColor: "#6341ef" }}
          >
          </div>
          <div
            className="absolute left-2/3  -top-2  translate-2/4 w-4 h-4 rounded-full flex justify-center items-center"
            style={{ backgroundColor: "#fdb338" }}
          >
          </div>
          <div
            className="absolute right-2/3 -top-2 w-4 h-4 rounded-full flex justify-center items-center"
            style={{ backgroundColor: "#40c2fb" }}
          >
          </div>
          <div
            className="absolute -right-2 -top-2 w-4 h-4 rounded-full flex justify-center items-center"
            style={{ backgroundColor: "#58c896" }}
          >
          </div>


          <div
            className="absolute -left-16 py-5 px-8 -top-16 w-4 h-4 text-white rounded-md flex justify-center items-center"
            style={{ backgroundColor: "#6341ef" }}
          >You
          </div>
          <div
            className="absolute left-2/3 py-2 px-8  -top-16 text-white translate-2/4 rounded-md flex justify-center items-center"
            style={{ backgroundColor: "#fdb338" }}
          >Anonymous 1
          </div>
          <div
            className="absolute right-1/3 py-2 px-8 top-6 text-white rounded-md -translate-2/4 flex justify-center items-center"
            style={{ backgroundColor: "#40c2fb" }}
          >Anonymous 2
          </div>
          <div
            className="absolute -right-44 py-2 px-8 top-6 text-white  rounded-md flex justify-center items-center"
            style={{ backgroundColor: "#58c896" }}
          >Anonymous 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default EverWondered;
