import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
    <div className='w-full flex md:w-auto items-center rounded-full text-xs gap-2 ring-[1.5px] ring-gray-300 px-2'>
    <Image src="/search.png" alt='search bar' height={20} width={20}/>
    <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none'/>
  </div>
  )
}

export default TableSearch