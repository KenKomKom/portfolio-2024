"use client"
import React from 'react'
import { easeOut, motion, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'

const NavBar = ({currentState, handle_change2}) => {
    return (
        <div className='w-screen sm:h-7 md:h-1 lg:h-14 top-5 fixed flex justify-center items-center z-20 '>
          <NavButton currentState= {currentState} name="About" handle_change={handle_change2}/>
          <Line currentState={currentState}/>
          <NavButton currentState= {currentState} name="Experience" handle_change={handle_change2}/>
          <Line currentState={currentState}/>
          <NavButton currentState= {currentState} name="Extras" handle_change={handle_change2}/>
        </div>
  )
}

const NavButton=({currentState, name, handle_change})=>{
    return(
        <div className='h-fit flex flex-col justify-center items-center'>
            <Link href={`/home/#${name}`}>
              <motion.div className={`${currentState!=name?'border-4 h-7 w-7':"rotate-45 bg-white border-4 h-7 w-7"} ${currentState===''?"border-white":"border-black"}`}
              whileHover={currentState!=name?{
                  rotate:45,
                  transition: { duration: 0.2, ease:easeOut },
                  marginBottom:"10px"
              }:{
                  transition: { duration: 0.2, ease:easeOut },
                  marginBottom:"10px"
              }}
              whileTap={currentState!=name?{
                rotate:0
              }:{}}
              whileInView={
                currentState!=name?{
                  borderWidth:"3px",
                  backgroundColor:"",
                  borderColor:currentState===''?"white":"black",
                  height:"1.75rem",
                  width:"1.75rem",
                  rotate:0
                }:
                {
                  rotate:45,
                  backgroundColor:"white",
                  borderWidth:"3px",
                  borderColor:currentState===''?"white":"black",
                  height:"1.75rem",
                  width:"1.75rem"
                }
              }
              onClick={()=>{handle_change && handle_change(name);}}
              >
              </motion.div>
            </Link>
            <p className={`text-center text-${currentState===''?"white":"black"}`}>{name}</p>
        </div>

    )
}

const Line = ({currentState}) => (
  <div className={`${currentState===''?"bg-white":"bg-black"} w-1/5 h-0.5 mb-6`}/>
);

export default NavBar