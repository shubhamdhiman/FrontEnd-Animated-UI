import React from 'react'

function MeetAhead() {
  return (
    <div className='relative w-4/5 m-auto mb-32 flex flex-col justify-center -z-2' style={{overflow:"hidden",height:"80vh", background:"#fef7f1",borderRadius:"3rem"}}>
        <div className='px-16'>
          <p className='text-2xl font-normal'>Built out of frustation</p>
          <p className='font-semibold' style={{fontSize:"4rem"}}>Meet the ahead app</p>
        </div>
        <div className='flex'>
            <div className='w-1/2 p-20 pl-32 pt-12 text-slate-500 flex justify-start items-center relative z-10'>
              <div className='h-72 w-72 rounded-full flex justify-center items-center' style={{backgroundColor:"#f6f6f6"}}>
                <div className='h-60 w-60 rounded-full bg-white' ></div>
              </div>
            </div>
            <div className='w-1/2 p-20 pl-4'>
              <p className="text-3xl text-left mb-8">A personalized pocket coach that provides bite-sized science driven tools to boost emotional intellegence.</p>
              <p className="text-3xl text-left">Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
            </div>
        </div>
        <div className='h-80 w-80 rounded-full absolute -z-1' style={{background:"#fae8dc",left:"-100px",bottom:"40px"}}>

        </div>
    </div>
  )
}

export default MeetAhead