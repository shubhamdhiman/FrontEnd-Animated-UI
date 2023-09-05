import React from 'react'
import appStore from '../Assets/appstore.png'
function LandingPage() {
  return (
    <div className='h-screen w-90 m-auto rounded-3xl text-center flex justify-center items-center' style={{background:"#eeebfe"}}>
        <div className='w-1/2 h-full flex flex-col justify-center items-start p-12'>
            <div className='text-2xl font-small mb-8'>Ahead app</div>
            <div className='text-8xl text-left font-bold'>Master your life by mastering emotions</div>
            <div className='mt-24'>
                <img src={appStore} width={250}/>
                {/* <img /> */}
            </div>
        </div>
        <div className='w-1/2 h-full'>
f   
        </div>
    </div>
  )
}

export default LandingPage