import React from 'react'
import appstore from '../Assets/appstore.png'
import mail from '../Assets/mail.png'
import location from '../Assets/location.png'
import jellyfishcropped from '../Assets/jellyfish/jellyfishcropped.png'
function Footer() {
  return (
    <div className='flex justify-center items-center my-16'>
      <div className='text-center'>
        <img className="m-auto mb-4" src={jellyfishcropped} width={100}/>
        <p className='text-2xl font-bold mb-8' style={{color:"#6542f1"}}>ahead</p>
        <div className='flex justify-between text-xl mb-8 gap-12'>
          <p className='flex  items-center'><img className="p-2 bg-green-200 rounded-full"width={40}height={30} src={location}/>
            &nbsp; AuguststraBe 26, 10117 Berlin</p>
          <p className='flex items-center'><img className="p-2 bg-green-200 rounded-full "width={40} src={mail}/>&nbsp;hi@ahead-app.com</p>
        </div>
        <img className="mx-auto mb-8"width={200} src={appstore}/>
        <p className='text-md'>	&#169;&nbsp;2022 Ahead app, All right reserved</p>
      </div>

    </div>
  )
}

export default Footer