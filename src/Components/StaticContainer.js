import React from "react";

function StaticContainer({ colData , hf}) {
  return (
    <div className="flex justify-center items-center p-8 px-16 mt-16 mb-24 w-full" style={{height:`${hf}`}}>
      <div
        className="w-1/4 flex justify-center pl-24 items-start lg:p-4 xl:p-8 font-medium lg:text-4xl "
        style={{ height: "200px"}}
      >{colData.leftCol}</div>
      <div
        className="w-1/3 flex justify-start items-start  lg:p-4 xl:p-8 pr-16"
        style={{ fontSize: "1.7rem" ,height: "200px"}}
      >{colData.middleCol}</div>
      <div
        className="w-1/3 flex justify-start items-start lg:p-4 xl:p-8 pr-16"
        style={{ fontSize: "1.7rem" ,height: "200px"}}
      >{colData.rightCol}</div>
    </div>
  );
}

export default StaticContainer;


// import React from "react";

// function StaticContainer({ colData, hf }) {
//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center p-8 px-16 mt-16 mb-24 w-full" style={{ height: `${hf}` }}>
//       <div
//         className="w-full md:w-1/4 flex justify-center md:pl-24 items-start p-8 font-medium text-center md:text-left"
//         style={{ fontSize: "2.5rem", height: "200px" }}
//       >
//         {colData.leftCol}
//       </div>
//       <div
//         className="w-full md:w-1/3 flex justify-center md:justify-start items-start p-8 pr-16"
//         style={{ fontSize: "1.7rem", height: "200px" }}
//       >
//         {colData.middleCol}
//       </div>
//       <div
//         className="w-full md:w-1/3 flex justify-center md:justify-start items-start p-8 pr-16"
//         style={{ fontSize: "1.7rem", height: "200px" }}
//       >
//         {colData.rightCol}
//       </div>
//     </div>
//   );
// }

// export default StaticContainer;
