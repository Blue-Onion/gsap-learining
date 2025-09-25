"use client";
import About from "@/components/About";
import { Art } from "@/components/Art";
import Cocktails from "@/components/Cocktails";
import Hero from "@/components/Hero";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger,SplitText)
  
  return (
    < main>
     <Hero/>
     <Cocktails/>
     <About/>
     <Art/>
    </ main>
  );
}
