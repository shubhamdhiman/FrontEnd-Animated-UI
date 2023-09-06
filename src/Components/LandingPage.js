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
            <div className='xl:text-8xl lg:text-7xl text-left font-bold mainHeading'>Master your life by mastering emotions</div>
            <div className='mt-24 flex items-center'>
                <img src={appStore} className='xl:w-64 lg:w-44'/>
                <div className='ml-8'>
                <img src={rating} className='xl:w-64 lg:w-44'  />
                <p className='xl:text-xl lg:text-lg mt-3'>100+ AppStore reviews</p>
                </div>
            </div>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center'>
            <div className='relative circle rounded-full xl:w-120 xl:h-120 lg:w-96  lg:h-96 border-4 border-dashed border-white flex justify-center items-center'>
                <div className='xl:w-96 xl:h-96 lg:w-72 lg:h-72  rounded-full backgroundBlob' style={{background:"#e0d8fa"}}>
                    <img className='mobileImg lg:w-44 xl:w-64' src={phone}  style={{position:"absolute",left:"55%",top:"50%",transform:"translate(-50%,-50%)"}}/>
                    <div className='modal relative xl:h-40 xl:w-40 lg:w-40 lg:h-32 bg-white rounded-lg p-2' >
                        <div className='absolute top-0 left-0 xl:h-1/2 lg:h-2/6 w-full rounded-lg flex justify-center items-center' style={{background:"#6cb995"}}>
                            <img src={trophies} className="xl:w-44"width={100}/>
                        </div>
                       <div className='xl:mt-20 lg:mt-12 modal'> <p className='font-medium xl:text-xs lg:text-xs text-start '>Can you find, what best calms you down?</p>
                       <div style={{fontSize:".7rem"}} className='flex justify-between px-4 xl:mt-2 lg:mt-1'><span>Practice</span><span> 🕐 4 min</span></div></div>

                    </div>
                </div>

                <img src={jellyfish} width={85} className='jellyfish1 absolute xl:top-10  lg:top-0 xl:left-10 lg:left-0  outline-4 outline-white outline-offset-4'/>
                <img src={jellyfishpurple} width={75} className='jellyfish2 absolute -bottom-10 left-50'/>
                <img src={jellyfishgreen} width={65} className='jellyfish3 absolute xl:top-10 lg:top-0 xl:right-10 lg:right-0'/>


            </div>
        </div>
    </div>
  )
}

export default LandingPage
