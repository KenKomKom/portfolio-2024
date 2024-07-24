"use client"
import { useState, useRef, useEffect } from 'react'
import React from 'react'
import Animal from './Animal'
import Image from "next/image";
import { poppins } from '@/fonts/fonts';
import Barn from './Barn';

const Farm = ({currentState, handle_change}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  let [count, setCount] = useState(2)

  let [spawned1, setSpawned1] = useState(false)
  let [spawned2, setSpawned2] = useState(false)
  let [spawned3, setSpawned3] = useState(false)
  let [spawned4, setSpawned4] = useState(false)
  let [spawned5, setSpawned5] = useState(false)
  
  const spawn=()=>{
    let animal
    if (count==2){
        animal = document.getElementById("animal_1")
        animal.style['display']="inline"
        animal = document.getElementById("animal_2")
        animal.style['display']="inline" 
        setSpawned1(true)
        setSpawned2(true)
    }
    if (count<=5){
        animal = document.getElementById("animal_"+(count))
        animal.style['display']="inline"
        if (count==3){
            setSpawned3(true)
        }else if(count==4){
            setSpawned4(true)
        }else if(count==5){
            setSpawned5(true)
        }
        setCount(count+1)
    }
  }

  useEffect(() => {
      const handleScroll = () => {
      if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          const isVisible = (
          (-1*window.innerHeight || -1*document.documentElement.clientHeight)<=rect.top &&
          rect.top<=(window.innerHeight/1.5 || document.documentElement.clientHeight/1.5) &&
          rect.bottom > (window.innerHeight/2 || document.documentElement.clientHeight/2)
          );
          
          setIsVisible(isVisible);
          if (isVisible){
              handle_change("Extras")
          }
      }
      };

      window.addEventListener('scroll', handleScroll);
      // Initial check on component mount
      handleScroll();
      spawn()
      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div ref={elementRef} id="Extras" className='h-fit flex-col items-end justify-end w-full pt-20 bg-slate-200'>
        <section id="field" className='w-screen flex h-20'>
            <Barn spawnFunc={spawn}/>
            <Animal id={"animal_1"} spawned={spawned1}/>
            <Animal id={"animal_2"} spawned={spawned2}/>
            <Animal id={"animal_3"} spawned={spawned3}/>
            <Animal id={"animal_4"} spawned={spawned4}/>
            <Animal id={"animal_5"} spawned={spawned5}/>
        </section>
        <footer className={`bg-slate-900 h-32 w-screen text-black relative ${poppins.className}`}>
            <div className='absolute bottom-0 text-center w-screen flex gap-10 justify-center bg-slate-100'>
                <p>Build with <Image
                                src="/next.svg"
                                alt="next Logo"
                                className="inline-block self-center"
                                width={60}
                                height={24}
                                priority
                                />
                </p>
                <p>Amplified with AceternityUI</p>  
            </div>

        </footer>
    </div>
  )
}

export default Farm