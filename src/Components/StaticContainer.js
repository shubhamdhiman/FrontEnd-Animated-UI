import React from 'react'

function StaticContainer() {
  return (
    <div className='flex h-90 justify-center items-center p-8 px-16 mt-16 mb-24 w-full'>
        <div className='w-1/3 flex justify-start pl-24 items-start font-medium 'style={{fontSize:"2.5rem",height:"200px"}}>EQ Beats IQ</div>
        <div className='w-1/3 text-left p-8 pr-16' style={{fontSize:"2rem"}}>People with high emotional intelligence &#40;EQ&#41; live more fulfilled lives. They tend to be happier and have healthier relationships.</div>
        <div className='w-1/3 text-left p-8 pr-16' style={{fontSize:"2rem"}}>They are more successfull in their pursuits and make for inspiring leaders. According to science they earn &#36;25 a year.</div>
    </div>
  )
}

export default StaticContainer