"use client";

import Hero from "@/components/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger,SplitText)
  
  return (
    < main className="">
     <Hero/>
    </ main>
  );
}
