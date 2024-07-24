"use client"
import { React, useEffect, useState, useRef} from 'react'
import { jose, poppins, bodoniModa } from "@/fonts/fonts";
import { CanvasRevealEffect } from './ui/canvas-reveal-effect';
import { motion } from 'framer-motion';

const Hero = ({currentState, handle_change}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
      if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          const isVisible = (
          (-1*window.innerHeight || -1*document.documentElement.clientHeight)<=rect.top &&
          rect.top<=(window.innerHeight/2 || document.documentElement.clientHeight/2) &&
          rect.bottom > (window.innerHeight/2 || document.documentElement.clientHeight/ 2)
          );
          // console.log(rect.top, window.innerHeight/2)
          // console.log(rect.top+","+ rect.bottom +","+window.innerHeight/2 )
          setIsVisible(isVisible);
          if (isVisible){
              handle_change("")
          }
      }
      };
  
      window.addEventListener('scroll', handleScroll);
      // Initial check on component mount
      handleScroll();
  
      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <section ref={elementRef} className={`flex h-screen bg-[#BD3C3C] relative text-white ${jose.className}`}>
    <CanvasRevealEffect
      animationSpeed={2}
      containerClassName="bg-[#320000]"
      colors={[
        [153,41,41],
        [189,60,60]
      ]}
      dotSize={3}
      showGradient={true}
    />

    {/* <p className={`absolute left-[10%] top-[10%] text-3xl sm:text-[11rem] font-bold ${bodoniModa.className} text-[#b92f67]`}>PORTOFOLIO</p> */}

    <div className='absolute w-screen h-screen'>
    
    {/* <img className='absolute w-screen h-screen object-cover z-1'
        src="../../static/images/image2.png"
        alt="logo"
        style={{
          mixBlendMode: "normal",
          clipPath: "polygon(0% 0, 0 0,  70% 100%, 75% 100%)"
        }}
    /> */}
    <div className='absolute left-[10%] top-[15%] sm:left-[15%] sm:top-[18%] text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9.5rem]'>PO</div>
    <div className='absolute left-[20%] top-[25%] sm:left-[20%] sm:top-[32%] text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9.5rem]'>RT</div>
    <div className='absolute right-[25%] top-[35%] sm:right-[20%] sm:top-[28%] text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9.5rem]'>FO</div>
    <div className='absolute right-[10%] top-[45%] sm:right-[14%] sm:top-[43%] text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9.5rem]'>LIO</div>

    <motion.svg className='absolute w-screen h-screen object-cover bg-[#bc5f5f] z-10'
        style={{
          mixBlendMode: "difference",
          clipPath: "polygon(50% 0, 0 0, 70% 100%, 75% 100%)"
        }}
        animate={{
          clipPath:"polygon(50% 0, 0 0, 70% 100%, 75% 100%)"
        }}
        transition={{delay:2, duration:0.2}}
    />
    </div>
    
    

    <div className='h-fit flex absolute items-center left-[5%] sm:left-[10%] bottom-[10%]  gap-2'>
      <div className='w-1 bg-white h-32 '/>
      <div className='flex flex-col gap-2'>
        <p className={`${jose.className} text-xl sm:text-4xl font-bold`}>
          Kenichi Komala
        </p>
        <div className={`${poppins.className} flex flex-col sm:flex-row sm:gap-10 gap-1 justify-start w-50`}>
          <p>kenichikomala@gmail.com</p>
          <p>linkedin.com/in/kenichi-komala/</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero