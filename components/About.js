"use client"
import {React, useRef, useState, useEffect} from 'react'
import { HeroParallax } from './ui/hero-parallax'

const About = ({currentState, handle_change}) => {
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
                handle_change("About")
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
        <div ref={elementRef} className='py-0 h-fit bg-gradient-to-b bg-slate-200 from-white to-grey-100' id="About">
            <HeroParallax products={[
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/1.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/2.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/3.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/4.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/5.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/6.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/7.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/8.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/9.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/10.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/11.png"
            },
            {
                "title": "a",
                "link": "#",
                "thumbnail": "../../static/parallax/12.png"
            },
            ]}
            />
        </div>
    )
}

export default About