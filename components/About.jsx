import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'


const About = () => {
    useGSAP(()=>{
        const textSpilit=SplitText.create("#about h2",{
            type:"words",
        })
        const scrollTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:"#about",
                start:"top center",
       
            }
        }).from(textSpilit.words, {
            yPercent: 100,
            opacity:0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.02,
        }) .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
    })
    return (
        <section id='about'>
            <div className="px-5 space-y3  mb-16 md:px-0">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">
                            Best Cocktails
                        </p>
                        <h2>
                            Where every detail matters <span className='text-white'>
                                -
                            </span>from muddle to garnish
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p className="">
                            Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                        </p>
                        <div className="">
                            <p className="md:text-3xl text-xl font-bold">
                                <span className="">
                                    4.5
                                </span>/5

                            </p>
                            <p className="text-sm">
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="top-grid">
                        <div className="md:col-span-3">
                            {/* <div className='noisy' /> */}
                            <img src="/images/abt1.png" alt='abt1' />
                        </div>
                        <div className="md:col-span-6">
                            <div className='noisy' />
                            <img src="/images/abt2.png" alt='abt2' />
                        </div>
                        <div className="md:col-span-3">
                            {/* <div className='noisy' /> */}
                            <img src="/images/abt4.png" alt='abt3' />
                        </div>
                    </div>  
                    <div className="bottom-grid">
                        
                        <div className="md:col-span-8">
                            <div className='noisy' />
                            <img src="/images/abt3.png" alt='abt2' />
                        </div>
                        <div className="md:col-span-4">
                            {/* <div className='noisy' /> */}
                            <img src="/images/abt5.png" alt='abt3' />
                        </div>
                    </div>
                  
            </div>

        </section>
    )
}

export default About