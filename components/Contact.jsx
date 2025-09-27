"use client"
import { openingHours, socials } from '@/Data/navLinks'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  useGSAP(()=>{
const titleSplit=SplitText.create("#contact",{type:"words"});
const timeLine=gsap.timeline({
  scrollTrigger:{
    trigger:"#contact",
    start:"top center",

  },
  ease:"power1.inOut"
})
timeLine.from(titleSplit.words,{opacity:0,yPercent:100,stagger:0.02,duration:1})

  },[])
  return (
    <footer id='contact'>
      <img src='/images/footer-right-leaf.png' alt='right-leaf' id='f-right-leaf' />
      <img src='/images/footer-left-leaf.png' alt='left-leaf' id='f-left-leaf' />
      <div className="content">
        <h2>Where to Find Us</h2>
        <div className="">
          <h3 className="">
            Visit Our Bar
          </h3>
          <p className="">
            Random Adress
          </p>
        </div>
        <div className="">
          <h3 className="">
            Contact Us
          </h3>
          <p className="">
            885125726
          </p>
          <p className="">rawatadityasingh0gmail.com</p>
        </div>
        <div className="">
          <h3 className="">
            Open Every Hour
          </h3>
          {openingHours.map((time)=>{
            return <p className="" key={time.day}>
              {time.day}: {time.time}
            </p>
          })}
        </div>
        <div className="">
          <h3>Socials </h3>
          <div className="flex-center gap-5">

          {socials.map((social)=>{
            return <Link href={social.url} target='_blank' key={social.name}>
              <img src={social.icon} alt={social.name} />
            </Link>
          })}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Contact