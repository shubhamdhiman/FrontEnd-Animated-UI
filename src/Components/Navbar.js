import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-around items-center p-8'>
        <div>
            <img src=''/>
        </div>
        <div className='flex justify-between gap-8 font-medium'>
            <p>Emotions</p>
            <p>Manifesto</p>
            <p>Self-awareness-test</p>
            <p>Work With Us</p>
        </div>
        <button className='bg-black rounded-full text-white px-8 py-4 font-medium'>Download App</button>
    </div>
  )
}

export default Navbar