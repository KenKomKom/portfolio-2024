"use client";
import { jose, poppins } from "@/fonts/fonts";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [-0.06, 0.2], [-500,-50]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-fit overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="-z-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full flex-col ">
      <h1 className={`text-5xl sm:text-6xl  text-center text-[#ED4E4E] font-bold ${jose.className}`}>
        ABOUT ME
      </h1>
      <p className={`mt-8  text-center w-full text-[1.5rem] ${poppins.className}`}>
        I am a  <span className="font-bold md:text-4xl text-[#ED4E4E]">Programmer</span><br/>
        and somewhat of a <span className="font-bold md:text-4xl text-[#ED4E4E]">Artist</span> myself
      </p>
      <p className={`mt-2 text-center w-full text-[1rem] ${poppins.className}`}>
        Learned : <span className="font-bold text-[#ED4E4E]">Django, Springboot, NextJs, PostgreSQL, GDScript, Octave</span>
      </p>
      <p className=" mt-8  text-center w-full text-[1rem]">
        currently studying <span className="font-bold md:text-1xl">computer science </span>in<br/>
        <span className="font-bold md:text-2xl">University of Indonesia (UI)</span>
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-64 w-64 relative flex-shrink-0"
    >
      {/* <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      > */}
        <img
          src={product.thumbnail}
          height="20%"
          width="20%"
          className="object-cover object-left-top absolute h-full w-full inset-0 bg-transparent"
          alt={product.title}
        />
      {/* </Link> */}
      {/* <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2> */}
    </motion.div>
  );
};
