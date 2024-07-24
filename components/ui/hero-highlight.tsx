"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  currentState
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  currentState?:string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full mb-10",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className={cn( className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
  currentState,
}: {
  children: React.ReactNode;
  className?: string;
  currentState?:string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      whileInView={{
        backgroundSize: currentState!="Experience"?"100% 100%":"0% 100%",
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `py-2 px-2 rounded-lg bg-gradient-to-r from-red-600 to-red-400 `,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
