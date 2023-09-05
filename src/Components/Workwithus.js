import React from "react";

function Workwithus({data}) {
  return (
    <div
      className="relative w-4/5 m-auto mb-32 flex flex-col justify-center"
      style={{
        overflow: "hidden",
        height: "85vh",
        background: "#eeebfe",
        borderRadius: "3rem",
      }}
    >
      <div
        className=" flex justify-between px-16 font-semibold"
        style={{ fontSize: "4rem" }}
      >
        <p>Work with us</p>
        <p className="pr-16" style={{ color: "#6542f1" }}>
          ahead
        </p>
      </div>
      <div className="px-16 flex justify-between mt-8">
        <div
          className="relative w-2/5  bg-white rounded-xl shadow-xl"
          style={{ height: "35rem" }}
        >
          <div className="p-8">
            <p className="font-medium text-3xl">About</p>
            <p className="text-xl leading-8 mt-4">
              At ahead our goal is to make self-improvement fun and lasting. We
              know there is a way how to make it work. And that's what aHead is
              all about!
            </p>
          </div>
          <div
            className="leading-10 absolute bottom-0 left-0 rounded-xl p-8"
            style={{ height: "15rem", backgroundColor: "#fef7f1" }}
          >
            <p className="font-medium text-3xl">Product</p>
            <p className="text-xl leading-8 mt-4">
              Sure, you can spend ages reading books or sitting on seminars on
              how to become a better spouse, parent, or manager - like we did...
            </p>
          </div>
        </div>

        {/* Scrollbar Section */}
        <div className="scrollbar2" style={{overflowY:"scroll",height:"40rem"}}>
            {/* Scrollbar items */}
          {
            data.map(item=>{
                return <div className="px-16 mb-8">
                <div
                  className={`mx-8 rounded-3xl h-52 p-8 `}
                  style={{
                    backgroundColor: "white",
                    width: "350px", // Set a mx width
                    flex: "0 0 auto", // Allow the block to shrink when the container is smaller
                    marginRight: "8px", // Add some spacing between blocks
                  }}
                >
                  <div className="text-lg font-medium">
                    {item.heading}
                  </div>
                  <div className="text-md  my-4">
                    {item.desc}
                  </div>
                </div>
              </div>
            })
          }
           
           
          
        </div>
      </div>
    </div>
  );
}

export default Workwithus;
