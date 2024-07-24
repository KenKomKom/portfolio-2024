"use client"
import {React, useState} from 'react'
import { poppins,jose } from '@/fonts/fonts'
import { easeOut, motion } from 'framer-motion'

const BentoGrid = ({kegiatanList}) => {
  return (
    <div className='flex flex-col items-center w-full '>
      <div className=' grid grid-flow-row-dense grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-3 w-full'>
        {kegiatanList.map(k=>(
          <BentoCard key={k['id']} header={k['header']} l={k['kegiatan']} logo = {k['logo']} />
        ))}
      </div>
    </div>
    
  )
}

  const BentoCard=(header, l, logo)=>{
  let [hovered, setHovered] = useState(false)
  let [randomRot, setRandomRot] = useState(0)
  
  const handle_hover=()=>{
    console.log("in handle_hover")
    setRandomRot(Math.random()*5)
    setHovered((prev)=>(!prev))
  }
  
  return(
    <motion.div 
    className={`rounded-md hover:shadow-xl ${header.header==='Keluarga Mahasiswa Buddhis UI'||header.header==='Ristek'?"col-span-2":""} bg-white flex flex-col justify-center items-center sm:flex-row sm:px-5 sm:py-5`}
    initial={
      {y:0}
    }
    whileHover={
      {
        y:-10,
        rotate:randomRot
      }
    }
    transition={{
      duration:0.1,
      ease:easeOut
    }}
    onHoverStart={handle_hover}
    onHoverEnd={handle_hover}>
      <div className='flex items-center'>
        <img src={header.logo} alt={header.logo} className='w-52 x-fit object-contain px-0 py-0 mx-0 my-0'/>
      </div>
      <div className='flex flex-col gap-4 px-2 justify-center sm:max-w-[60%] max-w-[90%]'>
        <p className={`font-bold ${jose.className} text-xl sm:text-left text-center`}>
        {header.header}</p>
        <ul className=''>
          {header.l.map(k=>(
            <li key={k} className={`${poppins.className} sm:inline hidden`}>{k}<hr/></li>
            
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default BentoGrid