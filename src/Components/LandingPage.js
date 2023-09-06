import React, { useEffect } from 'react'
import appStore from '../Assets/appstore.png'
import phone from '../Assets/phone.png'
import rating from '../Assets/rating.png'
import jellyfish from '../Assets/jellyfish/jellyfish.png'
import jellyfishpurple from '../Assets/jellyfish/jellyfishpurple.png'
import jellyfishgreen from '../Assets/jellyfish/jellyfishgreen.png'
import trophies from '../Assets/trophies.png'
import {animateMainHeading ,revolveAnimationWhole} from '../GSAP/LandingPageGSAP'
function LandingPage() {
    useEffect(()=>{
        animateMainHeading('.mainHeading','.subHeading')
        revolveAnimationWhole('.backgroundBlob','.mobileImg',".modal",".circle",".jellyfish1",".jellyfish2",".jellyfish3")
    })
  return (
    <div className=' overflow-hidden w-90 m-auto mt-36 rounded-3xl text-center flex justify-center items-center' style={{background:"#eeebfe",height:"80vh"}}>
        <div className='w-1/2 h-full flex flex-col justify-center items-start p-12'>
            <div className='text-2xl font-small mb-8 subHeading'>Ahead app</div>
            <div className='text-8xl text-left font-bold mainHeading'>Master your life by mastering emotions</div>
            <div className='mt-24 flex items-center'>
                <img src={appStore} width={250}/>
                <div className='ml-8'>
                <img src={rating} width={200}height={30} />
                <p className='text-xl mt-3'>100+ AppStore reviews</p>
                </div>
            </div>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center'>
            <div className='relative circle rounded-full w-120 h-120 border-4 border-dashed border-white flex justify-center items-center'>
                <div className='w-96 h-96 rounded-full backgroundBlob' style={{background:"#e0d8fa"}}>
                    <img className='mobileImg' src={phone} width={220} style={{position:"absolute",left:"55%",top:"50%",transform:"translate(-50%,-50%)"}}/>
                    <div className='modal relative h-40 w-40 bg-white rounded-lg p-2' >
                        <div className='absolute top-0 left-0 h-1/2 w-full rounded-lg flex justify-center items-center' style={{background:"#6cb995"}}>
                            <img src={trophies} width={100}/>
                        </div>
                       <div className='mt-20 modal'> <p className='font-medium text-xs text-start '>Can you find, what best calms you down?</p>
                       <div style={{fontSize:".7rem"}} className='flex justify-between px-4 mt-2'><span>Practice</span><span> 🕐 4 min</span></div></div>

                    </div>
                </div>

                <img src={jellyfish} width={85} className='jellyfish1 absolute top-10 left-10 outline-4 outline-white outline-offset-4'/>
                <img src={jellyfishpurple} width={75} className='jellyfish2 absolute -bottom-10 left-50'/>
                <img src={jellyfishgreen} width={65} className='jellyfish3 absolute top-10 right-10'/>


            </div>
        </div>
    </div>
  )
}

export default LandingPage

// import React from 'react';
// import appStore from '../Assets/appstore.png';
// import phone from '../Assets/phone.png';
// import rating from '../Assets/rating.png';

// function LandingPage() {
//   return (
//     <div className='w-90 m-auto rounded-3xl text-center flex justify-center items-center' style={{ background: "#eeebfe", height: "80vh" }}>
//       <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-full flex flex-col justify-center items-start p-6 md:p-12 lg:p-12 xl:p-12'>
//         <div className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-small mb-4 md:mb-8 lg:mb-8 xl:mb-8'>Ahead app</div>
//         <div className='text-4xl md:text-6xl lg:text-8xl xl:text-8xl text-left font-bold'>Master your life by mastering emotions</div>
//         <div className='mt-8 md:mt-16 lg:mt-16 xl:mt-16 flex items-center'>
//           <img src={appStore} width={150} />
//           <div className='ml-4 md:ml-8 lg:ml-8 xl:ml-8'>
//             <img src={rating} width={120} height={20} />
//             <p className='text-lg md:text-xl lg:text-xl xl:text-xl mt-2 md:mt-3 lg:mt-3 xl:mt-3'>100+ AppStore reviews</p>
//           </div>
//         </div>
//       </div>
//       <div className='hidden md:block lg:block xl:block w-1/2 h-full flex justify-center items-center'>
//         <div className='relative rounded-full w-96 h-96 border-4 border-dashed border-white flex justify-center items-center'>
//           <div className='w-80 h-80 rounded-full' style={{ background: "#e0d8fa" }}>
//             <img src={phone} width={150} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
//             <div className='h-28 w-28 bg-white rounded-lg' style={{ position: "absolute", top: "calc(50% - 7rem)", left: 'calc(50% - 3rem)' }}>
//               <div className='bg-green-400 h-1/2 w-full rounded-lg'></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LandingPage;
