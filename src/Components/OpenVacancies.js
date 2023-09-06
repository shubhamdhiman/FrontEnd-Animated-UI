import React from 'react'
import Mark from './Mark'
import { openvacanciesData } from '../Utils'
function OpenVacancies() {
  return (
    <div className='mb-44'>
        <p className='font-bold mb-16 px-44' style={{fontSize:"4rem"}}>Open Vacancies</p>
        <div className='flex w-4/5 m-auto'>
           {openvacanciesData.map((item)=>{
        return <div key={item.id} className={`w-2/6 h-60 rounded-3xl p-8 ${item.mg}`}style={{backgroundColor:"#fefbec"}}>
            <p className='text-2xl font-semibold mb-8'>{item.heading}</p>
            <ul className=' w-90'>
                <li className='flex items-center'><Mark></Mark> &emsp;{item.list1}</li>
                <li className='my-4 flex items-center'><Mark></Mark> &emsp;{item.list2}</li>
                <li className='flex items-center'><Mark></Mark> &emsp;{item.list3}</li>
            </ul>
        </div>
        
           })}
            {/* <div className='w-2/6 mx-12 h-60 rounded-3xl'style={{backgroundColor:"#fefbec"}}></div>
            <div className='w-2/6 h-60 rounded-3xl'style={{backgroundColor:"#fefbec"}}></div> */}
        </div>
    </div>
  )
}

export default OpenVacancies