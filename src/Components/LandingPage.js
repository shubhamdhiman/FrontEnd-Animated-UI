import React from 'react'
import appStore from '../Assets/appstore.png'
import phone from '../Assets/phone.png'
import rating from '../Assets/rating.png'
function LandingPage() {
  return (
    <div className=' w-90 m-auto rounded-3xl text-center flex justify-center items-center' style={{background:"#eeebfe",height:"80vh"}}>
        <div className='w-1/2 h-full flex flex-col justify-center items-start p-12'>
            <div className='text-2xl font-small mb-8'>Ahead app</div>
            <div className='text-8xl text-left font-bold'>Master your life by mastering emotions</div>
            <div className='mt-24 flex items-center'>
                <img src={appStore} width={250}/>
                <div className='ml-8'>
                <img src={rating} width={200}height={30}/>
                <p className='text-xl mt-3'>100+ AppStore reviews</p>
                </div>
            </div>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center'>
            <div className='relative rounded-full w-120 h-120 border-4 border-dashed border-white flex justify-center items-center'>
                <div className='w-96 h-96 rounded-full ' style={{background:"#e0d8fa"}}>
                    <img src={phone} width={220} style={{position:"absolute",left:"55%",top:"50%",transform:"translate(-50%,-50%)"}}/>
                    <div className='h-40 w-40 bg-white rounded-lg' style={{position:"absolute",top:"16rem",left:'6rem'}}>
                        <div className='bg-green-400 h-1/2 w-full rounded-lg'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage