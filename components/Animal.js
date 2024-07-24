"use client"
import React from 'react'
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion'
import { useState } from 'react'

const Animal = ({id, spawned}) => {
  let [randomX, setRandomX] = useState(Math.floor(Math.random() * 10));
  let [duration, setDuration] = useState(Math.floor(Math.random() * 4));
  let [currentState, setCurrentState] = useState("idle")
  let [isHeart, setIsHeart] = useState(false)
  const SPEED = 100

  let variants={
    "move":{
      x:randomX,
      opacity:100
    },
    "idle":{
      x:randomX,
      opacity:99
    },
  }

  function changePosition(newRandX) {
    setDuration(Math.abs(randomX-newRandX)/SPEED)
    setRandomX(newRandX)
    variants['move']['x']=randomX
  }

  function onClick(){
    setIsHeart(true)
  }

  function changeState(){
    let randomNum = Math.floor(Math.random() * 2)+1 // next state
    let newRandX = Math.floor(Math.random() * window.innerWidth-40)
    let newduration = Math.random() * 5 +2

    // Max and min newRandX
    newRandX = Math.max(newRandX, 300)
    newRandX = Math.min(newRandX, window.innerWidth-100)
    if (!spawned){
        setIdle(200+Math.random()+10,newduration)
    }
    if (spawned){
      if (currentState!="idle" && randomNum==1){
        setIdle(randomX, newduration)
      }
      else if(((currentState=="move" && Math.sign(newRandX)!=Math.sign(randomX)) || currentState!="move")) {
        setCurrentState("move")
        changePosition(newRandX)
      }else{
        setIdle(randomX, newduration)
      }
    }
  }

  function setIdle(randomX, newduration){
    variants['idle']['x']=randomX+1
    setDuration(newduration)
    setCurrentState("idle")
    setRandomX(randomX+1)
  }

  function doneAnim(){
    if (isHeart){
      setIsHeart(false)
    }
  }

  return (
    <motion.div id={id}className='w-fit h-fit rounded absolute hidden'
      variants={variants}
      animate={currentState}
      transition={{duration:duration, ease:"linear"}}
      onAnimationComplete={changeState}
      onClick={!isHeart?onClick:()=>{}}
      >
    <motion.div
    className={`absolute left-[25%] -z-20 w-10 h-10 bg-red-900 ${isHeart?"inline":"hidden"}`}
    animate={isHeart?{
      y:-100,
      opacity:20
    }:
    {
      y:Math.random()
    }
    }
    transition={
      {
        ease:easeOut,
        duration:isHeart?0.3:0.1
      }
    }
    onAnimationComplete={
      isHeart?doneAnim:null
    }
    > 
    </motion.div>
    <div className='w-20 h-20 bg-red-50'></div>
    </motion.div>
  )
}

export default Animal