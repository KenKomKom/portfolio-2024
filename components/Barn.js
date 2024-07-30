"use client"

import {React, useState} from 'react'
import { motion } from 'framer-motion'
import { poppins } from '@/fonts/fonts'

const Barn = ({spawnFunc, counter}) => {
  let [canSpawn, setCanSpawn] = useState(true)
  let spawn=()=>{
    if (counter<5){
      counter+=1
      spawnFunc()
    }else{
      setCanSpawn(false)
    }
  }
  return (
    <div className='ml-4 w-fit h-full'>
    <motion.div className={`absolute ${poppins.className} font-bold text-black text-center text-sm`}
    animate={{
      y:[5, 10,5]
    }}
    transition={{repeat:Infinity, duration:2}}
    
    >
      {canSpawn?"Click to\n spawn":"cannot"}
    </motion.div>
    <img src='../../static/cats/cat-house.png' className='pixelated h-full' onClick={spawn}></img>
    </div>
    
  )
}

export default Barn