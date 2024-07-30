"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import {React, useRef, useState, useEffect} from 'react'
import { jose, poppins } from "../fonts/fonts";
import BentoGrid from "./BentoGrid";

const Experience = ({currentState, handle_change}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  let kegiatanList=[
    {
      'id':0,
      "header":"Keluarga Mahasiswa Buddhis UI",
      "kegiatan":["Coordinated staffs to hold a training for writing article with 26 participants","Coordinated staffs to publish 19 posts on Instagram so far on @paramita.kmbui","As the project officer, hosted an event where alumnis can share information on their career path for members of KMB UI, with 17 participants.","Hosted a gathering event for members of KMB UI on the day of graduation"],
      "logo":"../../static/experience/kmb.svg"
    },
    {
      'id':1,
      "header":"Google Development Student Club",
      "kegiatan":["As a team of two created 39 Instagram feeds for @gdsc.ui from October 2023 until May 2024","Designed merchandises for GDSC’s member and staffs which includes, 2 t-shirt, 3 stickers, 1 lanyard"],
      "logo":"../../static/experience/gdsc.png"
    },
    {
      'id':2,
      "header":"Teaching Assistant",
      "kegiatan":["Graded a total of more than 100 homeworks and quizzes during the whole semester ","Supervise both midterm and finals exam"],
      "logo":"../../static/experience/pacil.svg"
    },
    {
      'id':4 ,
      "header":"Ristek",
      "kegiatan":["Overall have made 4 games in total","Awarded best Lead on RISTEK Game Development out of 4 other leads","Taught the staffs the basics of visual assets for making video games with Godot for 2 sessions","Supervised 3 teams when they were working on each of their games"],
      "logo":"../../static/experience/ristek.png"
    }, 
  ]

  useEffect(() => {
      const handleScroll = () => {
      if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          const isVisible = (
          (-1*window.innerHeight || -1*document.documentElement.clientHeight)<=rect.top &&
          rect.top<=(window.innerHeight/2 || document.documentElement.clientHeight/2) &&
          rect.bottom > (window.innerHeight/2 || document.documentElement.clientHeight/ 2)
          );
          setIsVisible(isVisible);
          if (isVisible){
              handle_change("Experience")
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
    <div ref={elementRef} className='h-[100%] py-3 bg-slate-200 overflow-hidden' id="Experience">
      <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" font-bold leading-relaxed text-center"
      >
        <Highlight className={`text-white ${jose.className} text-5xl sm:text-6xl  px-2 text-center align-middle`}>
          My Experiences
        </Highlight>
      </motion.h1>
    </HeroHighlight>
    <BentoGrid kegiatanList={kegiatanList}/>
    </div>
  )
}

export default Experience