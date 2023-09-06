import React from 'react'
import Mark from './Mark'
import { openvacanciesData } from '../Utils'
function OpenVacancies() {
  return (
    <div className='mb-44'>
        <p className='font-bold mb-16 px-44' style={{fontSize:"4rem"}}>Open Vacancies</p>
        <div className='flex w-4/5 m-auto'>
  {openvacanciesData.map((item) => {
    return (
      <div
        key={item.id}
        className={`w-full md:w-1/2 lg:w-1/3 xl:w-2/6 h-60 rounded-3xl p-4  lg:p-6 xl:p-8 pr-2 ${item.mg}`}
        style={{ backgroundColor: "#fefbec" }}
      >
        <p className='text-2xl font-semibold mb-8'>{item.heading}</p>
        <ul className='w-90'>
          <li className='flex items-center'><Mark></Mark> &emsp;{item.list1}</li>
          <li className='my-4 md:my-0 flex items-center'><Mark></Mark> &emsp;{item.list2}</li>
          <li className='flex items-baseline'><Mark></Mark> &emsp;{item.list3}</li>
        </ul>
      </div>
    );
  })}
</div>

    </div>
  )
}

export default OpenVacancies