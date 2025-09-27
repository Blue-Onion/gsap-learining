"use client";
import About from "@/components/About";
import { Art } from "@/components/Art";
import Cocktails from "@/components/Cocktails";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  return (
    < main>
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </ main>
  );
}
