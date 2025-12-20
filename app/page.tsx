"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,150,190,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,150,190,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[#2596be]/8 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 pb-24 sm:pb-28">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-center text-white">
            CodaCoding
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/30 text-center mt-2 sm:mt-3 tracking-[0.3em] uppercase">
            Solutions
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-3 sm:mt-4" />
        </motion.div>

        {/* Step-up Graph Animation */}
        <StepGraph />

        {/* Live Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <div className="relative inline-block">
            <div className="text-xs sm:text-sm text-white/70 tracking-[0.4em] uppercase px-6 sm:px-8 py-2.5 sm:py-3 bg-white/5 backdrop-blur-sm rounded-md relative overflow-hidden">
              Live Soon
              {/* Animated border snake */}
              <motion.div
                className="absolute inset-0 rounded-md"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social media marquee */}
      <SocialMarquee />
    </div>
  );
}

function StepGraph() {
  const steps = [
    { height: 60, delay: 0.3 },
    { height: 70, delay: 0.5 },
    { height: 75, delay: 0.7 },
    { height: 80, delay: 0.9 },
    { height: 85, delay: 1.1 },
  ];

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
      {/* Graph */}
      <div className="flex items-end gap-2.5 sm:gap-4 md:gap-5 h-28 sm:h-36 md:h-44">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: `${step.height}%`, opacity: 1 }}
            transition={{
              delay: step.delay,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="w-7 sm:w-10 md:w-14 bg-gradient-to-t from-white/70 to-white/20 rounded-sm relative"
          >
            {/* Value */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: step.delay + 0.3 }}
              className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-white/50 whitespace-nowrap font-light"
            >
              {step.height}%
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="text-[10px] sm:text-xs md:text-sm text-white/30 tracking-[0.3em] uppercase"
      >
        Building Excellence
      </motion.p>
    </div>
  );
}

function SocialMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  const socials = [
    { icon: Linkedin, url: "https://linkedin.com/company/codacoding" },
    { icon: Instagram, url: "https://instagram.com/codacoding.dev" },
    { icon: Twitter, url: "https://x.com/codacodingdev" },
  ];

  // Duplicate many times for truly seamless infinite scroll
  const duplicatedSocials = Array(20).fill(socials).flat();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-black/40 backdrop-blur-md border-t border-white/5 py-4 sm:py-5 overflow-hidden">
      <motion.div
        className="flex gap-6 sm:gap-8 md:gap-10"
        animate={{
          x: isPaused ? undefined : [0, "-50%"],
        }}
        transition={{
          x: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        onHoverStart={() => setIsPaused(true)}
        onHoverEnd={() => setIsPaused(false)}
      >
        {duplicatedSocials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
          >
            <social.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/60 hover:text-white" strokeWidth={2} />
          </a>
        ))}
      </motion.div>
    </div>
  );
}

  