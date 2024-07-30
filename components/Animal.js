"use client"
import React, { use } from 'react'
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion'
import { useState } from 'react'

const Animal = ({id, spawned}) => {
  let [randomX, setRandomX] = useState(Math.floor(Math.random() * 10));
  let [duration, setDuration] = useState(Math.floor(Math.random() * 4));
  let [currentState, setCurrentState] = useState("idle")
  let [isHeart, setIsHeart] = useState(false)
  let [delta, setDelta] = useState(0)
  const SPEED = 40

  let variants={
    "move":{
      x:randomX,
      opacity:100
    },
    "idle":{
      x:randomX,
      opacity:99
    },
    "sleep":{
      x:randomX,
      opacity:98
    },
    "lick":{
      x:randomX,
      opacity:100
    }
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
    let randomNum = Math.floor(Math.random() * 4)+1 // next state
    let newRandX = Math.floor(Math.random() * window.innerWidth-40)
    let newduration = Math.random() * 5 +2

    // Max and min newRandX
    newRandX = Math.max(newRandX, 300)
    newRandX = Math.min(newRandX, window.innerWidth-100)
    if (!spawned){
        setIdle("idle",100+Math.random()+10,newduration)
    }
    if (spawned){
      if (currentState!="idle" && randomNum==1){
        setIdle("idle",randomX, newduration)
      }
      else if(((currentState=="move" && Math.sign(newRandX)!=Math.sign(randomX)) || currentState!="move") && randomNum==2) {
        setCurrentState("move")
        setDelta(newRandX-randomX)
        changePosition(newRandX)
      }
      else if(currentState!="sleep" && randomNum==3){
        setIdle("sleep",randomX, newduration)
      }
      else if(currentState!="lick" && randomNum==4){
        setIdle("lick",randomX, newduration)
      }else{
        setIdle("idle",randomX, newduration)
      }
    }
  }

  function setIdle(state,randomX, newduration){
    variants[state]['x']=randomX+1
    setDuration(newduration)
    setCurrentState(state)
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
      className={`absolute left-[25%] -z-20 w-10 h-10 ${isHeart?"inline":"hidden"}`}
      animate={isHeart?{
        y:-50,
        opacity:20
      }:
      {
        y:20+Math.random()
      }
      }
      transition={
        {
          ease:easeOut,
          duration:isHeart?0.4:0.1
        }
      }
      onAnimationComplete={
        isHeart?doneAnim:null
      }
      > 
      <img src='../../static/cats/cat-love.png' className='pixelated scale-110'/>
      </motion.div>
      <img
      src={"../../static/cats/cat_"+currentState+".gif"}
      alt={currentState}
      className={`pixelated w-20 h-20 ${delta<0? "scale-x-[-1]": "scale-x-1"}`}
      />
      {/* <div className='w-20 h-20 bg-red-50'></div> */}
    </motion.div>
  )
}

export default Animal