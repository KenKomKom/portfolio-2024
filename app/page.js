"use client"
import {React, useState, useEffect} from 'react'
import Farm from '@/components/Farm'
import About from '@/components/About'
import NavBar from '@/components/NavBar'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Games from '@/components/Games'

const page = () => {
  let [currentState, setCurrentState] = useState("")
  
  let handle_change = (newState)=>{
    setCurrentState(newState)
  }
  
  return (
    <section className='w-screen flex-col'>
      <NavBar currentState={currentState} handle_change2={(newState)=>{handle_change(newState)}}/>
      <Hero currentState={currentState} handle_change={(newState)=>{handle_change(newState)}}/>
      <About currentState={currentState} handle_change={(newState)=>{handle_change(newState)}}/>
      <Experience currentState={currentState} handle_change={(newState)=>{handle_change(newState)}}/>
      <Games/>
      <Farm currentState={currentState} handle_change={(newState)=>{handle_change(newState)}}/>
    </section>
    
  )
}

export default page